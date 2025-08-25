import React from 'react';
import ITHero from '../components/OutSourcing/ITHero';
import ITServices from '../components/OutSourcing/ITServices';
import TrustUs from '../components/OutSourcing/TrustUs';
import Register from '../common/Register';

export default function IT() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <ITHero />
      <ITServices />
      <TrustUs />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
