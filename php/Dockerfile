FROM php:7.2-cli-stretch

LABEL maintainer="SurionA <frere.maxime@gmail.com>"
LABEL description="Provides an image with basic nodejs service"

RUN pecl install xdebug-2.6.0
RUN docker-php-ext-enable xdebug

COPY source/xdebug.ini /usr/local/etc/php/conf.d/
RUN mkdir -p /src/php/
COPY source/index.php /src/php/

CMD php /src/php/index.php
