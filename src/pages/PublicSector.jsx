import React from 'react';
import PublicHero from '../components/Sector/PublicSection/PublicHero';
import Comprehensive from '../components/Sector/PublicSection/Comprehensive';
import OurSolution from '../components/Sector/Finance/OurSolution';
import PublicStory from '../components/Sector/PublicSection/PublicStory';
import Register from '../common/Register';

export default function PublicSector() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <div className="bg-[#F5F8FB]">
        <PublicHero />
      </div>
      <Comprehensive />
      <div className="bg-[#F5F8FB]">
        <OurSolution />
      </div>
      <PublicStory />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
      
    </div>
  );
}
