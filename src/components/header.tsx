'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import SvgIcon from '@/components/svgIcon';

const path = [
  { name: 'Sports', path: '/' },
  { name: 'Cosmo Clash', path: '/' },
  { name: 'Live', path: '/' },
  { name: 'E-sports', path: '/' },
  { name: 'Live Casino', path: '/' },
  { name: 'Cosmic Summer', path: '/' },
  { name: 'Casino', path: '/' },
  { name: 'Mini Games', path: '/' },
  { name: 'Virtual Sport', path: '/' },
  { name: 'Racing', path: '/' },
  { name: 'Promotions', path: '/' },
];

const Lang = [
  { code: 'en', label: 'EN - English' },
  { code: 'pt-BR', label: 'BR - Brazilian' },
  { code: 'de', label: 'DE - Deutsch' },
  { code: 'es', label: 'ES - Español' },
  { code: 'fr', label: 'FR - Français' },
  { code: 'fi', label: 'FI - Suomalainen' },
  { code: 'pt', label: 'PT - Português' },
  { code: 'it', label: 'IT - Italiano' },
  { code: 'no', label: 'NO - Norsk' },
  { code: 'tr', label: 'TR - Türkçe' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='sticky top-0 left-0  right-0 z-50  border-b border-[#1f1f1f] bg-[#030303]'>
      <div className='border-b border-[#1f1f1f]'>
        <div className='max-w-[1400px] w-full mx-auto px-5 py-4 text-[1rem]'>
          <div className='flex justify-between items-center'>
            <Link href='/' className='cursor-pointer'>
              <img
                src='https://static.inpcdn.com/108,1b56f7008ebe22.webp'
                className='w-[166px] h-[33px] object-cover'
                alt='Logo'
              />
            </Link>

            <div className='flex items-center gap-2 text-white'>
              <Link
                href='/reset-password'
                className='font-normal text-[0.675em] px-4 hover:text-white/30 transition-all duration-400 ease-in-out'
              >
                Forgot Password?
              </Link>
              <Link
                href='/signup'
                className='cursor-pointer font-bold text-[0.75em] rounded-[8px] px-3 py-2 bg-[#cf0e48] hover:text-black hover:bg-[#750524] transition-all duration-400 ease-in-out'
              >
                Sign Up
              </Link>
              <Link
                href='/login'
                className='cursor-pointer font-bold text-[0.75em] rounded-[8px] px-3 py-2 bg-[#00ffff] hover:text-white hover:bg-[#00A3A3] transition-all duration-400 ease-in-out text-[#030303] '
              >
                Log in
              </Link>
              <div
                ref={dropdownRef}
                onClick={() => setOpen(!open)}
                className='relative cursor-pointer flex items-center gap-[6px]'
              >
                <span className='uppercase'>{lang}</span>
                <span>
                  <SvgIcon
                    name={'Arrow-Down'}
                    className={`stroke-white w-5 h-5 fill-black transition-all duration-400 ${open ? 'rotate-180' : 'rotate-0'}`}
                  />
                </span>
                <ul
                  className={`absolute top-full right-0 w-[160px] bg-[#101318] z-50
              transition-all duration-400 ease-in-out origin-top
              ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                >
                  {Lang.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => setLang(lang.code)}
                      className='cursor-pointer py-2 px-3 text-[0.875em] hover:bg-white/10'
                    >
                      {lang.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className='max-w-[1400px] w-full mx-auto px-5 py-4 text-[1rem] text-white'>
        <ul className='flex items-center justify-between py-1'>
          {path.map((item) => (
            <li
              key={item.name}
              className='text-[1em] cursor-pointer hover:text-[#00ffff] transition-all duration-400 ease-in-out'
            >
              <Link href='/features'>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
