import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import CallbackModal from './CallbackModal'; // Импортируем модальное окно

const FloatingCallButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 z-40 bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-110"
        aria-label="Заказать обратный звонок"
        title="Заказать обратный звонок"
      >
        <Phone className="w-6 h-6" />
      </button>
      
      {/* Рендерим модальное окно */}
      <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default FloatingCallButton; 