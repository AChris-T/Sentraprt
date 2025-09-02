import React from 'react';
import { MarkedIcon, PracticalIcon, StarIcon } from '../../assets/icons';
import { NavLink } from 'react-router';

export default function Join() {
  return (
    <div className="w-full font-work-sans flex items-center flex-col justify-center py-20 bg-[#F5F8FB]">
      <h3 className="text-4xl md:text-7xl  font-bold max-w-4xl items-center text-center text-[#151035]">
        Join an unstoppable community
      </h3>
      <p className="text-gray-600 mt-4 text-center max-w-2xl px-4">
        2 months intensive Training and 2 Month Intership on Microsoft Dynamics
        365 Business
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#048383] hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-[#E6F5F5] flex items-center justify-center">
              <MarkedIcon />
            </span>
            <h4 className="font-semibold text-[#151035]">Expert Instruction</h4>
          </div>
          <p className="text-sm text-gray-600">
            Weekly workshops and AMAs with industry experts to keep you ahead.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#048383] hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-[#E6F5F5] flex items-center justify-center">
              <StarIcon />
            </span>
            <h4 className="font-semibold text-[#151035]">Practical Learning</h4>
          </div>
          <p className="text-sm text-gray-600">
            Templates, playbooks, and code examples ready to plug into your
            work.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#048383] hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-[#E6F5F5] flex items-center justify-center">
              <PracticalIcon />
            </span>
            <h4 className="font-semibold text-[#151035]">Mentorship</h4>
          </div>
          <p className="text-sm text-gray-600">
            Connect with operators, engineers, and leaders solving similar
            problems.
          </p>
        </div>
      </div>
      <div className="mt-12 flex justify-center w-full max-w-3xl px-4">
        <NavLink
          to={'contact-us'}
          className="bg-[#048383] hover:bg-[#25b4b4] text-white font-medium px-6 py-3 rounded-md w-full md:w-auto transition-colors"
        >
          Register now
        </NavLink>
      </div>
    </div>
  );
}
