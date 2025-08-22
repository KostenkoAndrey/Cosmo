import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Sports', src: 'https://static.inpcdn.com/95,1877a9fc09c727.webp' },
  { name: 'Casino', src: 'https://static.inpcdn.com/95,1877aa97e0dc4d.webp' },
  { name: 'Mini Games', src: 'https://static.inpcdn.com/95,1877abc4013d87.webp' },
  { name: 'Live Casino', src: 'https://static.inpcdn.com/95,1877acc3365a64.webp' },
  { name: 'ESoprts', src: 'https://static.inpcdn.com/95,1877ada9efed52.webp' },
  { name: 'Live', src: 'https://static.inpcdn.com/95,1877ae2b3535ce.webp' },
];

const Categories = () => {
  return (
    <ul className='flex justify-center gap-1 mt-2 mx-auto w-full'>
      {categories.map((item) => (
        <li key={item.name} className='group hover:text-[#00ffff] relative rounded-4xl cursor-pointer'>
          <Link href='/features'>
            <img src={item.src} alt={'categories'} width={185} height={195} />
          </Link>
          <span className='w-full absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-[1.5em] font-bold text-center group-hover:text-[#00ffff] transition-all duration-400 ease-in-out'>
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
