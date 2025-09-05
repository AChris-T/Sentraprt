import React from 'react';

export default function RobotHero() {
  return (
    <div className="flex bg-[#F5F8FB] px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex max-w-7xl mx-auto  justify-between items-center">
        <div className="max-w-5xl flex-col text-center items-center justify-center gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              Optimize Operations with Intelligent Robotic Process Automation{' '}
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              Robotic Process Automation or RPA, is a technology that uses
              software robots or "bots" to automate repetitive and rule-based
              tasks within business processes. These bots mimic human actions,
              interacting with various applications, systems, and data sources
              to execute tasks with speed and accuracy.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
