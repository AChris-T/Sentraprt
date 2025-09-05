import React from 'react';

export default function DataHero() {
  return (
    <div className="flex max-w-7xl mx-auto  px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex justify-between items-center">
        <div className="max-w-4xl flex-col items-center text-center gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              Get The Most Out Of Your Data
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg  text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              Data analytics is the core of great business decisions. Challenge
              your assumptions by turning information into insight with our
              latest cloud, big data and predictive analytics solutions. We are
              one of Nigeria's biggest data consultants and we'd love to start
              this data appreciation journey with you.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
