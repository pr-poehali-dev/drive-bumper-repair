
import React from 'react';
import Icon from './ui/icon';

interface FooterProps {
  address: string;
  phoneNumbers: string[];
  email: string;
  telegram: string;
}

const Footer: React.FC<FooterProps> = ({
  address,
  phoneNumbers,
  email,
  telegram
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-drive-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-bold text-drive-red mb-4">ДРАЙВ</h3>
            <p className="mb-4">Профессиональный ремонт бамперов в Тольятти</p>
            <p className="text-drive-gray">{address}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Наши контакты</h3>
            <div className="space-y-2">
              {phoneNumbers.map((phone, index) => (
                <a 
                  key={index}
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center hover:text-drive-red transition-colors"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  {phone}
                </a>
              ))}
              
              <a 
                href={`mailto:${email}`}
                className="flex items-center hover:text-drive-red transition-colors"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                {email}
              </a>
              
              <a 
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-drive-red transition-colors"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Навигация по сайту</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-drive-red transition-colors">Услуги</a>
              </li>
              <li>
                <a href="#about" className="hover:text-drive-red transition-colors">О нас</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-drive-red transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-drive-red transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-drive-gray text-sm mb-4 md:mb-0">
            © {currentYear} Драйв. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-drive-gray text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-drive-gray text-sm hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
