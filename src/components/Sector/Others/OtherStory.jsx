import React from 'react';
import Solutioncards from '../../../ui/Cards/Solutioncards';

export default function OtherStory() {
  return (
    <div className="px-4 md:px-10 flex font-work-sans flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Success Stories
      </h3>
      <p className="text-gray-600 max-w-5xl text-center ">
        Our solutions help organisation drive digital transformation to identify
        new opportunities, it also helps organisation’s reduce cost, helps in
        decision making. We have worked with companies and built positive
        success stories across the financial service industry.
      </p>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">MTN </h3>
              <p className="text-gray-600 text-sm">
                We provided Microsoft Azure Services to ensure optimal business
                security and upscale organizational productivity.
              </p>
            </div>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
