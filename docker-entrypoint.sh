#!/bin/bash
set -e

# Создаем файл с переменными окружения для JavaScript
ENV_FILE="/usr/share/nginx/html/env-config.js"

# Создаем содержимое файла
echo "window.env = {" > $ENV_FILE
echo "  VITE_TELEGRAM_BOT_TOKEN: \"${VITE_TELEGRAM_BOT_TOKEN}\","  >> $ENV_FILE
echo "  VITE_TELEGRAM_CHAT_ID: \"${VITE_TELEGRAM_CHAT_ID}\"" >> $ENV_FILE
echo "};" >> $ENV_FILE

echo "Переменные окружения настроены: $ENV_FILE"

# Запускаем основную команду
exec "$@" 