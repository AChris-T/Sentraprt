import React from 'react';

export default function ManuHero() {
  return (
    <div className="flex max-w-7xl mx-auto    px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex justify-between items-center">
        <div className=" items-center text-center justify-center flex-col gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl w-full md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              We Are Driving Digital Transformation In The Manufacturing
              Industry
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg  text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              Manufacturing firms are leveraging new digital technologies to
              accelerate output by improving productivity, streamlining
              operations, and reducing time to market. Mastering effective IT
              operations however, is crucial to ensure that these technologies
              deliver the desired competitive advantage.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
