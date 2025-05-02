
import React from 'react';
import { Button } from './ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  phoneNumber: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  price, 
  imageSrc,
  phoneNumber 
}) => {
  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="h-56 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-drive-gray mb-4 flex-grow">{description}</p>
        <div className="mb-4">
          <span className="price-tag block mb-1">{price}</span>
          <span className="price-note block">*зависит от сложности выполнения работ</span>
        </div>
        <Button 
          onClick={handleCallButtonClick} 
          className="bg-drive-red hover:bg-drive-red/80 text-white w-full"
        >
          Позвонить
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
