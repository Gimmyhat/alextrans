import React from 'react';
import { Clock, MapPin, Shield, Users } from 'lucide-react';

const advantages = [
  {
    icon: <Clock className="w-8 h-8 text-blue-800" />,
    title: '24/7 поддержка',
    description: 'Круглосуточное сопровождение и поддержка клиентов',
  },
  {
    icon: <MapPin className="w-8 h-8 text-blue-800" />,
    title: 'Широкая география',
    description: 'Доставка по всей России и странам СНГ',
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-800" />,
    title: 'Гарантия сохранности',
    description: 'Страхование грузов и полная материальная ответственность',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-800" />,
    title: 'Опытная команда',
    description: 'Профессиональные логисты с многолетним опытом',
  },
];

const Advantages = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;