import React from 'react';
import FinanceHero from '../components/Sector/Finance/FinanceHero';
import TransFormation from '../components/Sector/Finance/TransFormation';
import OurSolution from '../components/Sector/Finance/OurSolution';
import SuccessStory from '../components/Sector/Finance/SuccessStory';
import Register from '../common/Register';

export default function Finance() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <div className="bg-[#F5F8FB]">
        <FinanceHero />
      </div>
      <TransFormation />
      <div className="bg-[#F5F8FB]">
        <OurSolution />
      </div>
      <SuccessStory />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
