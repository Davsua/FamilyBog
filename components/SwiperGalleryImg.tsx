'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '@/public/pictures/img1.jpg';
import img2 from '@/public/pictures/img2.jpg';
import img3 from '@/public/pictures/img3.jpg';
import img4 from '@/public/pictures/img4.jpg';
import Image from 'next/image';

export default function SwiperGallery() {
  img1;
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image src={img1} alt='img1' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} alt='img2' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img3} alt='img3' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img4} alt='img4' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
