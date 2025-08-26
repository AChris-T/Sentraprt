import React from 'react';

export default function FinanceHero() {
  return (
    <div className="flex  px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex justify-between items-center">
        <div className="max-w-4xl flex-col gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              We Are Driving Digital Transformation In The Financial Sector
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg  text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              Our solutions help organisation drive digital transformation to
              identify new opportunities, it also helps organisation's reduce
              cost, helps in decision making.The results of digital
              transformation in an organisation is improving busisness
              effeciences, make better business decisions, empowering your
              employess and transforming your products. With our cloud solutions
              we are able to solve industry specific problems.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
