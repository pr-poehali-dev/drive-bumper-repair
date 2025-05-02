
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">О нас</h2>
        <div className="mt-8 max-w-4xl">
          <p className="text-lg mb-4">
            <span className="font-semibold">«Драйв»</span> — это профессиональная мастерская по ремонту бамперов в Тольятти с опытом работы более 6 лет. 
            Мы специализируемся на всех видах восстановления автомобильных бамперов: покраска, ремонт трещин, полировка и восстановление геометрии.
          </p>
          <p className="text-lg mb-4">
            Наша команда состоит из опытных мастеров, которые постоянно совершенствуют свои навыки и используют современное оборудование и материалы. 
            Мы гарантируем качественный ремонт бамперов любой сложности и в кратчайшие сроки.
          </p>
          <p className="text-lg mb-4">
            Независимо от марки и модели вашего автомобиля, мы готовы взяться за работу и вернуть вашему бамперу первоначальный вид. 
            Обращаясь к нам, вы получаете профессиональное обслуживание по доступным ценам.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-drive-lightgray p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-drive-red mb-2">6+</h3>
              <p>лет на рынке</p>
            </div>
            <div className="bg-drive-lightgray p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-drive-red mb-2">5000+</h3>
              <p>отремонтированных бамперов</p>
            </div>
            <div className="bg-drive-lightgray p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-drive-red mb-2">100%</h3>
              <p>гарантия качества</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
