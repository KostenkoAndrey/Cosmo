'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { AutoplayOptions, NavigationOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import SvgIcon from '@/components/svgIcon';

export interface CarouselProps {
  title?: string;
  className?: string;
  array: string[];
  img: { w: string; h: string };
  reverse: boolean;
  SB: number;
  SPW: number;
}

const Carousel = ({ title, array, img, reverse, SB, SPW }: CarouselProps) => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const quantity = array.length;

  return (
    <div className='mx-auto w-full text-[1rem] mt-[60px]'>
      <div className='flex justify-between items-center text-white mb-4'>
        <h2 className='font-bold text-[1.375em]'>{title}</h2>

        <div className='flex items-center gap-4'>
          <Link
            href='/features'
            className='cursor-pointer font-bold text-[0.875em] text-[#00FFFF] hover:text-[#00A3A3] transition-all duration-400 ease-in-out'
          >
            View More
          </Link>
          <span className='font-medium text-[1.125em] text-[#52596e]'>({quantity})</span>

          <div className='flex items-center gap-2'>
            <div
              ref={prevRef}
              className={`h-[45px] w-[45px] flex items-center justify-center rounded-full border border-white/20 cursor-pointer transition
                ${isBeginning ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/10'}`}
              aria-label='Previous'
            >
              <SvgIcon name='Calendar-Left' className='w-4 h-4 fill-current stroke-[#0303034D]' />
            </div>
            <div
              ref={nextRef}
              className={`h-[45px] w-[45px] flex items-center justify-center rounded-full border border-white/20 cursor-pointer transition
                ${isEnd ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/10'}`}
              aria-label='Next'
            >
              <SvgIcon name='Calendar-Right' className='w-4 h-4 fill-current stroke-[#0303034D]' />
            </div>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={false}
        spaceBetween={SB}
        slidesPerView={SPW}
        className='overflow-visible'
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        onSwiper={(swiper) => {
          const nav = swiper.params.navigation as NavigationOptions;
          nav.prevEl = prevRef.current;
          nav.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();

          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);

          swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          });

          swiper.on('reachEnd', () => {
            const autoplay = swiper.params.autoplay as AutoplayOptions;
            autoplay.reverseDirection = true;
            swiper.autoplay?.start();
          });

          swiper.on('reachBeginning', () => {
            const autoplay = swiper.params.autoplay as AutoplayOptions;
            autoplay.reverseDirection = false;
            swiper.autoplay?.start();
          });
        }}
      >
        {array.map((game, i) => (
          <SwiperSlide key={i}>
            <div className={`${img.w} ${img.h} rounded-xl overflow-hidden bg-gray-800`}>
              <Link href='/features' className='cursor-pointer'>
                <img src={game} alt={`game-${i}`} className='w-full h-full object-cover' />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
