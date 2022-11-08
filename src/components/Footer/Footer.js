import React from 'react';
import './footer.css';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id='footer' className='mb-0 bg-red-600'>
      <a href='/' className='footer__logo'>
        <img
          src='https://hondabdgjuara.com/wp-content/uploads/2021/11/Honda-Free-Service.png'
          alt='logo'
        />
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#about'>Produk</a>
        </li>
        <li>
          <a href='#service'>Service</a>
        </li>
        <li>
          <a href='#testimoni'>Testimoni</a>
        </li>
        <li>
          <a href='#contact'>Kontak</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com/rivi_hondabandung' target='_blank' rel='noreferrer'>
          <BsInstagram />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>
          &copy; Honda Bandung.
          <br />
          All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
