import React, { useState } from 'react';
import { sendContactMessage } from '../utils/telegramService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    
    try {
      const success = await sendContactMessage(formData);
      
      if (success) {
        setSubmitSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitError('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова позже.');
      }
    } catch (error) {
      console.error('Error in contact form submission:', error);
      setSubmitError('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-form" className="py-20 relative">
      {/* Фоновое изображение поезда с контейнерами */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(8, 60, 106, 0.85), rgba(5, 43, 77, 0.95)), url("https://images.unsplash.com/photo-1527679124583-9203a88236ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Связаться с нами</h2>

          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 relative">
              <strong className="font-bold">Спасибо!</strong>
              <span className="block sm:inline"> Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</span>
            </div>
          )}

          {submitError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 relative">
              <strong className="font-bold">Ошибка!</strong>
              <span className="block sm:inline"> {submitError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`bg-white text-blue-800 px-8 py-3 rounded-md hover:bg-blue-50 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;