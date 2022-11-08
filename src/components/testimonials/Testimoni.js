import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/dani1.jpeg';
import AVTR2 from '../../assets/dani2.jpeg';
import AVTR3 from '../../assets/rivi1.jpeg';
import AVTR4 from '../../assets/rivi2.jpeg';
import AVTR5 from '../../assets/yoga1.jpeg';
import AVTR6 from '../../assets/yoga2.jpeg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Dani',
  },
  {
    avatar: AVTR2,
    name: 'Dani',
  },
  {
    avatar: AVTR3,
    name: 'Rivi',
  },
  {
    avatar: AVTR4,
    name: 'Rivi',
  },
  {
    avatar: AVTR5,
    name: 'Yoga',
  },
  {
    avatar: AVTR6,
    name: 'Yoga',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='avatar one' />
              </div>
              <h5 className='client__name'>{name}</h5>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
