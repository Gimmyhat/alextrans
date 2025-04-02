import React from 'react';
import { Truck, Package, Train, Ship, FileCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Truck className="w-12 h-12 text-blue-800" />,
    title: 'Автомобильные перевозки',
    description: 'Доставка грузов автотранспортом по всей России с оптимальными маршрутами и гарантией сохранности',
    link: '/services#auto',
    features: ['От 1 до 20 тонн', 'Рефрижераторы', 'Тенты', 'Изотермы']
  },
  {
    icon: <Package className="w-12 h-12 text-blue-800" />,
    title: 'Сборные грузы',
    description: 'Экономичная доставка небольших партий груза в составе сборных отправлений, оптимальное решение для малого бизнеса',
    link: '/services#collection',
    features: ['От 1 кг', 'Доставка от двери до двери', 'Страхование груза', 'Складское хранение']
  },
  {
    icon: <Train className="w-12 h-12 text-blue-800" />,
    title: 'Железнодорожные перевозки',
    description: 'Перевозка крупных партий груза железнодорожным транспортом, идеально для промышленных предприятий',
    link: '/services#railway',
    features: ['Полные вагоны', 'Контейнерные перевозки', 'Мультимодальные решения', 'Таможенное оформление']
  },
  {
    icon: <Ship className="w-12 h-12 text-blue-800" />,
    title: 'Мультимодальные перевозки',
    description: 'Комплексные логистические решения с использованием различных видов транспорта для оптимальной доставки',
    link: '/services#multimodal',
    features: ['Морские контейнеры', 'Авиаперевозки', 'Полное сопровождение', 'Международные маршруты']
  },
  {
    icon: <FileCheck className="w-12 h-12 text-blue-800" />,
    title: 'Страхование и документация',
    description: 'Полное оформление документов и страхование грузов на любом этапе транспортировки',
    link: '/services#insurance',
    features: ['Страхование всех видов грузов', 'Таможенные декларации', 'Сертификация', 'Юридическое сопровождение']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Предлагаем полный спектр логистических услуг для бизнеса любого масштаба. 
            От сборных грузов до полных фур и железнодорожных вагонов.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group">
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="mb-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to={service.link} className="text-blue-800 flex items-center hover:text-blue-900 font-medium mt-auto">
                Подробнее
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-block bg-blue-800 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
            Все услуги и тарифы
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;