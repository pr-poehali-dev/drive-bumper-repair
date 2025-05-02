
import React from 'react';
import Icon from './ui/icon';
import { Button } from './ui/button';

interface HeaderProps {
  phoneNumber: string;
  address: string;
}

const Header: React.FC<HeaderProps> = ({ phoneNumber, address }) => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <header className="relative w-full h-[60vh] min-h-[400px] md:h-[80vh] flex items-center justify-center overflow-hidden text-white">
      {/* Фоновое изображение с затемнением */}
      <div 
        className="absolute inset-0 bg-black/60 z-0"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/files/4c0cf65d-e1d4-4f17-96be-3bb032c043a2.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        {/* Верхняя панель */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center py-6 px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-drive-red">ДРАЙВ</h1>
          <a 
            href={`tel:${phoneNumber}`}
            className="text-white text-xl md:text-2xl font-medium hover:text-drive-red transition-colors"
          >
            {phoneNumber}
          </a>
        </div>
        
        {/* Основной контент */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Профессиональный ремонт бамперов
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Более 6 лет опыта работы с любыми повреждениями бамперов
          </p>
          <Button 
            onClick={handlePhoneClick}
            className="bg-drive-red hover:bg-drive-red/80 text-white text-lg px-8 py-6"
          >
            <Icon name="Phone" className="mr-2" />
            Позвонить
          </Button>
        </div>
        
        {/* Адрес внизу */}
        <div className="absolute bottom-8 left-0 w-full text-center">
          <p className="text-drive-gray text-sm md:text-base">
            {address}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
