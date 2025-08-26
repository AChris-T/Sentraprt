import React from 'react';
import OthersHero from '../components/Sector/Others/OthersHero';
import Drivers from '../components/Sector/Others/Drivers';
import OurSolution from '../components/Sector/Finance/OurSolution';
import OtherStory from '../components/Sector/Others/OtherStory';
import Register from '../common/Register';

export default function Others() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <div className="bg-[#F5F8FB]">
        <OthersHero />
      </div>
      <Drivers />
      <div className="bg-[#F5F8FB]">
        <OurSolution />
      </div>
      <OtherStory />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
