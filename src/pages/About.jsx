import React from 'react';
import AboutHero from '../components/About/AboutHero';
import Mission from '../components/About/Mission';
import Join from '../components/Home/Join';

export default function About() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <AboutHero />
      <div className="px-4 md:px-10">
        <Mission />
      </div>
      <Join />
    </div>
  );
}
