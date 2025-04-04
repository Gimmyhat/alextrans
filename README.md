# AlexTrans - Корпоративный сайт транспортно-логистической компании

Сайт для транспортно-логистической компании "Алекс Транс" с возможностью отправки заявок через формы и получения уведомлений в Telegram.

## Технологии

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Telegram API для уведомлений

## Установка и запуск

### Локальная разработка

1. Клонировать репозиторий
   ```bash
   git clone https://github.com/yourusername/alextrans.git
   cd alextrans
   ```

2. Установить зависимости
   ```bash
   npm install
   ```

3. Настроить переменные окружения
   ```bash
   cp .env.example .env
   ```
   
   Отредактируйте файл `.env` и укажите:
   - `VITE_TELEGRAM_BOT_TOKEN` - токен Telegram бота
   - `VITE_TELEGRAM_CHAT_ID` - ID чата или группы для уведомлений
   
   Подробная инструкция по настройке бота в `TELEGRAM_SETUP_GUIDE.md`

4. Создать файл `public/env-config.js` для локальной разработки
   ```bash
   echo "window.env = {};" > public/env-config.js
   ```

5. Запустить в режиме разработки
   ```bash
   npm run dev
   ```

6. Сборка для производственной среды
   ```bash
   npm run build
   ```

## Деплой

### Вариант 1: Ручной деплой без Docker

1. Соберите проект:
   ```bash
   npm run build
   ```

2. Скопируйте содержимое директории `dist/` в директорию веб-сервера:
   ```bash
   cp -r dist/* /var/www/a-t-group.ru/html/
   ```

3. Создайте файл `env-config.js` в корне сайта:
   ```bash
   cat > /var/www/a-t-group.ru/html/env-config.js << EOF
   window.env = {
     "VITE_TELEGRAM_BOT_TOKEN": "ваш_токен_бота",
     "VITE_TELEGRAM_CHAT_ID": "ваш_идентификатор_чата"
   };
   EOF
   ```

4. Настройте Nginx для обслуживания SPA (пример в файле nginx.conf)

### Вариант 2: Деплой с использованием Docker

1. Создайте файл `.env` с необходимыми переменными окружения
   ```bash
   VITE_TELEGRAM_BOT_TOKEN=ваш_токен_бота
   VITE_TELEGRAM_CHAT_ID=ваш_идентификатор_чата
   ```

2. Запустите приложение через Docker Compose:
   ```bash
   docker-compose up -d
   ```

   Приложение будет доступно по адресу http://ваш_сервер:8080/

## Тестирование

Для тестирования отправки уведомлений используйте скрипты:

```bash
node test-telegram.js  # Тестирование базовой отправки сообщений
node test-forms.js     # Тестирование всех типов форм
```

## Дополнительная документация

- `TELEGRAM_SETUP_GUIDE.md` - подробная инструкция по настройке Telegram-бота
- `nginx.conf` - пример конфигурации Nginx
- `docker-compose.yml` - конфигурация для Docker

## Структура проекта

```
alextrans/
├── public/                     # Статические файлы
│   └── env-config.js           # Файл с переменными окружения для браузера
├── src/                        # Исходный код
│   ├── components/             # React-компоненты
│   ├── pages/                  # Страницы сайта
│   ├── assets/                 # Статические ресурсы
│   ├── config/                 # Конфигурационные файлы
│   └── utils/                  # Утилиты, включая сервис отправки уведомлений
├── .env.example                # Пример файла с переменными окружения
├── .env                        # Локальные переменные окружения (не в Git)
├── docker-compose.yml          # Конфигурация Docker Compose
├── Dockerfile                  # Инструкции для сборки Docker-образа
├── docker-entrypoint.sh        # Скрипт для замены переменных окружения
├── nginx.conf                  # Конфигурация Nginx
└── README.md                   # Документация проекта
```

## Обновление на сервере

### Без Docker

```bash
cd /path/to/project
git pull
npm run build
cp -r dist/* /var/www/a-t-group.ru/html/
```

### С Docker

```bash
cd /path/to/project
git pull
docker-compose up -d --build
``` 