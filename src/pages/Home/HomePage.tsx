import React from 'react';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Advantages from '../../components/Advantages';
import Map from '../../components/Map';
import ContactForm from '../../components/ContactForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Advantages />
      
      {/* Карта географии перевозок */}
      <section className="py-16 relative bg-white">
        <div 
          className="absolute inset-0 w-full h-full opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581922227210-5484cb737d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">География перевозок</h2>
          <Map />
        </div>
      </section>
      
      {/* Контактная форма */}
      <ContactForm />
    </div>
  );
};

export default HomePage;
