import React from 'react';
import RobotHero from '../components/Robots/RobotHero';
import AboutRobot from '../components/Robots/AboutRobot';
import Register from '../common/Register';

export default function Robots() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <RobotHero />
      <AboutRobot />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>{' '}
    </div>
  );
}
