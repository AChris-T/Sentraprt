import React from 'react';

export default function CloudHero() {
  return (
    <div className="flex  max-w-7xl mx-auto  px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex justify-between items-center">
        <div className="max-w-5xl flex-col items-center text-center gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              Get The Best Cloud Solutions To Transform Your Business
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg  text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              Going to the ‘The Cloud’ offers advantages such as accessibility,
              predictable pricing, security and scalability for your data and
              applications. At Snapnet, we are the best to help determine
              whether a Cloud strategy is the best choice for your
              organization’s needs.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
