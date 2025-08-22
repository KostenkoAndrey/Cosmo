import React from 'react';
import { SiVisa } from 'react-icons/si';
import { RiMastercardFill } from 'react-icons/ri';
import Link from 'next/link';

const icons = [
  { component: SiVisa, href: '/features' },
  { component: RiMastercardFill, href: '/features' },
  { component: SiVisa, href: '/features' },
  { component: RiMastercardFill, href: '/features' },
  { component: SiVisa, href: '/features' },
  { component: RiMastercardFill, href: '/features' },
  { component: SiVisa, href: '/features' },
  { component: RiMastercardFill, href: '/features' },
  { component: SiVisa, href: '/features' },
  { component: RiMastercardFill, href: '/features' },
  { component: SiVisa, href: '/features' },
  { component: RiMastercardFill, href: '/features' },
  { component: SiVisa, href: '/features' },
  { component: RiMastercardFill, href: '/features' },
  { component: SiVisa, href: '/features' },
  { component: RiMastercardFill, href: '/features' },
];

const PaymentSystem = () => {
  return (
    <div>
      <ul className='flex items-center justify-between mt-[60px] bg-[#0c0e11] px-3 py-5 mx-auto'>
        {icons.map(({ component: Icon, href }, i) => (
          <li key={i}>
            <Link href={href}>
              <Icon className='text-white text-5xl' />
            </Link>
          </li>
        ))}
      </ul>

      <ul className='flex items-center justify-between px-3 py-5 mx-auto border-b border-gray-700'>
        {icons.map(({ component: Icon, href }, i) => (
          <li key={i}>
            <Link href={href}>
              <Icon className='text-white text-5xl' />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentSystem;
