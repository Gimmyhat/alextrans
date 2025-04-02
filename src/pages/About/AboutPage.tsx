import React from 'react';
import { Phone, Mail, MapPin, Building, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О компании ООО «АЛЕКС ТРАНС»</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Ваш современный и надежный партнер в мире логистики из Иркутска
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Надежные грузоперевозки с 2025 года</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ООО «АЛЕКС ТРАНС» – молодая и динамично развивающаяся транспортно-логистическая компания, 
                основанная в 2025 году в Иркутске. Мы предлагаем комплексные и эффективные решения для 
                перевозки ваших грузов по всей России.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Несмотря на недавнее открытие, наша команда опирается на современные подходы и глубокое 
                понимание потребностей бизнеса в надежной и своевременной доставке. Мы стремимся стать 
                для наших клиентов не просто перевозчиком, а стратегическим партнером.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Команда Алекс Транс"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Mission & Values / Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Наша миссия и преимущества</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Building className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Наша миссия</h3>
                <p className="text-gray-600">
                  Сделать логистику простой, доступной и эффективной для вашего бизнеса, обеспечивая 
                  безупречный сервис и гибкость в решении задач.
                </p>
              </div>
              {/* Flexibility */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Award className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Гибкость и Надежность</h3>
                <p className="text-gray-600">
                  Современные подходы, индивидуальные условия и строгая ответственность за сохранность 
                  груза и сроки доставки.
                </p>
              </div>
              {/* Client Focus */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Клиентоориентированность</h3>
                <p className="text-gray-600">
                  Ваши задачи – наш приоритет. Мы всегда на связи и готовы оперативно решать 
                  любые вопросы, связанные с перевозкой.
                </p>
              </div>
            </div>
          </div>
          
          {/* Services Overview */}
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-6">Наши услуги</h2>
             <p className="text-gray-700 max-w-2xl mx-auto mb-6">
               Мы предлагаем широкий спектр услуг для решения любых транспортных задач. 
               Узнайте больше о наших возможностях:
             </p>
             <Link to="/services" className="inline-block bg-blue-800 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
               Перейти к услугам
             </Link>
          </div>

          {/* Contacts & Requisites */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Реквизиты и контакты</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b pb-2">Контактная информация</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0" />
                      <span>8-902-510-60-13</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0" />
                      <span>info@a-t-group.ru</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0 mt-1" />
                      <span>664019, Иркутская область, г Иркутск, ул Щедрина, д. 7/3, кв. 4</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b pb-2">Реквизиты</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Полное наименование:</strong> Общество с ограниченной ответственностью «АЛЕКС ТРАНС»</p>
                    <p><strong>ИНН/КПП:</strong> 3849107133 / 384901001</p>
                    <p><strong>ОГРН:</strong> 1253800004160</p>
                    <p><strong>Генеральный директор:</strong> Треский Андрей Вениаминович</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;
