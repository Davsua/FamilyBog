'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '@/public/img1.jpg';
import img2 from '@/public/1698110897816_img2.jpg';
import img3 from '@/public/img3.jpg';
import Image from 'next/image';

interface Props {
  images: string[];
}

export const SwiperGallery: React.FC<Props> = ({ images }) => {
  //console.log(typeof images);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <Image src={img} alt='stardew-valley' width='640' height='360' className='mb-2 rounded' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperGallery;
