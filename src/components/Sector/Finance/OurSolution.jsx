import React from 'react';
import Solutioncards from '../../../ui/Cards/Solutioncards';

export default function OurSolution() {
  return (
    <div className="px-4 md:px-10 flex flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-4xl md:text-5xl text-center  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Solutions That Help You Meet Your Business Goals{' '}
      </h3>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Cell Analytics™
            </h3>
            <p className="text-gray-600 text-sm">
              Cell Analytics™ is a Management Information System (MIS) dashboard
              that provides real time financial analytics for financial
              institutions to view a whole set of predefined metrics and KPIs.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Microsoft Office 365{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Microsoft Office 365 is a cloud-based enterprise-grade
              productivity suite that includes Microsoft Office and other
              services, such as email and collaboration, so you can access your
              Office from anywhere and anytime.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Window Server 2016{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              t is a group of operating systems designed by Microsoft that
              supports enterprise-level management, data storage, applications,
              and communications. It helps you discover, organize, and analyze
              high volumes of operations data to better understand the customer
              experience.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">Azure </h3>
            <p className="text-gray-600 text-sm">
              It is a cloud computing service created by Microsoft for building,
              testing, deploying, and managing applications and services through
              a global network of Microsoft-managed data centers.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]"> Zebra </h3>
            <p className="text-gray-600 text-sm">
              Zebra builds enterprise-level data capture and automatic
              identification solutions that provide businesses with operational
              visibility.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">Polycom </h3>
            <p className="text-gray-600 text-sm">
              Polycom is the leader in video, voice, and content solutions,
              building several technology solutions that can help your
              organization unleash the power of team collaboration.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Cortana intelligence
            </h3>
            <p className="text-gray-600 text-sm">
              Cortana intelligence is a Suite of service offerings on the
              Microsoft Azure Cloud, which enable businesses to transform the
              data into Intelligent Actions.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">Sophos</h3>
            <p className="text-gray-600 text-sm">
              Sophos develops IT security products for communication endpoint,
              encryption, network security, email security, mobile security and
              unified threat management.
            </p>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
