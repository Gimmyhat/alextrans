// Пример получения данных из Strapi в React-компоненте

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Базовый URL API Strapi
const STRAPI_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';

// Компонент для отображения услуг
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Получение данных из Strapi
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${STRAPI_URL}/api/services?populate=*`);
        setServices(response.data.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Ошибка при загрузке услуг:', err);
        setError('Не удалось загрузить услуги. Пожалуйста, попробуйте позже.');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="services-container">
      <h2>Наши услуги</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img 
              src={`${STRAPI_URL}${service.attributes.image.data.attributes.url}`} 
              alt={service.attributes.title} 
            />
            <h3>{service.attributes.title}</h3>
            <p>{service.attributes.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 