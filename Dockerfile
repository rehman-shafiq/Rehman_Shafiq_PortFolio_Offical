FROM php:8.3-fpm

# Install System Dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev

# Install PHP Extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Get Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN git config --global --add safe.directory /var/www

WORKDIR /var/www

# Copy all files (including your built assets)
COPY . .

# Fix Permissions for Ubuntu
RUN chown -R www-data:www-data /var/www

EXPOSE 9000
CMD ["php-fpm"]