// Скрипт для тестирования всех трех видов форм
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

// Проверка наличия обязательных переменных окружения
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('Ошибка: Не указаны обязательные переменные окружения для Telegram API');
  process.exit(1);
}

// Форматирование текста сообщения из формы обратного звонка
const formatCallbackMessage = (data) => {
  return `🔔 *ЗАПРОС НА ОБРАТНЫЙ ЗВОНОК*\n\n📱 Телефон: ${data.phone}\n⏱ Время запроса: ${new Date().toLocaleString('ru-RU')}`;
};

// Форматирование текста сообщения из формы калькулятора
const formatCalculatorMessage = (data) => {
  return `📊 *ЗАЯВКА НА РАСЧЕТ СТОИМОСТИ*\n\n🏢 Компания: ${data.company}\n👤 Имя: ${data.name}\n📱 Телефон: ${data.phone}\n📧 Email: ${data.email}\n\n🚚 Услуга: ${data.service}\n🔄 Маршрут: ${data.from} → ${data.to}\n\n⏱ Время запроса: ${new Date().toLocaleString('ru-RU')}`;
};

// Форматирование текста сообщения из контактной формы
const formatContactMessage = (data) => {
  return `✉️ *СООБЩЕНИЕ С САЙТА*\n\n👤 Имя: ${data.name}\n📱 Телефон: ${data.phone}\n📧 Email: ${data.email}\n\n💬 Сообщение:\n${data.message}\n\n⏱ Время отправки: ${new Date().toLocaleString('ru-RU')}`;
};

// Базовая функция для отправки сообщения через Telegram API
const sendTelegramMessage = async (text) => {
  try {
    // Параметры для API запроса
    const params = {
      chat_id: TELEGRAM_CHAT_ID,
      text: text,
      parse_mode: 'Markdown'
    };
    
    // Формируем URL с параметрами
    const url = new URL(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`);
    Object.keys(params).forEach(key => 
      url.searchParams.append(key, params[key])
    );
    
    // Отправляем запрос
    const response = await fetch(url.toString());
    const data = await response.json();
    
    if (!data.ok) {
      console.error('Telegram API Error:', data.description);
      return false;
    }
    
    console.log('Сообщение успешно отправлено!');
    return true;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
};

// Тестовые данные для каждой формы
const callbackTestData = {
  phone: '+7 (902) 123-45-67'
};

const calculatorTestData = {
  from: 'Иркутск',
  to: 'Москва',
  company: 'ООО "Тестовая компания"',
  name: 'Иван Иванов',
  phone: '+7 (902) 123-45-67',
  email: 'test@example.com',
  service: 'Автомобильные перевозки'
};

const contactTestData = {
  name: 'Александр Петров',
  phone: '+7 (902) 123-45-67',
  email: 'alex@example.com',
  message: 'Это тестовое сообщение из контактной формы. Хотел бы узнать о возможности доставки груза из Иркутска в Санкт-Петербург в ближайшее время.'
};

// Функции для тестирования каждой формы
const testCallbackForm = async () => {
  console.log('Тестирование формы обратного звонка...');
  const messageText = formatCallbackMessage(callbackTestData);
  return await sendTelegramMessage(messageText);
};

const testCalculatorForm = async () => {
  console.log('Тестирование формы калькулятора...');
  const messageText = formatCalculatorMessage(calculatorTestData);
  return await sendTelegramMessage(messageText);
};

const testContactForm = async () => {
  console.log('Тестирование контактной формы...');
  const messageText = formatContactMessage(contactTestData);
  return await sendTelegramMessage(messageText);
};

// Тестируем все формы последовательно
async function runAllTests() {
  console.log('Начинаем тестирование всех форм...');
  
  console.log('\n1. Тестирование формы обратного звонка:');
  await testCallbackForm();
  
  console.log('\n2. Тестирование формы калькулятора:');
  await testCalculatorForm();
  
  console.log('\n3. Тестирование контактной формы:');
  await testContactForm();
  
  console.log('\nТестирование завершено!');
}

// Запускаем тесты
runAllTests(); 