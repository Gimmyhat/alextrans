import React, { useEffect, useState } from 'react';
import { Truck, ChevronRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/hero-bg.jpg';
import { useStrapiContext } from '../context/StrapiContext';

interface HeroData {
  title: string;
  subtitle: string;
  backgroundImage: {
    data: {
      attributes: {
        url: string;
      }
    }
  };
  calculatorButtonText: string;
  contactButtonText: string;
  contactCard: {
    title: string;
    workingHours: string;
    address: string;
    deliveryArea: string;
  };
}

const Hero = () => {
  const { getComponentData } = useStrapiContext();
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await getComponentData('hero');
        if (response.data && response.data.length > 0) {
          setHeroData(response.data[0].attributes);
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных для Hero секции:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();
  }, [getComponentData]);

  // Если данные загружаются, показываем компонент с локальными данными
  if (isLoading || !heroData) {
    return (
      <section className="relative h-[50vh]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(5, 43, 77, 0.75), rgba(8, 60, 106, 0.6)), url(${heroBg})`,
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
                  Надежные грузоперевозки по России и миру
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Профессиональные логистические решения для вашего бизнеса в Иркутске и области
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/calculator" className="bg-white text-blue-800 px-8 py-3 rounded-md hover:bg-blue-50 transition flex items-center justify-center group">
                    Рассчитать стоимость
                    <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="#contact-form" className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition">
                    Оставить заявку
                  </a>
                </div>
              </div>
              
              {/* Right side content - контактная информация */}
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-4">Всегда на связи</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-200">
                      <Clock className="w-5 h-5 mr-3" />
                      <div>
                        <p className="font-medium">Режим работы:</p>
                        <p>Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <MapPin className="w-5 h-5 mr-3" />
                      <div>
                        <p className="font-medium">Адрес офиса:</p>
                        <p>г. Иркутск, ул. Транспортная, 25</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <Truck className="w-5 h-5 mr-3" />
                      <div>
                        <p className="font-medium">Доставка груза:</p>
                        <p>По всей России и СНГ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Получаем URL изображения или используем резервное локальное изображение
  const backgroundImageUrl = heroData.backgroundImage?.data?.attributes?.url 
    ? `${import.meta.env.VITE_STRAPI_URL}${heroData.backgroundImage.data.attributes.url}`
    : heroBg;

  return (
    <section className="relative h-[50vh]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 43, 77, 0.75), rgba(8, 60, 106, 0.6)), url(${backgroundImageUrl})`,
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
                {heroData.title || 'Надежные грузоперевозки по России и миру'}
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                {heroData.subtitle || 'Профессиональные логистические решения для вашего бизнеса в Иркутске и области'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/calculator" className="bg-white text-blue-800 px-8 py-3 rounded-md hover:bg-blue-50 transition flex items-center justify-center group">
                  {heroData.calculatorButtonText || 'Рассчитать стоимость'}
                  <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#contact-form" className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition">
                  {heroData.contactButtonText || 'Оставить заявку'}
                </a>
              </div>
            </div>
            
            {/* Right side content - контактная информация */}
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-xl font-semibold mb-4">
                  {heroData.contactCard?.title || 'Всегда на связи'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-200">
                    <Clock className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-medium">Режим работы:</p>
                      <p>{heroData.contactCard?.workingHours || 'Пн-Пт: 9:00 - 18:00'}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <MapPin className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-medium">Адрес офиса:</p>
                      <p>{heroData.contactCard?.address || 'г. Иркутск, ул. Транспортная, 25'}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <Truck className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-medium">Доставка груза:</p>
                      <p>{heroData.contactCard?.deliveryArea || 'По всей России и СНГ'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;