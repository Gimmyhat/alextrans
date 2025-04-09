#!/bin/bash

# Скрипт для установки и настройки Strapi для проекта Алекс Транс

echo "Установка Strapi для проекта Алекс Транс"
echo "========================================"

# Создание сети Docker, если она еще не существует
echo "Проверка и создание Docker сети..."
docker network inspect alextrans_alextrans-network >/dev/null 2>&1 || \
  docker network create alextrans_alextrans-network

# Запуск Strapi и PostgreSQL
echo "Запуск Strapi и PostgreSQL..."
docker-compose up -d

echo -e "\nStrapi запускается. Это может занять до минуты..."
echo "После запуска, откройте http://localhost:1337/admin"
echo "и следуйте инструкциям по созданию администратора."

# Инструкции по настройке nginx
echo -e "\nНастройка nginx для доступа к админке:"
echo "1. Скопируйте файл nginx.conf в директорию /etc/nginx/sites-available/"
echo "   sudo cp nginx.conf /etc/nginx/sites-available/admin.alextrans.a-t-group.ru"
echo "2. Создайте символическую ссылку в sites-enabled:"
echo "   sudo ln -s /etc/nginx/sites-available/admin.alextrans.a-t-group.ru /etc/nginx/sites-enabled/"
echo "3. Проверьте конфигурацию nginx:"
echo "   sudo nginx -t"
echo "4. Перезапустите nginx:"
echo "   sudo systemctl restart nginx"
echo "5. Настройте DNS запись для admin.alextrans.a-t-group.ru, указывающую на IP-адрес сервера"

echo -e "\nНастройка безопасности:"
echo "- В продакшн-окружении измените пароли в docker-compose.yml"
echo "- Убедитесь, что сертификаты SSL настроены корректно"
echo "- Рассмотрите добавление ограничений IP для админки в продакшн"

echo -e "\nДополнительная информация:"
echo "- Документация по созданию типов контента находится в файле content-types.md"
echo "- Пример интеграции с React находится в файле integration-example.js"

echo -e "\nГотово! Удачного использования Strapi!" 