import React from 'react';
import Link from 'next/link';
import { GoShieldCheck } from 'react-icons/go';
import { TbRating18Plus } from 'react-icons/tb';

const ourProducts = [
  'Sports Betting',
  'Virtual Sports',
  'E-Sport',
  'Mini Games',
  'Casino',
  'Live Casino',
  'Accounts, Payouts & Bonuses',
  'MARKETING_OFFERS',
];

const information = [
  'Company Details',
  'Responsible Gaming',
  'Privacy Policy',
  'Affiliate',
  'Sportsbook Terms',
  'Affiliate Program T&C',
  'Cosmobet News',
];

const help = [
  'Terms & Conditions',
  'F.A.Q (Frequently Asked Questions)',
  'KYC/AML Policy',
  'Refund Policy',
  'Dispute Resolution',
  'Fairness & RNG Testing Methods',
  'Self Exclusion',
];

const contactUs = ['Support@Cosmobet.Com', 'Live Chat', 'Affiliates@Cosmobet.Com', 'VIP'];

const Footer = () => {
  return (
    <div className='mb-[100px]'>
      <div className='flex items-baseline justify-between py-[80px] text-white text-[1rem]'>
        <div>
          <h2 className='font-bold text-[1em] mb-[10px]'>Our Products</h2>
          <ul className='flex flex-col gap-1 text-[0.75em] text-[#899194]'>
            {ourProducts.map((item, i) => (
              <li key={i} className='hover:text-white transition-all duration-200 ease-in-out'>
                <Link href='/features'>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='font-bold text-[1em] mb-[10px]'>Information</h2>
          <ul className='flex flex-col gap-1 text-[0.75em] text-[#899194]'>
            {information.map((item, i) => (
              <li key={i} className='hover:text-white transition-all duration-200 ease-in-out'>
                <Link href='/features'>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='font-bold text-[1em] mb-[10px]'>Help</h2>
          <ul className='flex flex-col gap-1 text-[0.75em] text-[#899194]'>
            {help.map((item, i) => (
              <li key={i} className='hover:text-white transition-all duration-200 ease-in-out'>
                <Link href='/features'>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='font-bold text-[1em] mb-[10px]'>Contact Us</h2>
          <ul className='flex flex-col gap-1 text-[0.75em] text-[#899194]'>
            {contactUs.map((item, i) => (
              <li key={i} className='hover:text-white transition-all duration-200 ease-in-out'>
                <Link href='/features'>{item}</Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-3 mt-[80px]'>
            <div>
              <Link href='/features'>
                <img src='https://static.inpcdn.com/76,14f3ebd69dd959.webp' width={40} height={40} alt='twitter' />
              </Link>
            </div>

            <div>
              <Link href='/features'>
                <img src='https://static.inpcdn.com/107,1ae3ed6abe4369.webp' width={40} height={40} alt='discord' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center gap-2  py-6 border-t border-b border-[#1f1f1f] text-white'>
        <TbRating18Plus className='w-10 h-full text-red-700' />
        <GoShieldCheck className='w-10 h-full text-white' />
        <span>
          Attention! It is gambling advertising. Gambling is not suitable for solving financial problems. Please read
          terms and conditions and play responsibly.
        </span>
      </div>
      <div className='flex flex-col gap-10 items-center my-10 text-white'>
        <span className='text-center'>
          cosmobet.com is operated by Santeda International B.V., a company incorporated under the laws of Curaçao with
          Company Number 151296 and is licensed by the Curaçao Gaming Control Board to offer games of chance under
          license number OGL/2024/1798/1048 in accordance with the National Ordinance on Offshore Games of Hazard
          (Landsverordening buitengaatse hazardspelen, P.B. 1993, no. 63) (NOOGH). Santeda International Limited, with
          registered office at Poreias, 2 3011, Limassol, Cyprus, acts as a payment agent of the license holder and
          parent company - Santeda International BV.
        </span>
        <img src='https://seal.cgcb.info/1c0246df-1aa7-485a-a24c-21ae5e730000' width={150} height={85} alt='GCB' />
      </div>
    </div>
  );
};

export default Footer;
