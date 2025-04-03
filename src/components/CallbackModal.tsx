import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // !!! Здесь будет логика отправки номера телефона на бэкенд !!!
    console.log('Запрошен обратный звонок на номер:', phoneNumber);
    alert('Спасибо! Мы скоро свяжемся с вами.');
    setPhoneNumber(''); // Очищаем поле
    onClose(); // Закрываем модальное окно
  };

  // Закрытие по нажатию Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose} // Закрытие по клику на фон
    >
      <div 
        className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри окна
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <Phone className="w-10 h-10 text-blue-800 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold text-gray-800">Заказать обратный звонок</h2>
          <p className="text-gray-600 mt-2">Оставьте ваш номер телефона, и мы перезвоним вам в ближайшее время.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="callback-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Номер телефона
            </label>
            <input 
              type="tel"
              id="callback-phone"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="+7 (___) ___-__-__"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Перезвоните мне
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallbackModal; 