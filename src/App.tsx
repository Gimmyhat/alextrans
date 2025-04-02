import React from 'react';
import { Menu, Phone, Truck, Package, Train, Calculator, Clock, MapPin, ChevronRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Map from './components/Map';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Map />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;