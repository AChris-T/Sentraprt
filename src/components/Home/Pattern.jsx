import React from 'react';
import PartnersImage from '../../assets/images/Microsoft.png';

export default function Partners() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full py-4 ">
      <h3 className="text-2xl md:text-4xl  font-bold max-w-4xl items-center text-center text-[#151035]">
        Our Technical Partners
      </h3>
      <img
        src={PartnersImage}
        alt="Partners"
        className="mt-10 w-[300px] h-auto"
      />
    </div>
  );
}
