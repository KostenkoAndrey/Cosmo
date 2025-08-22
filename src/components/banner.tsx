'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SvgIcon from '@/components/svgIcon';
import type { NavigationOptions } from 'swiper/types';

const banners = [
  'https://static.inpcdn.com/123,239144aebeccc6.webp',
  'https://static.inpcdn.com/122,237e708af6ddde.webp',
  'https://static.inpcdn.com/122,235e006f83826e.webp',
  'https://static.inpcdn.com/122,236db6e8d3ee77.webp',
  'https://static.inpcdn.com/107,1ab91f89d2e2f4.webp',
  'https://static.inpcdn.com/122,23360632e28a9c.webp',
  'https://static.inpcdn.com/106,1abc58f06a79b5.webp',
  'https://static.inpcdn.com/105,1aba5b6c340e5d.webp',
  'https://static.inpcdn.com/106,1abb373a23f883.webp',
  'https://static.inpcdn.com/106,1abc1529fe577f.webp',
];

const Banner = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className='relative w-full px-5 mt-2'>
      <div
        ref={prevRef}
        className='absolute top-1/2 -translate-y-1/2 left-10 z-10 h-[60px] w-[60px] flex items-center justify-center bg-[#0303034D] rounded-full border border-white/20 cursor-pointer transition'
        aria-label='Previous'
      >
        <SvgIcon name='Calendar-Left' className='w-4 h-4 fill-current text-white' />
      </div>
      <div
        ref={nextRef}
        className='absolute top-1/2 -translate-y-1/2 right-10 z-10 h-[60px] w-[60px] flex items-center justify-center bg-[#0303034D] rounded-full border border-white/20 cursor-pointer transition'
        aria-label='Next'
      >
        <SvgIcon name='Calendar-Right' className='w-4 h-4 fill-current text-white' />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false} // отключаем дефолтные кнопки
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className='w-full h-[400px] rounded-xl overflow-hidden'
        onBeforeInit={(swiper) => {
          const nav = swiper.params.navigation as NavigationOptions;
          nav.prevEl = prevRef.current;
          nav.nextEl = nextRef.current;
        }}
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {banners.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`banner-${i}`} className='w-full h-full object-cover' height={469} width={1871} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
