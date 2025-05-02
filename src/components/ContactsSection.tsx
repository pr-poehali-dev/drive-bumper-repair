
import React from 'react';
import Icon from './ui/icon';

interface Contact {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

interface ContactsSectionProps {
  address: string;
  phoneNumbers: string[];
  email: string;
  telegram: string;
}

const ContactsSection: React.FC<ContactsSectionProps> = ({
  address,
  phoneNumbers,
  email,
  telegram
}) => {
  const contacts: Contact[] = [
    {
      icon: 'MapPin',
      label: 'Адрес',
      value: address,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    },
    ...phoneNumbers.map(phone => ({
      icon: 'Phone',
      label: 'Телефон',
      value: phone,
      link: `tel:${phone.replace(/[^0-9+]/g, '')}`
    })),
    {
      icon: 'Mail',
      label: 'Email',
      value: email,
      link: `mailto:${email}`
    },
    {
      icon: 'Send',
      label: 'Telegram',
      value: telegram.split('/').pop() || telegram,
      link: telegram
    }
  ];

  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Контакты</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-drive-lightgray p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Наши контакты</h3>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-drive-red rounded-full p-2 mr-4">
                    <Icon name={contact.icon} className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-drive-gray text-sm">{contact.label}</p>
                    {contact.link ? (
                      <a 
                        href={contact.link} 
                        className="font-medium hover:text-drive-red transition-colors"
                        target={contact.icon === 'MapPin' || contact.icon === 'Send' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Часы работы</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-medium">Пн-Пт:</p>
                  <p className="text-drive-gray">9:00 - 19:00</p>
                </div>
                <div>
                  <p className="font-medium">Сб:</p>
                  <p className="text-drive-gray">10:00 - 17:00</p>
                </div>
                <div>
                  <p className="font-medium">Вс:</p>
                  <p className="text-drive-gray">Выходной</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.8034372457954!2d49.35499127679972!3d53.51230397247697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416881d8b2e19ead%3A0xd50ccd02306efdf9!2z0L7RhNC40YbQtdGA0YHQutCw0Y8g0YPQuy4sIDI2LCDQotC-0LvRjNGP0YLRgtC4LCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7LiwgNDQ1MDY3!5e0!3m2!1sru!2sru!4v1714637958915!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={false} 
              aria-hidden="false" 
              tabIndex={0}
              title="Местоположение Драйв"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
