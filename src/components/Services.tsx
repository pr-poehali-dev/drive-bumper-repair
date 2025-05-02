
import React from 'react';
import ServiceCard from './ServiceCard';

interface ServicesProps {
  phoneNumber: string;
}

const Services: React.FC<ServicesProps> = ({ phoneNumber }) => {
  const services = [
    {
      title: 'Покраска',
      description: 'Профессиональная покраска бамперов с подбором цвета. Используем только качественные материалы для долговечного результата.',
      price: 'от 3000 ₽',
      imageSrc: 'https://cdn.poehali.dev/files/deee9f8d-23ba-4d22-989a-ac76923af9a1.jpg'
    },
    {
      title: 'Полировка',
      description: 'Восстановление внешнего вида бампера путем удаления мелких царапин и потертостей. Возвращаем первоначальный блеск поверхности.',
      price: 'от 1500 ₽',
      imageSrc: 'https://cdn.poehali.dev/files/61be20f5-4c55-4530-b52a-a594b7409f2f.jpg'
    },
    {
      title: 'Ремонт трещин и сколов',
      description: 'Профессиональное устранение трещин, сколов и других повреждений на бампере. Делаем ремонт незаметным после покраски.',
      price: 'от 500 ₽',
      imageSrc: 'https://cdn.poehali.dev/files/c3433111-9c2b-49ff-aea3-4dce67242fdf.jpg'
    },
    {
      title: 'Восстановление геометрии',
      description: 'Восстановление формы и геометрии поврежденного бампера. Работаем с любыми видами деформаций независимо от сложности.',
      price: 'от 1500 ₽',
      imageSrc: 'https://cdn.poehali.dev/files/8b548d4f-d39e-4efe-a0e2-391257101c6c.jpg'
    }
  ];

  return (
    <section id="services" className="py-16 bg-drive-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Наши услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              imageSrc={service.imageSrc}
              phoneNumber={phoneNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
