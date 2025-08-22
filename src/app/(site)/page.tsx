import Header from '@/components/header';
import Banner from '@/components/banner';
import Categories from '@/components/categories';
import Carousel from '@/components/сarousel';
import PaymentSystem from '@/components/paymentSystem';
import Footer from '@/components/footer';

const games = [
  'https://static.inpcdn.com/108,1b219f87d4257a.webp',
  'https://static.inpcdn.com/114,2021288c2291fe.webp',
  'https://static.inpcdn.com/40,0d38ff446b0c92.webp',
  'https://static.inpcdn.com/98,1906f1d0e06155.webp',
  'https://static.inpcdn.com/117,20c9a42563fdad.webp',
  'https://static.inpcdn.com/53,0f18f9455eafab.webp',
  'https://static.inpcdn.com/98,1906fedd2f37df.webp',
  'https://static.inpcdn.com/114,202125a0dd1460.webp',
  'https://static.inpcdn.com/108,1b219f87d4257a.webp',
  'https://static.inpcdn.com/114,2021288c2291fe.webp',
  'https://static.inpcdn.com/40,0d38ff446b0c92.webp',
  'https://static.inpcdn.com/98,1906f1d0e06155.webp',
  'https://static.inpcdn.com/117,20c9a42563fdad.webp',
  'https://static.inpcdn.com/53,0f18f9455eafab.webp',
  'https://static.inpcdn.com/98,1906fedd2f37df.webp',
  'https://static.inpcdn.com/114,202125a0dd1460.webp',
];

export const metadata = {
  title: 'Cosmobet',
  description: 'Лучшее казино онлайн 🚀',
};

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main className='max-w-[1400px] w-full px-5 mx-auto'>
        <Categories />
        <Carousel
          title={'Casino'}
          array={games}
          img={{ w: 'w-[215px]', h: 'h-[290px]' }}
          reverse={false}
          SB={8}
          SPW={6}
        />
        <Carousel
          title={'Mini Games'}
          array={games}
          img={{ w: 'w-[160px]', h: 'h-[200px]' }}
          reverse={true}
          SB={2}
          SPW={8}
        />
        <Carousel
          title={'Live Casino'}
          array={games}
          img={{ w: 'w-[160px]', h: 'h-[200px]' }}
          reverse={false}
          SB={2}
          SPW={8}
        />
        <PaymentSystem />
        <Footer />
      </main>
    </>
  );
}
