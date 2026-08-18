#!/usr/bin/env bash
#
# Atlantic Ave Cruisers — deploy on the EC2 box.
#
#   cd /var/www/atlantic/current && ./deploy/deploy.sh
#
# Safe to re-run. Pulls, installs, builds, migrates, re-caches, reloads PHP-FPM.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Pulling"
git pull --ff-only

# Composer MUST run before the asset build: the Wayfinder Vite plugin shells
# out to `php artisan wayfinder:generate` during buildStart, which needs vendor/.
echo "==> PHP dependencies"
composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

echo "==> Node dependencies"
npm ci

echo "==> Building assets"
npm run build

# Everything below writes to storage/, bootstrap/cache/ or the database, so
# permissions have to be right BEFORE artisan runs — not after. Getting this
# backwards means the first command fails on a log it cannot open.
echo "==> Preparing storage"
sudo chown -R "$USER":www-data storage bootstrap/cache
sudo chmod -R ug+rwX storage bootstrap/cache

# The public site runs without a database — sessions and cache are on disk and
# the sign-up is emailed, not stored. Only prepare one if the env asks for it,
# which it will once the auth scaffolding is wanted.
USES_DB=0
if grep -qE '^SESSION_DRIVER=database|^CACHE_STORE=database|^QUEUE_CONNECTION=database' .env 2>/dev/null; then
    USES_DB=1
fi

if [ "$USES_DB" = "1" ] && grep -qE '^DB_CONNECTION=sqlite' .env 2>/dev/null; then
    echo "==> Preparing SQLite"
    # The file must exist before migrate, and the directory must be writable
    # too — SQLite writes a journal alongside the file.
    touch database/database.sqlite
    sudo chown "$USER":www-data database database/database.sqlite
    sudo chmod 664 database/database.sqlite
    sudo chmod 775 database
fi

# Clear before migrating: a config cache left by the previous deploy could
# otherwise point migrations at the old database settings.
echo "==> Clearing caches"
php artisan optimize:clear

if [ "$USES_DB" = "1" ]; then
    echo "==> Migrating"
    php artisan migrate --force
else
    echo "==> Skipping migrations (no database configured)"
fi

echo "==> Caching config, routes, views, events"
php artisan optimize

# PHP-FPM writes as www-data and will have created files during the run.
echo "==> Re-checking permissions"
sudo chown -R "$USER":www-data storage bootstrap/cache
sudo chmod -R ug+rwX storage bootstrap/cache

echo "==> Reloading PHP-FPM"
sudo systemctl reload php8.3-fpm

echo "==> Done"
