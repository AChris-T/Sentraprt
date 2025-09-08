import React from 'react';
import { NavLink } from 'react-router';

export default function Register() {
  return (
    <div className="px-4 md:px-10 flex flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-2xl max-w-[900px] md:text-4xl text-center  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Begin your journey with us today{' '}
      </h3>
      <div className="flex justify-between items-center w-full ">
        <div className="flex w-full items-center justify-center gap-4 mt-6">
          <NavLink
            to={'contact-us'}
            className="bg-[#048383] text-white px-5 md:px-14 py-4 rounded-md font-medium hover:bg-[#25b4b4] cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </NavLink>
          <NavLink
            to={'contact-us'}
            className="border-1 border-gray-200 text-black px-5 md:px-14 py-4 rounded-md font-medium hover:bg-[#048383] hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Call an Agent
          </NavLink>
        </div>
      </div>{' '}
    </div>
  );
}
