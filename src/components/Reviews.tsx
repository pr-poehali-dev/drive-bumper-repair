
import React, { useState } from 'react';
import { Button } from './ui/button';
import Icon from './ui/icon';

interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
}

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Александр К.',
      date: '15.03.2025',
      text: 'Отличная работа! Разбил бампер на парковке, думал придется менять. Ребята все отремонтировали, стало как новое. Цена адекватная, сделали быстро.',
      rating: 5
    },
    {
      id: 2,
      name: 'Елена В.',
      date: '24.01.2025',
      text: 'Обращалась для ремонта трещины на бампере. Сделали качественно и недорого. Цвет подобрали идеально, даже не заметно, что была трещина. Рекомендую!',
      rating: 5
    },
    {
      id: 3,
      name: 'Сергей М.',
      date: '10.12.2024',
      text: 'Профессиональный подход к работе. Восстановили геометрию бампера после сильного удара, покрасили в цвет кузова. Результат превзошел ожидания.',
      rating: 5
    },
    {
      id: 4,
      name: 'Дмитрий Л.',
      date: '05.02.2025',
      text: 'Быстро и качественно отполировали бампер. Все потертости и мелкие царапины исчезли. Обслуживание на высоте, буду обращаться еще.',
      rating: 4
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Вычисляем индексы для отображения 3 отзывов
  const displayedReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length]
  ];

  return (
    <section id="reviews" className="py-16 bg-drive-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Отзывы клиентов</h2>
        <p className="text-center text-drive-gray mb-8">*отзывы с приложения 2GIS</p>
        
        <div className="flex flex-col md:flex-row gap-6 mt-8 relative">
          {displayedReviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">{review.name}</h3>
                <span className="text-drive-gray text-sm">{review.date}</span>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i}
                    name="Star" 
                    size={16}
                    className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-drive-gray">{review.text}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevReview}
            className="rounded-full hover:bg-drive-red hover:text-white"
          >
            <Icon name="ChevronLeft" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextReview}
            className="rounded-full hover:bg-drive-red hover:text-white"
          >
            <Icon name="ChevronRight" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
