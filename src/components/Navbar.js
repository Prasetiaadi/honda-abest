// build responsive Navbar
import React from 'react';

function Navbar() {
  let Links = [
    { name: 'Beranda', link: '/' },
    { name: 'Produk', link: '#Product' },
    { name: 'Testimoni', link: '/Testimoni' },
    {
      name: 'Kontak',
      link: 'https://api.whatsapp.com/send?phone=+6281223345493',
      target: '_blank',
    },
  ];

  let [open, setOpen] = React.useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-white py-2 px-8 md:px-10 xl:px-12'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-500'>
          <a href='/'>
            <img
              alt='Honda'
              className='h-14 w-auto'
              src='https://honda-bandung.net/wp-content/uploads/2020/10/logo-honda.png'
            />
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-90' : 'top-[-500px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-md md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
