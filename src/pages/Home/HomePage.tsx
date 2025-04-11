import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Advantages from '../../components/Advantages';
import Map from '../../components/Map';
import ContactForm from '../../components/ContactForm';
import homeBg from '../../assets/images/home-bg.jpg';
import { useStrapiContext } from '../../context/StrapiContext';
import { PageContent } from '../../types/strapi';

const HomePage: React.FC = () => {
  const { getPageContent } = useStrapiContext();
  const [pageData, setPageData] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await getPageContent('home');
        if (response.data && response.data.length > 0) {
          setPageData(response.data[0].attributes);
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных для домашней страницы:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageData();
  }, [getPageContent]);

  // Если данные загружаются, или если данных нет, показываем стандартную страницу
  if (isLoading || !pageData) {
    return (
      <div className="min-h-screen">
        <div 
          className="fixed inset-0 w-full h-full -z-10"
          style={{
            backgroundImage: `url(${homeBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1,
          }}
        />
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
  }

  // Если у нас есть данные из Strapi, используем их для настройки фона
  const backgroundImageUrl = pageData.backgroundImage?.data?.attributes?.url 
    ? `${import.meta.env.VITE_STRAPI_URL}${pageData.backgroundImage.data.attributes.url}`
    : homeBg;

  return (
    <div className="min-h-screen">
      <div 
        className="fixed inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1,
        }}
      />
      
      {/* Компоненты страницы: рендерим в зависимости от данных из Strapi или используем стандартные */}
      <Hero />
      <Services />
      <Advantages />
      
      {/* Карта географии перевозок */}
      <section className="py-16 relative bg-white">
        <div 
          className="absolute inset-0 w-full h-full opacity-10"
          style={{
            backgroundImage: pageData.mapBackgroundImage?.data?.attributes?.url
              ? `url("${import.meta.env.VITE_STRAPI_URL}${pageData.mapBackgroundImage.data.attributes.url}")`
              : 'url("https://images.unsplash.com/photo-1581922227210-5484cb737d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            {pageData.mapTitle || 'География перевозок'}
          </h2>
          <Map />
        </div>
      </section>
      
      {/* Контактная форма */}
      <ContactForm />
    </div>
  );
};

export default HomePage;
