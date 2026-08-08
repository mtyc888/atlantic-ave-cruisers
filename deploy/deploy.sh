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

# Clear before migrating: a config cache left by the previous deploy could
# otherwise point migrations at the old database settings.
echo "==> Clearing caches"
php artisan optimize:clear

echo "==> Migrating"
php artisan migrate --force

echo "==> Caching config, routes, views, events"
php artisan optimize

echo "==> Fixing permissions"
sudo chown -R "$USER":www-data storage bootstrap/cache
sudo chmod -R ug+rw storage bootstrap/cache
# SQLite needs the directory writable too, not just the file.
if [ -f database/database.sqlite ]; then
    sudo chown "$USER":www-data database database/database.sqlite
    sudo chmod 664 database/database.sqlite
    sudo chmod 775 database
fi

echo "==> Reloading PHP-FPM"
sudo systemctl reload php8.3-fpm

echo "==> Done"
