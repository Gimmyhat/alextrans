import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoSrc from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src={logoSrc}
              alt="Алекс Транс - Логотип" 
              className="h-10 w-auto mr-3"
            />
            <span className="text-2xl font-bold text-blue-800">АЛЕКС ТРАНС</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-blue-800">Услуги</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-800">О компании</Link>
            <Link to="/contacts" className="text-gray-600 hover:text-blue-800">Контакты</Link>
            <Link to="/tracking" className="text-gray-600 hover:text-blue-800">Отследить груз</Link>
            <Link to="/calculator" className="text-gray-600 hover:text-blue-800">Калькулятор</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+73952000000" className="flex items-center text-blue-800">
              <Phone className="w-5 h-5 mr-2" />
              <span>+7 (3952) 00-00-00</span>
            </a>
            <Link 
              to="/calculator"
              className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
            >
              Рассчитать стоимость
            </Link>
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
              <Link to="/services" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Услуги</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>О компании</Link>
              <Link to="/contacts" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
              <Link to="/tracking" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Отследить груз</Link>
              <Link to="/calculator" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Калькулятор</Link>
              <a href="tel:+73952000000" className="block px-3 py-2 text-blue-800">
                +7 (3952) 00-00-00
              </a>
              <Link 
                to="/calculator"
                className="w-full bg-blue-800 text-white px-6 py-2 rounded-md mt-4 block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Рассчитать стоимость
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;