import React from 'react';
import CloudHero from '../components/CloudSolutions/CloudHero';
import Solutions from '../components/CloudSolutions/Solutions';
import Register from '../common/Register';
import StartCloud from '../components/CloudSolutions/StartCloud';

export default function CloudSolutions() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <CloudHero />
      <Solutions />
      <StartCloud />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
