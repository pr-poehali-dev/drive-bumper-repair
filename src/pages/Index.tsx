
import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Reviews from '@/components/Reviews';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Контактные данные компании
  const companyData = {
    phoneNumbers: ['+79966215396', '740877', '+7 927 770 3126'],
    address: 'г. Тольятти, ул. Офицерская, 26',
    email: 'alexpro63@mail.ru',
    telegram: 'https://t.me/alexander_prodrive'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        phoneNumber={companyData.phoneNumbers[0]} 
        address={companyData.address} 
      />
      
      <main>
        <Services phoneNumber={companyData.phoneNumbers[0]} />
        <AboutUs />
        <Reviews />
        <ContactsSection 
          address={companyData.address}
          phoneNumbers={companyData.phoneNumbers}
          email={companyData.email}
          telegram={companyData.telegram}
        />
      </main>
      
      <Footer 
        address={companyData.address}
        phoneNumbers={companyData.phoneNumbers}
        email={companyData.email}
        telegram={companyData.telegram}
      />
    </div>
  );
};

export default Index;
