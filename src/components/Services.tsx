import React from 'react';
import { Truck, Package, Train, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Truck className="w-12 h-12 text-blue-800" />,
    title: 'Автомобильные перевозки',
    description: 'Доставка грузов автотранспортом по всей России с оптимальными маршрутами',
  },
  {
    icon: <Package className="w-12 h-12 text-blue-800" />,
    title: 'Сборные грузы',
    description: 'Экономичная доставка небольших партий груза в составе сборных отправлений',
  },
  {
    icon: <Train className="w-12 h-12 text-blue-800" />,
    title: 'Железнодорожные перевозки',
    description: 'Перевозка крупных партий груза железнодорожным транспортом',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-800 flex items-center hover:text-blue-900">
                Подробнее
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;