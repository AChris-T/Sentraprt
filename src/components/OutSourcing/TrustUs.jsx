import React from 'react';
import Solutioncards from '../../ui/Cards/Solutioncards';

export default function TrustUs() {
  return (
    <div className=" w-full px-4 md:px-10 flex flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-2xl md:text-4xl text-center  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Why We’re the Right Fit for IT Outsourcing{' '}
      </h3>
      <div className="grid lg:grid-cols-3 gap-5 mt-10 ">
        <Solutioncards>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Proven Track Record
            </h3>
            <p className="text-gray-600 text-sm">
              Satisfied clients across industries vouch for our exceptional
              services
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-[#151035]">
              Client-Centric Approach{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Tailoring solutions to meet your unique business needs.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-[#151035]">
              Security and Confidentiality{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Highest standards of data security and confidentiality.{' '}
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-[#151035]">
              24/7 Support
            </h3>
            <p className="text-gray-600 text-sm">
              Dedicated team available round the clock for prompt assistance.{' '}
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-[#151035]">
              Innovation and Technology{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Utilizing cutting-edge solutions for optimized IT operations.{' '}
            </p>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
