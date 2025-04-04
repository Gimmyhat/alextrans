import emailjs from '@emailjs/browser';

// Константы для EmailJS
// Эти значения необходимо заменить реальными значениями из аккаунта EmailJS
const SERVICE_ID = 'service_your_service_id';
const TEMPLATE_ID_CALLBACK = 'template_callback';
const TEMPLATE_ID_CALCULATOR = 'template_calculator';  
const TEMPLATE_ID_CONTACT = 'template_contact';
const USER_ID = 'your_user_id'; // Публичный ключ

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

// Функция для отправки заявки на обратный звонок
export const sendCallbackRequest = async (data: ICallbackFormData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_CALLBACK,
      {
        phone: data.phone,
        date: new Date().toLocaleString('ru-RU')
      },
      USER_ID
    );
    
    console.log('Callback request sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending callback request:', error);
    return false;
  }
};

// Функция для отправки заявки из калькулятора
export const sendCalculatorRequest = async (data: ICalculatorFormData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_CALCULATOR,
      {
        from: data.from,
        to: data.to,
        company: data.company,
        name: data.name,
        phone: data.phone,
        email: data.email,
        service: data.service,
        date: new Date().toLocaleString('ru-RU')
      },
      USER_ID
    );
    
    console.log('Calculator request sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending calculator request:', error);
    return false;
  }
};

// Функция для отправки сообщения из контактной формы
export const sendContactMessage = async (data: IContactFormData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_CONTACT,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        date: new Date().toLocaleString('ru-RU')
      },
      USER_ID
    );
    
    console.log('Contact message sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending contact message:', error);
    return false;
  }
}; 