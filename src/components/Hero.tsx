import React from 'react';
import { Truck, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(5, 43, 77, 0.95), rgba(8, 60, 106, 0.8)), url("https://images.unsplash.com/photo-1635398517284-711403c6b27a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Header Offset */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Надежные грузоперевозки по всей России
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Профессиональные логистические решения для вашего бизнеса в Иркутске и области
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-800 px-8 py-3 rounded-md hover:bg-blue-50 transition flex items-center justify-center group">
                  Рассчитать стоимость
                  <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition">
                  Оставить заявку
                </button>
              </div>
              
              {/* Additional Info */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-1">15+ лет</h3>
                  <p className="text-gray-200 text-sm">На рынке логистики</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-1">1000+</h3>
                  <p className="text-gray-200 text-sm">Довольных клиентов</p>
                </div>
              </div>
            </div>
            
            {/* Right side content */}
            <div className="hidden md:block">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;