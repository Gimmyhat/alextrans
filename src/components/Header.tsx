import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoSrc from '../assets/logo_alex_trans_min.svg';
import { COMPANY_PHONE_NUMBER, COMPANY_PHONE_FORMATTED } from '../config/contactInfo';

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
              className="h-16 w-auto mr-2"
            />
            <span className="text-2xl font-bold text-gray-800">ALEX TRANS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/services" 
              className="text-gray-600 hover:text-blue-800 relative group py-2"
            >
              <span>Услуги</span>
              <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-blue-800 relative group py-2"
            >
              <span>О компании</span>
              <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
            <Link 
              to="/contacts" 
              className="text-gray-600 hover:text-blue-800 relative group py-2"
            >
              <span>Контакты</span>
              <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
            <Link 
              to="/tracking" 
              className="text-gray-600 hover:text-blue-800 relative group py-2"
            >
              <span>Отследить груз</span>
              <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
            <Link 
              to="/calculator" 
              className="text-gray-600 hover:text-blue-800 relative group py-2"
            >
              <span>Калькулятор</span>
              <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${COMPANY_PHONE_NUMBER}`} className="flex items-center text-blue-800">
              <Phone className="w-5 h-5 mr-2" />
              <span>{COMPANY_PHONE_FORMATTED}</span>
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
              <a href={`tel:${COMPANY_PHONE_NUMBER}`} className="block px-3 py-2 text-blue-800">
                {COMPANY_PHONE_FORMATTED}
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