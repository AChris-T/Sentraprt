import React from 'react';
import ManuHero from '../components/Sector/Manufacturing/ManuHero';
import Trends from '../components/Sector/Manufacturing/Trends';
import OurSolution from '../components/Sector/Finance/OurSolution';
import ManuStory from '../components/Sector/Manufacturing/ManuStory';
import Register from '../common/Register';

export default function Manufacturing() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <div className="bg-[#F5F8FB]">
        <ManuHero />
      </div>
      <Trends />
      <div className="bg-[#F5F8FB]">
        <OurSolution />
      </div>
      <ManuStory />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
