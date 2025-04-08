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
   # или с помощью Makefile
   make install
   ```

3. Настроить переменные окружения
   ```bash
   # Быстрая настройка окружения через Makefile
   make env-setup
   
   # Или вручную
   cp .env.example .env
   echo "window.env = {};" > public/env-config.js
   ```
   
   Отредактируйте файл `.env` и укажите:
   - `VITE_TELEGRAM_BOT_TOKEN` - токен Telegram бота
   - `VITE_TELEGRAM_CHAT_ID` - ID чата или группы для уведомлений
   
   Подробная инструкция по настройке бота в `TELEGRAM_SETUP_GUIDE.md`

4. Запустить в режиме разработки
   ```bash
   npm run dev
   # или с помощью Makefile
   make dev
   ```

5. Сборка для производственной среды
   ```bash
   npm run build
   # или с помощью Makefile
   make build
   ```

6. Тестирование отправки уведомлений
   ```bash
   # Через Makefile
   make test-telegram  # Базовое тестирование Telegram
   make test-forms     # Тестирование отправки форм
   make test-all       # Запуск всех тестов
   
   # Или напрямую
   node test-telegram.js
   node test-forms.js
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

### Использование Makefile (рекомендуется)

Проект включает Makefile, который значительно упрощает все операции по развертыванию и обслуживанию:

```bash
# Полное развертывание на сервере (сборка + копирование файлов + обновление env-config.js)
make deploy-manual

# Обновление только переменных окружения
make update-env-config

# Запуск в Docker
make docker-compose-up

# Обновление из репозитория и перезапуск в Docker
make docker-deploy

# Быстрое развертывание только статических файлов
make deploy-manual-fast
```

Для просмотра всех доступных команд:
```bash
make help
```

## Миграция на новый сервер

Для переноса проекта на новый VPS выполните следующие шаги:

### 1. Настройка нового сервера

```bash
# Установка Git
apt update
apt install -y git

# Установка Docker и Docker Compose
apt install -y docker.io docker-compose
systemctl enable docker
systemctl start docker

# Установка make (если отсутствует)
apt install -y make
```

### 2. Клонирование и запуск проекта

```bash
# Клонирование репозитория
git clone https://github.com/Gimmyhat/alextrans.git
cd alextrans

# Настройка окружения
make env-setup
# Отредактируйте файл .env с актуальными значениями
vim .env

# Запуск контейнеров
make docker-compose-up

# Или для полного развертывания без Docker
make deploy-manual
```

### 3. Настройка DNS и SSL

1. В панели управления Cloudflare измените A-запись домена `a-t-group.ru` на IP-адрес нового сервера.
2. Убедитесь, что для этой записи включен режим проксирования Cloudflare (оранжевое облачко).
3. В настройках SSL/TLS выберите режим "Full" для обеспечения шифрования между Cloudflare и вашим сервером.

### 4. Проверка и сопровождение

После обновления DNS-записей (может занять до 24 часов) проверьте доступность сайта по адресу https://a-t-group.ru.

При необходимости обновления сайта используйте:

```bash
# Обновление кода и контейнеров
make docker-deploy

# Просмотр логов
make docker-compose-logs

# Тестирование работоспособности
make test-all
```