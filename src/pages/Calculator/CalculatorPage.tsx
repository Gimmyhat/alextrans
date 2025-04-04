import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendCalculatorRequest } from '../../utils/telegramService';

const CalculatorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    company: '',
    name: '',
    phone: '',
    email: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    
    try {
      const success = await sendCalculatorRequest(formData);
      
      if (success) {
        setSubmitSuccess(true);
        // Опционально сбрасываем форму после успешной отправки
        // setFormData({ from: '', to: '', company: '', name: '', phone: '', email: '', service: '' });
      } else {
        setSubmitError('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова позже.');
      }
    } catch (error) {
      console.error('Error in calculator form submission:', error);
      setSubmitError('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Автомобильные перевозки',
    'Сборные грузы',
    'Железнодорожные перевозки',
    'Мультимодальные перевозки',
    'Страхование и документация',
    'Контейнеры 20 футов',
    'Контейнеры 40 футов',
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8">Рассчитать стоимость</h1>
          
          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 relative">
              <strong className="font-bold">Спасибо!</strong>
              <span className="block sm:inline"> Заявка отправлена! Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.</span>
            </div>
          )}

          {submitError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 relative">
              <strong className="font-bold">Ошибка!</strong>
              <span className="block sm:inline"> {submitError}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Откуда */}
            <div>
              <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">ОТКУДА*</label>
              <input 
                type="text"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
                placeholder="Пункт отправления"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                disabled={isSubmitting}
              />
            </div>

            {/* Куда */}
            <div>
              <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">КУДА*</label>
              <input 
                type="text"
                id="to"
                name="to"
                value={formData.to}
                onChange={handleChange}
                placeholder="Пункт назначения"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                disabled={isSubmitting}
              />
            </div>

            {/* Юридическое лицо */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">ЮРИДИЧЕСКОЕ ЛИЦО*</label>
              <input 
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Компания или ИП"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                disabled={isSubmitting}
              />
            </div>

            {/* Имя */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">КАК ВАС ЗОВУТ*</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                disabled={isSubmitting}
              />
            </div>

            {/* Телефон */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">НОМЕР ТЕЛЕФОНА*</label>
              <input 
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ваш телефон"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                disabled={isSubmitting}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ЭЛЕКТРОННАЯ ПОЧТА*</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ваш E-mail"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                disabled={isSubmitting}
              />
            </div>

            {/* Услуга */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">ВЫБЕРИТЕ УСЛУГУ*</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                disabled={isSubmitting}
              >
                <option value="" disabled>Выберите тип услуги</option>
                {services.map((serviceName) => (
                  <option key={serviceName} value={serviceName}>
                    {serviceName}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Согласие */}
            <div className="text-xs text-gray-500 text-center">
              Отправляя заявку, Вы даете согласие с установленными 
              <Link to="/privacy-policy" className="text-blue-600 hover:underline mx-1">
                политикой конфиденциальности
              </Link> 
              и условиями использования сайта.
            </div>

            {/* Кнопка отправки */}
            <button 
              type="submit"
              className={`w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition text-lg font-semibold ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка заявки...' : 'Отправить заявку'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
