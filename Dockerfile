FROM dunglas/frankenphp:php8.4

RUN install-php-extensions pdo_mysql

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["frankenphp", "php-server", "-r", "/app", "--listen", ":8080"]
