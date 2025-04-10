# Этап сборки
FROM node:20-alpine as builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Создаем .env файл с пустыми значениями для сборки
# Реальные значения будут переданы при запуске контейнера
RUN touch .env && \
    echo "VITE_TELEGRAM_BOT_TOKEN=" >> .env && \
    echo "VITE_TELEGRAM_CHAT_ID=" >> .env

# Собираем приложение
RUN npm run build

# Этап запуска
FROM fholzer/nginx-brotli

# Копируем собранное приложение из предыдущего этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Создаем скрипт для подстановки переменных окружения в runtime
RUN apk add --no-cache bash
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

# Указываем порт для внешнего доступа
EXPOSE 80

# Запускаем скрипт при старте контейнера
ENTRYPOINT ["/docker-entrypoint.sh"]

# Запускаем nginx в качестве основного процесса
CMD ["nginx", "-g", "daemon off;"] 