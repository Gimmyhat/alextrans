import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Map from '../../components/Map'; // Используем существующий компонент карты
import ContactForm from '../../components/ContactForm'; // Используем существующую форму
import { COMPANY_PHONE_NUMBER, COMPANY_PHONE_FORMATTED, COMPANY_EMAIL, COMPANY_ADDRESS } from '../../config/contactInfo'; // Используем константы

const ContactsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Заголовок */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Мы всегда на связи и готовы ответить на ваши вопросы.
          </p>
        </div>
      </section>

      {/* Карта и Контактная информация */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Контактная информация и реквизиты слева */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
              
              <div className="mb-8 p-6 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-3 text-blue-800 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Наш адрес:</p>
                      <p>{COMPANY_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Телефон:</p>
                      <a href={`tel:${COMPANY_PHONE_NUMBER}`} className="hover:text-blue-700">{COMPANY_PHONE_FORMATTED}</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0" />
                    <div>
                      <p className="font-medium">E-mail:</p>
                      <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-blue-700">{COMPANY_EMAIL}</a>
                    </div>
                  </div>
                  {/* Можно добавить часы работы, если нужно */}
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Реквизиты</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>ООО «АЛЕКС ТРАНС»</strong></p>
                  <p><strong>ИНН/КПП:</strong> 3849107133 / 384901001</p>
                  <p><strong>ОГРН:</strong> 1253800004160</p>
                  <p><strong>Юридический адрес:</strong> {COMPANY_ADDRESS}</p>
                </div>
              </div>
            </div>

            {/* Карта справа */}
            <div>
               <h2 className="text-3xl font-bold mb-8">Мы на карте</h2>
               <div className="overflow-hidden rounded-lg shadow-lg">
                 <Map />
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Контактная форма (используем существующий компонент) */}
      <ContactForm />
      
    </div>
  );
};

export default ContactsPage;
