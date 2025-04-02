import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home/HomePage';
import ServicesPage from './pages/Services/ServicesPage';
import AboutPage from './pages/About/AboutPage';
import ContactsPage from './pages/Contacts/ContactsPage';
import TrackingPage from './pages/Tracking/TrackingPage';
import CalculatorPage from './pages/Calculator/CalculatorPage';
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
      </Route>
    </Routes>
  );
}

export default App;