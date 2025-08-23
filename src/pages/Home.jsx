import Hero from '../components/Home/Hero';
import Join from '../components/Home/Join';
import OurService from '../components/Home/OurService';
import Partners from '../components/Home/Pattern';
import Why from '../components/Home/Why';

export default function Home() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <div className="px-4 md:px-10">
        <Hero />
        <OurService />
      </div>
      <Why />
      <div className="px-4 md:px-10"></div>
      <Partners />
      <Join />
      {/*
       */}
    </div>
  );
}
