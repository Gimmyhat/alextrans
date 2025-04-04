// Константы для Telegram API
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';

// Проверка наличия обязательных переменных окружения
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('Ошибка: Не указаны обязательные переменные окружения для Telegram API');
}

// Интерфейсы для типов данных форм
export interface ICallbackFormData {
  phone: string;
}

export interface ICalculatorFormData {
  from: string;
  to: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  service: string;
}

export interface IContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// Функция для форматирования текста сообщения из формы обратного звонка
const formatCallbackMessage = (data: ICallbackFormData): string => {
  return `🔔 *ЗАПРОС НА ОБРАТНЫЙ ЗВОНОК*\n\n📱 Телефон: ${data.phone}\n⏱ Время запроса: ${new Date().toLocaleString('ru-RU')}`;
};

// Функция для форматирования текста сообщения из формы калькулятора
const formatCalculatorMessage = (data: ICalculatorFormData): string => {
  return `📊 *ЗАЯВКА НА РАСЧЕТ СТОИМОСТИ*\n\n🏢 Компания: ${data.company}\n👤 Имя: ${data.name}\n📱 Телефон: ${data.phone}\n📧 Email: ${data.email}\n\n🚚 Услуга: ${data.service}\n🔄 Маршрут: ${data.from} → ${data.to}\n\n⏱ Время запроса: ${new Date().toLocaleString('ru-RU')}`;
};

// Функция для форматирования текста сообщения из контактной формы
const formatContactMessage = (data: IContactFormData): string => {
  return `✉️ *СООБЩЕНИЕ С САЙТА*\n\n👤 Имя: ${data.name}\n📱 Телефон: ${data.phone}\n📧 Email: ${data.email}\n\n💬 Сообщение:\n${data.message}\n\n⏱ Время отправки: ${new Date().toLocaleString('ru-RU')}`;
};

// Базовая функция для отправки сообщения через Telegram API
const sendTelegramMessage = async (text: string): Promise<boolean> => {
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
      url.searchParams.append(key, params[key as keyof typeof params])
    );
    
    // Отправляем запрос
    const response = await fetch(url.toString());
    const data = await response.json();
    
    if (!data.ok) {
      console.error('Telegram API Error:', data.description);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
};

// Функция для отправки заявки на обратный звонок
export const sendCallbackRequest = async (data: ICallbackFormData): Promise<boolean> => {
  const messageText = formatCallbackMessage(data);
  return await sendTelegramMessage(messageText);
};

// Функция для отправки заявки из калькулятора
export const sendCalculatorRequest = async (data: ICalculatorFormData): Promise<boolean> => {
  const messageText = formatCalculatorMessage(data);
  return await sendTelegramMessage(messageText);
};

// Функция для отправки сообщения из контактной формы
export const sendContactMessage = async (data: IContactFormData): Promise<boolean> => {
  const messageText = formatContactMessage(data);
  return await sendTelegramMessage(messageText);
}; 