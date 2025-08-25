import React from 'react';

export default function SoftHero() {
  return (
    <div className="flex bg-[#F5F8FB]  px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex justify-between items-center">
        <div className="max-w-4xl flex-col gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl md:text-6xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              We've Cracked The Code For Success
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg  text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              Our cutting-edge software development team have built bespoke
              solutions to improve efficiency, productivity, insights and
              profit. Whatever your business needs are, you're certain to find
              the perfect and innovative solution.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
