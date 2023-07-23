import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

// Dodaj ikony do biblioteki Font Awesome
library.add(fas, fab);

function Navigation() {
  const contactInfo = [
    { icon: faPhone, title: 'Telefon', description: '+48 000 00 00', link: 'tel:000000000' },
    { icon: faEnvelope, title: 'Mail', description: 'xxxx@gmail.com', link: 'mailto:xxxx@gmail.com' },
    { icon: faLocationArrow, title: 'Adres', description: 'ul. XXX x/x, xx-xxx XXXX' },
  ];

  const menu = [
    { title: 'Strona główna', id: 1, link: 'glowna' },
    { title: 'O firmie', id: 2, link: 'ofirmie' },
    { title: 'Oferta', id: 3, link: 'oferta' },
    { title: 'KSIĘGOWOŚĆ DLA JDG', id: 4, link: 'ksiegowoscjdg' },
    { title: 'KSIĘGOWOŚĆ DLA SPÓŁEK', id: 5, link: 'ksiegowoscspolka' },
    { title: 'KONTAKT', id: 6, link: 'kontakt' },
    { title: 'BLOG', id: 7, link: 'blog' }
  ];

  const menuList = menu.map(option => (
    <li key={option.id}>
      <a href={option.link}>{option.title}</a>
    </li>
  ));

  return (
    <nav className="flex flex-col bg-white w-full">
      <div className="flex flex-row basis-1/3 justify-around my-5 bg-white">
        <div>
          <img src='img/logo.png' className=' w-14 h-14' alt="Logo"></img>
        </div>
        {contactInfo.map(item => (
          <div className='flex' key={item.title}>
            <div className='image basis-1/2'>
              <a href={item.link}>
                <FontAwesomeIcon icon={item.icon} className='w-10 h-10' />
              </a>
            </div>
            <div className="description basis-1/2 mx-5 flex flex-col justify-center">
              <h4>
                <a href={item.link}>{item.title}</a>
              </h4>
              <p className='italic text-xs my-3'>
                <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-600 ">
        <div className="basis-1/4 mx-1">
          <ul className="flex flex-row justify-around text-base m-3 font-bold text-white uppercase">
            {menuList}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;