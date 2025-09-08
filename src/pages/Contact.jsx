import React from 'react';
import location from '../assets/images/location.gif';
import Email from '../assets/images/email-file.gif';
import CourseCard from '../ui/Cards/CourseCard';
import Solutioncards from '../ui/Cards/Solutioncards';
import Register from '../common/Register';

export default function Contact() {
  return (
    <div className="">
      <div className="mt-30   max-w-7xl mx-auto mb-10 font-work-sans flex-col flex gap-10 item-center justify-center ">
        <h3 className="text-4xl flex justify-center items-center md:text-7xl px-4 md:px-10   mt-10  font-bold   text-[#151035]">
          Contact Us{' '}
        </h3>{' '}
        <div className="grid px-4 md:px-10 grid-cols-1 mt-5 md:mt-20 md:grid-cols-2  gap-5">
          <div className="flex flex-col gap-4 md:gap-10">
            <Solutioncards>
              <div className="flex flex-col gap-2  ">
                <div className="flex gap-2  items-center">
                  <img
                    src={location}
                    alt=""
                    className="w-10 h-10 object-cover"
                  />
                  <h3 className="text-2xl font-medium text-[#151035]">
                    Address
                  </h3>
                </div>
                <h3 className="text-gray-600">
                  No 14, Pat Olatunji St,Command Road, Ipaja, Lagos.
                </h3>
              </div>
            </Solutioncards>
            {/*    <Solutioncards>
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
          </Solutioncards> */}
            <Solutioncards>
              <div className="flex flex-col gap-2  ">
                <div className="flex gap-2  items-center">
                  <img src={Email} alt="" className="w-10 h-10 object-cover" />
                  <h3 className="text-2xl font-medium text-[#151035]">Email</h3>
                </div>
                <h3 className="text-gray-600">info@snapnetsolutions.com</h3>
              </div>
            </Solutioncards>
          </div>
          <Solutioncards>
            <form className="flex flex-col gap-4">
              <h3 className="text-2xl w-full flex items-center justify-center text-[#151035] font-semibold">
                General Inquiries
              </h3>
              <div className="flex flex-col  gap-1">
                <label className="text-[#151035] ">Fullname</label>
                <input
                  className="border-gray-200 border-[1.5px] px-2 h-[40px] rounded-md focus:outline-none"
                  type="text"
                  placeholder="Enter your fullname"
                />
              </div>
              <div className="flex flex-col  gap-1">
                <label className="text-[#151035] ">Work Email </label>
                <input
                  className="border-gray-200 border-[1.5px] px-2 h-[40px] rounded-md focus:outline-none"
                  type="text"
                  placeholder="Enter your  Work Email "
                />
              </div>
              <div className="flex flex-col  gap-1">
                <label className="text-[#151035] ">
                  How can we assist you?{' '}
                </label>
                <textarea
                  rows={6}
                  cols={5}
                  className="border-gray-200 border-[1.5px] px-2 py-3  rounded-md focus:outline-none"
                  type="text"
                  placeholder="Enter Your messages "
                />
              </div>
              <button className="w-full bg-[#048383] cursor-pointer text-white px-6 py-2 rounded-lg font-medium hover:bg-[#25b4b4] transition-colors">
                Submit
              </button>
            </form>
          </Solutioncards>
        </div>
      </div>
      <div className="w-full  px-4 py-10 text-center md:px-10 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 ">
          <h3 className="font-semibold text-[#151035] text-2xl">
            {' '}
            Snapnet Limited
          </h3>
          <h3>
            We are a Top IT consulting firm in Nigeria, we specialize in
            developing bespoke IT solutions, offering software development, web
            design, cybersecurity, cloud computing, business consulting, and
            systems integration services. Our industry-specific solutions are
            tailored to the unique needs of discerning clients in the private
            and public sector, with offices in Lagos and Abuja.
          </h3>{' '}
        </div>
      </div>
    </div>
  );
}
