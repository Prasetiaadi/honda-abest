import React from 'react';
import './header.css';
import imgHeader from '../../assets/header.jpeg';
function Header() {
  return (
    <div className='py-0 px-4 mt-0 text-center'>
      <div>
        <h1 className='text-4xl text-black mt-0 mb-2'>
          Selamat Datang DiHonda Bandung.
        </h1>
        <img src={imgHeader} alt='header' className='w-100% h-[130vh]'/>
      </div>
    </div>
  );
}

export default Header;
