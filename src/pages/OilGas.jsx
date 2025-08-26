import React from 'react';
import OilHero from '../components/Sector/Oil/OilHero';
import Technologies from '../components/Sector/Oil/Technologies';
import OurSolution from '../components/Sector/Finance/OurSolution';
import OilStory from '../components/Sector/Oil/OilStory';
import Register from '../common/Register';

export default function OilGas() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <div className="bg-[#F5F8FB]">
        <OilHero />
      </div>
      <Technologies />
      <div className="bg-[#F5F8FB]">
        <OurSolution />
      </div>
      <OilStory />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
