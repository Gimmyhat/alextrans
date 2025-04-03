import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold mb-4 inline-block">АЛЕКС ТРАНС</Link>
            <p className="text-gray-400">
              Профессиональные логистические решения для вашего бизнеса
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2">
              <a href="tel:+73952000000" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                +7 (3952) 00-00-00
              </a>
              <a href="mailto:info@alextrans.ru" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                info@alextrans.ru
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>г. Иркутск, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/services#auto" className="text-gray-400 hover:text-white">Автоперевозки</Link></li>
              <li><Link to="/services#railway" className="text-gray-400 hover:text-white">Ж/д перевозки</Link></li>
              <li><Link to="/services#collection" className="text-gray-400 hover:text-white">Сборные грузы</Link></li>
              <li><Link to="/services#multimodal" className="text-gray-400 hover:text-white">Мультимодальные</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">О компании</Link></li>
              <li><Link to="/tracking" className="text-gray-400 hover:text-white">Отследить груз</Link></li>
              <li><Link to="/calculator" className="text-gray-400 hover:text-white">Калькулятор</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white">Контакты</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} АЛЕКС ТРАНС. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;