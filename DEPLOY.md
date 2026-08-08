# Deploying to EC2

Laravel 13 + Inertia, so the box needs PHP — this cannot go on Amplify Hosting or
S3. RDS is deferred; SQLite covers sessions, cache and queue until the backend
starts.

Files in `deploy/`:

| File                    | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `nginx.conf`            | Site config, document root at `public/`  |
| `deploy.sh`             | Re-runnable deploy (pull → build → cache) |
| `env.production.example`| Production `.env` template               |

---

## 1. Launch the instance

- **AMI:** Ubuntu Server 24.04 LTS
- **Type:** `t3.small` to start. `t3.micro` (1 GB) can OOM during `npm run build`
  — if you use it, add swap first (step 2).
- **Storage:** 20 GB gp3
- **Security group:** inbound `22` from your IP only, `80` and `443` from anywhere
- **Elastic IP:** allocate and associate one, or the public IP changes on stop/start

## 2. Base packages

```bash
sudo apt update && sudo apt upgrade -y

# 2 GB swap — cheap insurance for the Vite build on small instances
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

sudo apt install -y nginx git unzip \
  php8.3-fpm php8.3-cli php8.3-mbstring php8.3-xml php8.3-curl \
  php8.3-zip php8.3-sqlite3 php8.3-intl php8.3-bcmath

# Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Node 22 (matches local)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

Add `php8.3-mysql` when you move to RDS.

## 3. Get the code on the box

The project isn't a git repo yet. Locally:

```bash
git init && git add . && git commit -m "Initial commit"
git remote add origin git@github.com:you/atlantic-ave-cruisers.git
git push -u origin main
```

Confirm `.env`, `/vendor`, `/node_modules` and `/public/build` are gitignored
before that first commit.

Then on the instance:

```bash
sudo mkdir -p /var/www/atlantic && sudo chown $USER:$USER /var/www/atlantic
git clone git@github.com:you/atlantic-ave-cruisers.git /var/www/atlantic/current
cd /var/www/atlantic/current
```

## 4. Configure

```bash
cp deploy/env.production.example .env
nano .env                    # set APP_URL to your domain
php artisan key:generate     # fills APP_KEY

touch database/database.sqlite
```

## 5. First deploy

```bash
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

Order matters and the script enforces it: **`composer install` must precede
`npm run build`**, because the Wayfinder Vite plugin shells out to
`php artisan wayfinder:generate` at `buildStart` and needs `vendor/`.

## 6. nginx

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/atlantic
sudo ln -s /etc/nginx/sites-available/atlantic /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

Point the domain's A record at the Elastic IP, wait for it to resolve, then:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d atlanticavecruisers.com -d www.atlanticavecruisers.com
```

Certbot rewrites the site config with TLS and installs a renewal timer.
`SESSION_SECURE_COOKIE=true` in the env template assumes HTTPS — leave it
unset until the certificate is in place, or logins won't persist.

## 7. Verify

```bash
curl -I https://atlanticavecruisers.com          # 200
curl -I https://atlanticavecruisers.com/rates    # 200
curl -I https://atlanticavecruisers.com/rides    # 200
curl -s https://atlanticavecruisers.com/.env     # must be 403, not the file
```

Click through `/rates` and `/rides` in a browser — Inertia navigation is XHR, so
a 200 on the initial load doesn't prove client-side routing works.

---

## Redeploying

```bash
cd /var/www/atlantic/current && ./deploy/deploy.sh
```

## Moving to RDS later

1. Create the instance in the **same VPC** as EC2; scope its security group to
   the instance's SG, not `0.0.0.0/0`.
2. Swap the `DB_*` block in `.env` (template has it commented out) and
   `sudo apt install php8.3-mysql`.
3. `php artisan migrate --force` then `php artisan optimize`.

Sessions, cache and queue all move with it — they're on the default connection.

## Notes

- **Queue worker:** nothing queues jobs yet. When something does, add a
  systemd unit for `php artisan queue:work` — `QUEUE_CONNECTION=database`
  means jobs otherwise sit in the table unprocessed.
- **Scheduler:** if you add scheduled tasks, add
  `* * * * * cd /var/www/atlantic/current && php artisan schedule:run >> /dev/null 2>&1`
  to the crontab.
- **Mail:** `MAIL_MAILER=log` in the template. Fortify's password reset and email
  verification silently write to `storage/logs` until you wire up SES or Postmark.
- **Backups:** the SQLite file is the whole database. Until RDS, snapshot the
  EBS volume or `cp database/database.sqlite` somewhere off-box on a schedule.
