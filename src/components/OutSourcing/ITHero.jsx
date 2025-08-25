import React from 'react';

export default function ITHero() {
  return (
    <div className="flex  px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex justify-between items-center">
        <div className="max-w-4xl flex-col gap-8 flex">
          <div className="relative h-full overflow-hidden">
            <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              Transform Your Business with Expert IT Outsourcing Solutions
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg  text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              We are Snapnet, the leading IT outsourcing company in Nigeria.
              With a proven track record of delivering exceptional IT solutions,
              we specialize in providing comprehensive IT outsourcing services
              to businesses across various industries. Our team of highly
              skilled professionals is committed to helping you optimize your IT
              infrastructure, enhance productivity, and drive growth. Explore
              our wide range of services and discover how Snapnet can be your
              strategic partner for all your IT outsourcing needs.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
