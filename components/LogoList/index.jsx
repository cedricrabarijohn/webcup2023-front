import React from 'react';
import Div from '../Div';

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/partners/actic.png',
      alt: 'Partner',
    },
    {
      src: '/images/partners/finam.png',
      alt: 'Partner',
    },
    {
      src: '/images/partners/french-tech-mayotte.png',
      alt: 'Partner',
    },
    {
      src: '/images/partners/havana.png',
      alt: 'Partner',
    },
    {
      src: '/images/partners/hodi.png',
      alt: 'Partner',
    },
    {
      src: '/images/partners/mayotte-in-tech.png',
      alt: 'Partner',
    },
    {
      src: '/images/partners/webcup.png',
      alt: 'Partner',
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </Div>
  );
}
