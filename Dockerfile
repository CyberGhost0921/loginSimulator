FROM dunglas/frankenphp:php8.4

RUN install-php-extensions pdo_mysql

WORKDIR /app

COPY . /app
