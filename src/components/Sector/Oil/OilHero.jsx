import React from 'react';

export default function OilHero() {
  return (
    <div className="flex  max-w-7xl mx-auto  px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex justify-between items-center">
        <div className="max-w-6xl items-center text-center w-full flex-col gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              Digital Transformation Is Reshaping The Oil And Gas Industry
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg  text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              Oil and gas firms are leveraging new digital technologies to
              accelerate output by improving productivity and streamlining
              operations by exploring new, cost-effective ways to discover,
              extract, and produce oil. Leveraging on effective IT solutions
              however, is crucial to ensure that these technologies deliver the
              desired outcome in your business.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
