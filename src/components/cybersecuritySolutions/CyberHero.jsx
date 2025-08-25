import React from 'react';

export default function CyberHero() {
  return (
    <div className="flex bg-[#F5F8FB]  px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex justify-between items-center">
        <div className="max-w-4xl flex-col gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl md:text-6xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              We are a Top 3 Cybersecurity Company in Nigeria Offering Security
              Solutions
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg  text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              At Snapnet Limited, we understand that in today's digital
              landscape, cyber threats pose grievous risks to businesses of all
              sizes. As an ICT consulting company, with one of our core
              offerings in cyber security, we take the security of
              organizations’ data and systems seriously. Our Cyber technological
              tools and services help organizations against cyber-attack, which
              can result in application downtime, theft of sensitive data,
              business interruption, damage of reputation, compliance fines, and
              ensure smooth business continuity.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
