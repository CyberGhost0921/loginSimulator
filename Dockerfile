FROM dunglas/frankenphp:latest

RUN install-php-extensions pdo_mysql

WORKDIR /app

COPY . /app

EXPOSE 8080

CMD ["frankenphp", "run", "--config", "/etc/frankenphp/Caddyfile"]
