import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

export const links = [
  {
    name: <FaLinkedin size={'25'} className=" group-hover:text-secondary" />,
    link: 'https://www.linkedin.com/in/mohannad-alassar-137597275/',
  },
  {
    name: (
      <FaFacebookSquare size={'25'} className=" group-hover:text-secondary" />
    ),
    link: 'https://www.facebook.com/mohannad.ala2sar/',
  },
  {
    name: (
      <FaWhatsappSquare size={'25'} className=" group-hover:text-secondary" />
    ),
    link: 'https://api.whatsapp.com/send/?phone=963964539647',
  },
  {
    name: (
      <FaGithubSquare size={'25'} className=" group-hover:text-secondary" />
    ),
    link: 'https://github.com/MohannadAsr',
  },
  {
    name: (
      <FaInstagramSquare size={'25'} className=" group-hover:text-secondary" />
    ),
    link: 'https://www.instagram.com/alassarmohannad/',
  },
];

function SocialLinks() {
  return (
    <div className=" fixed left-0 top-1/2 -translate-y-1/2  flex-col gap-1 md:flex hidden">
      {links.map((item, index) => {
        return (
          <a
            aria-label={'Social-Link'}
            target="_blank"
            href={item.link}
            className="main-button group"
            key={index}
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
