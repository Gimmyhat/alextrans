import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-800">АЛЕКС ТРАНС</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-800">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-blue-800">О компании</a>
            <a href="#contacts" className="text-gray-600 hover:text-blue-800">Контакты</a>
            <a href="#tracking" className="text-gray-600 hover:text-blue-800">Отследить груз</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+73952000000" className="flex items-center text-blue-800">
              <Phone className="w-5 h-5 mr-2" />
              <span>+7 (3952) 00-00-00</span>
            </a>
            <button className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition">
              Рассчитать стоимость
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-600">Услуги</a>
              <a href="#about" className="block px-3 py-2 text-gray-600">О компании</a>
              <a href="#contacts" className="block px-3 py-2 text-gray-600">Контакты</a>
              <a href="#tracking" className="block px-3 py-2 text-gray-600">Отследить груз</a>
              <a href="tel:+73952000000" className="block px-3 py-2 text-blue-800">
                +7 (3952) 00-00-00
              </a>
              <button className="w-full bg-blue-800 text-white px-6 py-2 rounded-md mt-4">
                Рассчитать стоимость
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;