import React from 'react';
import CyberHero from '../components/cybersecuritySolutions/CyberHero';
import Approach from '../components/cybersecuritySolutions/Approach';
import CyberSolutions from '../components/cybersecuritySolutions/CyberSolutions';
import Register from '../common/Register';

export default function CybersecuritySolutions() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <CyberHero />
      <Approach />
      <CyberSolutions />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
