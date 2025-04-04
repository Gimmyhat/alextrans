// Простой скрипт для тестирования отправки сообщений в Telegram
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

// Получение текущей директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Загрузка переменных окружения вручную, так как dotenv работает иначе в ES модулях
const envPath = `${__dirname}/.env`;
const envData = fs.readFileSync(envPath, 'utf8');
const envVars = {};

envData.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    const value = match[2].trim();
    envVars[key] = value;
  }
});

const TELEGRAM_BOT_TOKEN = envVars.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = envVars.VITE_TELEGRAM_CHAT_ID;
const TEST_MESSAGE = '🧪 *Тестовое сообщение в группу*\n\nЭто тестовое сообщение отправлено из скрипта для проверки работы Telegram API с отправкой в группу.\n\nВремя отправки: ' + new Date().toLocaleString('ru-RU');

// Проверка наличия обязательных переменных окружения
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('Ошибка: Не указаны обязательные переменные окружения для Telegram API');
  process.exit(1);
}

async function sendTelegramMessage() {
  try {
    const params = {
      chat_id: TELEGRAM_CHAT_ID,
      text: TEST_MESSAGE,
      parse_mode: 'Markdown'
    };
    
    const url = new URL(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`);
    Object.keys(params).forEach(key => 
      url.searchParams.append(key, params[key])
    );
    
    console.log('Отправка сообщения в Telegram...');
    console.log('URL: https://api.telegram.org/bot[СКРЫТО]/sendMessage?...');
    
    const response = await fetch(url.toString());
    const data = await response.json();
    
    console.log('Ответ от API Telegram:');
    console.log(JSON.stringify(data, null, 2));
    
    if (data.ok) {
      console.log('Сообщение успешно отправлено!');
    } else {
      console.error('Ошибка при отправке сообщения:', data.description);
    }
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
  }
}

// Вызываем функцию отправки сообщения
sendTelegramMessage(); 