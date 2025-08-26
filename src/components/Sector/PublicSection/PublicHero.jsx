import React from 'react';

export default function PublicHero() {
  return (
    <div className="flex  px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex justify-between items-center">
        <div className="max-w-4xl flex-col gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              We Are Driving Digital Transformation In The Public Sector
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg  text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              The pace of digital transformation presents an ongoing challenge
              to managing seamless and secure government IT across on-premises,
              private cloud, and public cloud environments. Snapnet helps you
              optimize legacy systems as you adopt new approaches to improving
              your multi-cloud infrastructure.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
