import React from 'react';
import { Truck, Package, Train, Ship, FileCheck, ChevronDown, Clock, Shield, BookCheck } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Заголовок страницы */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Услуги транспортной компании</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Предлагаем полный комплекс транспортно-логистических услуг для бизнеса. 
            Индивидуальный подход к каждому клиенту и гибкие тарифы.
          </p>
        </div>
      </div>
      
      {/* Быстрые ссылки */}
      <nav className="sticky top-20 bg-white py-3 border-b z-40 mb-12 shadow-sm">
        <div className="container mx-auto px-4 flex justify-center space-x-4 overflow-x-auto">
          {/* Используем якорные ссылки для навигации */} 
          <a href="#auto" className="whitespace-nowrap text-gray-600 hover:text-blue-800 py-2 px-3 rounded-md">Автомобильные</a>
          <a href="#railway" className="whitespace-nowrap text-gray-600 hover:text-blue-800 py-2 px-3 rounded-md">Железнодорожные</a>
          <a href="#collection" className="whitespace-nowrap text-gray-600 hover:text-blue-800 py-2 px-3 rounded-md">Сборные грузы</a>
          <a href="#multimodal" className="whitespace-nowrap text-gray-600 hover:text-blue-800 py-2 px-3 rounded-md">Мультимодальные</a>
          <a href="#insurance" className="whitespace-nowrap text-gray-600 hover:text-blue-800 py-2 px-3 rounded-md">Доп. услуги</a>
          <a href="#contact-form" className="whitespace-nowrap text-gray-600 hover:text-blue-800 py-2 px-3 rounded-md">Связаться</a>
        </div>
      </nav>
      
      {/* Содержимое страницы услуг */}
      <div className="container mx-auto px-4 py-16">
        {/* Автоперевозки */}
        <section id="auto" className="mb-24 scroll-mt-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <Truck className="w-10 h-10 text-blue-800" />
                </div>
                <h2 className="text-3xl font-bold">Автомобильные перевозки</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Организуем автомобильные грузоперевозки по всей России. Подберем оптимальный 
                транспорт под ваш груз: от легковых автомобилей до 20-тонных фур. 
                Обеспечиваем полную сохранность груза и контроль на всём пути следования.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-800 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Страхование</h3>
                    <p className="text-sm text-gray-600">Полная страховая защита перевозимого груза</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-800 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Точно в срок</h3>
                    <p className="text-sm text-gray-600">Гарантированное соблюдение сроков доставки</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookCheck className="w-6 h-6 text-blue-800 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Документы</h3>
                    <p className="text-sm text-gray-600">Полное документальное сопровождение</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Truck className="w-6 h-6 text-blue-800 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Спецтранспорт</h3>
                    <p className="text-sm text-gray-600">Рефрижераторы, тенты, изотермы</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mb-3">Тарифы на автоперевозки</h3>
              <table className="w-full mb-6 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left">Тип транспорта</th>
                    <th className="p-2 text-right">Стоимость (₽/км)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Газель (до 1,5 тонн)</td>
                    <td className="p-2 text-right">от 20</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">5-тонник</td>
                    <td className="p-2 text-right">от 30</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">10-тонник</td>
                    <td className="p-2 text-right">от 40</td>
                  </tr>
                  <tr>
                    <td className="p-2">Еврофура (20 тонн)</td>
                    <td className="p-2 text-right">от 50</td>
                  </tr>
                </tbody>
              </table>
              
              <p className="text-gray-500 text-sm">* Указана базовая стоимость без учета специфики груза. Для получения точного расчета обратитесь к менеджеру.</p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Автомобильные перевозки" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: "400px" }}
              />
            </div>
          </div>
        </section>
        
        {/* Сборные грузы */}
        <section id="collection" className="mb-24 scroll-mt-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Сборные грузы" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: "400px" }}
              />
            </div>
            
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <Package className="w-10 h-10 text-blue-800" />
                </div>
                <h2 className="text-3xl font-bold">Сборные грузы</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Экономичное решение для перевозки небольших партий грузов. 
                Доставляем грузы от 1 кг в составе сборных партий. 
                Идеально подходит для интернет-магазинов, малого и среднего бизнеса.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Преимущества сборных перевозок</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Доставка от двери до двери</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Регулярные отправки по всем направлениям</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Складское хранение на терминалах</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Отслеживание грузов онлайн</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Упаковка груза при необходимости</span>
                </li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                Стоимость доставки сборных грузов рассчитывается индивидуально и зависит от веса, 
                объема, расстояния и специфических требований. 
                Воспользуйтесь нашим онлайн-калькулятором или свяжитесь с менеджером.
              </p>
              
              <Link to="/calculator" className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                Рассчитать стоимость
              </Link>
            </div>
          </div>
        </section>
        
        {/* ЖД перевозки */}
        <section id="railway" className="mb-24 scroll-mt-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <Train className="w-10 h-10 text-blue-800" />
                </div>
                <h2 className="text-3xl font-bold">Железнодорожные перевозки</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Организуем железнодорожные перевозки грузов по всей сети РЖД. 
                Оптимальное решение для перевозки больших объемов грузов на дальние расстояния.
                Полное документальное сопровождение и таможенное оформление.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Виды вагонов</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium mb-1">Крытые вагоны</h4>
                  <p className="text-sm text-gray-600">Для грузов, требующих защиты от атмосферных осадков</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium mb-1">Полувагоны</h4>
                  <p className="text-sm text-gray-600">Для насыпных и навалочных грузов</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium mb-1">Платформы</h4>
                  <p className="text-sm text-gray-600">Для контейнеров, строительной техники</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium mb-1">Цистерны</h4>
                  <p className="text-sm text-gray-600">Для наливных грузов</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Также предлагаем контейнерные перевозки по железной дороге - универсальное решение 
                для транспортировки широкого спектра грузов в стандартных контейнерах 20ft и 40ft.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Стоимость ЖД перевозок</h3>
              <p className="text-gray-700 mb-6">
                Стоимость железнодорожных перевозок формируется индивидуально на основе тарифов РЖД, 
                дальности перевозки, типа используемого вагона и характера груза. 
                Для расчета стоимости обратитесь к нашим специалистам.
              </p>
            </div>
            
            <div>
              <img 
                src="/images/cont_by_train.jpg" 
                alt="Железнодорожные перевозки" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: "400px" }}
              />
            </div>
          </div>
        </section>
        
        {/* Мультимодальные перевозки */}
        <section id="multimodal" className="mb-24 scroll-mt-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1504728078670-d0a59873c8c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Мультимодальные перевозки" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: "400px" }}
              />
            </div>
            
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <Ship className="w-10 h-10 text-blue-800" />
                </div>
                <h2 className="text-3xl font-bold">Мультимодальные перевозки</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Организуем сложные логистические цепочки с использованием различных видов транспорта: 
                автомобильного, железнодорожного, морского и авиационного. 
                Оптимальное решение для международных перевозок и доставки в труднодоступные регионы.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Преимущества мультимодальных перевозок</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Один договор на всю цепочку перевозки</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Оптимальные маршруты с учетом стоимости и сроков</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Таможенное оформление и сертификация</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Снижение рисков при международных перевозках</span>
                </li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                Наши специалисты разработают оптимальную схему доставки груза с учетом всех особенностей 
                маршрута, характера груза, требуемых сроков и бюджета.
              </p>
            </div>
          </div>
        </section>
        
        {/* Страхование и документация */}
        <section id="insurance" className="mb-24 scroll-mt-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <FileCheck className="w-10 h-10 text-blue-800" />
                </div>
                <h2 className="text-3xl font-bold">Страхование и документация</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Предлагаем полный комплекс услуг по страхованию грузов и оформлению необходимой документации. 
                Обеспечиваем юридическую защиту ваших грузов на всех этапах транспортировки.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Страхование грузов</h3>
              <p className="text-gray-700 mb-6">
                Сотрудничаем с ведущими страховыми компаниями и предлагаем различные программы страхования:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Страхование от всех рисков</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Страхование от поименованных рисков</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Страхование ответственности перевозчика</span>
                </li>
              </ul>
              
              <h3 className="font-semibold text-lg mb-3">Документация</h3>
              <p className="text-gray-700 mb-6">
                Оказываем помощь в оформлении полного пакета документов для перевозки грузов:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Транспортные накладные (CMR, ТТН, ЖДН)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Таможенные декларации</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Сертификаты соответствия и качества</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-800 mr-2 mt-2"></div>
                  <span>Страховые полисы и документы</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Страхование и документация" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: "400px" }}
              />
            </div>
          </div>
        </section>
      </div>
      
      {/* Контактная форма */}
      <ContactForm />
    </div>
  );
};

export default ServicesPage;
