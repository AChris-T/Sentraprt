import React from 'react';
import location from '../assets/images/location.gif';
import Email from '../assets/images/email-file.gif';
import CourseCard from '../ui/Cards/CourseCard';
import Solutioncards from '../ui/Cards/Solutioncards';
import Register from '../common/Register';

export default function Contact() {
  return (
    <div className="mt-30 px-4 font-work-sans md:px-10 flex-col flex gap-10 item-start justify-start ">
      <h3 className="text-4xl md:text-7xl   mt-10  font-bold max-w-4xl items-start  text-[#151035]">
        Contact Us{' '}
      </h3>{' '}
      <div className="grid grid-cols-1 mt-5 md:mt-20 md:grid-cols-2  gap-5">
        <div className="flex flex-col gap-4 md:gap-10">
          <Solutioncards>
            <div className="flex flex-col gap-2  ">
              <div className="flex gap-2  items-center">
                <img src={location} alt="" className="w-10 h-10 object-cover" />
                <h3 className="text-2xl font-semibold text-[#151035]">
                  Address
                </h3>
              </div>
              <h3 className="text-gray-600">
                Lagos Office (HQ): 17 Charles Ifeanyi Street, Off Adebayo
                Doherty, Lekki Phase 1, Lagos, Nigeria.
              </h3>
            </div>
          </Solutioncards>
          <Solutioncards>
            <div className="flex flex-col gap-2  ">
              <div className="flex gap-2  items-center">
                <img src={location} alt="" className="w-10 h-10 object-cover" />
                <h3 className="text-2xl font-semibold text-[#151035]">
                  Address
                </h3>
              </div>
              <h3 className="text-gray-600">
                2nd Floor suite 9 (Right Wing). Sinoki House, Before Ministry of
                Transportation, Abuja, Nigeria.
              </h3>
            </div>
          </Solutioncards>

          <Solutioncards>
            <div className="flex flex-col gap-2  ">
              <div className="flex gap-2  items-center">
                <img src={Email} alt="" className="w-10 h-10 object-cover" />
                <h3 className="text-2xl font-semibold text-[#151035]">Email</h3>
              </div>
              <h3 className="text-gray-600">info@snapnetsolutions.com</h3>
            </div>
          </Solutioncards>
        </div>

        <Solutioncards>
          <form className="flex flex-col gap-4">
            <h3 className="text-4xl w-full flex items-center justify-center text-[#151035] font-semibold">
              General Inquiries
            </h3>
            <div className="flex flex-col  gap-1">
              <label className="text-[#151035] font-medium">Fullname</label>
              <input
                className="border-gray-600 border-[1.5px] px-2 h-[40px] rounded-md focus:outline-none"
                type="text"
                placeholder="Enter your fullname"
              />
            </div>
            <div className="flex flex-col  gap-1">
              <label className="text-[#151035] font-medium">Work Email </label>
              <input
                className="border-gray-600 border-[1.5px] px-2 h-[40px] rounded-md focus:outline-none"
                type="text"
                placeholder="Enter your  Work Email "
              />
            </div>
            <div className="flex flex-col  gap-1">
              <label className="text-[#151035] font-medium">
                How can we assist you?{' '}
              </label>
              <textarea
                rows={6}
                cols={5}
                className="border-gray-600 border-[1.5px] px-2 py-3  rounded-md focus:outline-none"
                type="text"
                placeholder="Enter Your messages "
              />
            </div>
            <button className="w-full bg-[#048383] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#25b4b4] transition-colors">
              Submit
            </button>
          </form>
        </Solutioncards>
      </div>
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
