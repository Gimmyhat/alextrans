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

1. Клонировать репозиторий
   ```
   git clone <repository-url>
   cd alextrans
   ```

2. Установить зависимости
   ```
   npm install
   ```

3. Настроить переменные окружения
   ```
   cp .env.example .env
   ```
   
   Отредактируйте файл `.env` и укажите:
   - `VITE_TELEGRAM_BOT_TOKEN` - токен Telegram бота
   - `VITE_TELEGRAM_CHAT_ID` - ID чата или группы для уведомлений

4. Запустить в режиме разработки
   ```
   npm run dev
   ```

5. Сборка для производственной среды
   ```
   npm run build
   ```

## Настройка отправки уведомлений в Telegram

1. Создайте бота через @BotFather в Telegram
2. Получите токен бота
3. Создайте группу и добавьте в неё бота (сделайте его администратором)
4. Получите ID группы, отправив в неё сообщение и сделав запрос:
   ```
   https://api.telegram.org/bot<ТОКЕН_БОТА>/getUpdates
   ```
5. Заполните полученные данные в файле `.env`

Подробная информация о настройке Telegram-бота находится в файле `TELEGRAM_SETUP_GUIDE.md`.

## Безопасность

Важные секретные данные (токены, ключи) хранятся в файле `.env`, который не следует включать в систему контроля версий.

В репозитории доступен файл `.env.example` с примером структуры переменных окружения без реальных значений.

## Структура проекта

- `/src` - исходный код
  - `/components` - React-компоненты
  - `/pages` - страницы сайта
  - `/assets` - статические ресурсы
  - `/config` - конфигурационные файлы
  - `/utils` - утилиты, включая сервис отправки уведомлений

## Тестирование

Для тестирования отправки уведомлений используйте скрипты:

```
node test-telegram.js  # Тестирование базовой отправки сообщений
node test-forms.js     # Тестирование всех типов форм
``` 