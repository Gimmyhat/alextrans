import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Основной контент страницы будет рендериться здесь */}
      {/* pt-20 компенсирует высоту фиксированного хедера (h-20) */}
      <main className="flex-grow pt-20">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 