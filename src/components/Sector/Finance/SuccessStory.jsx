import React from 'react';
import Solutioncards from '../../../ui/Cards/Solutioncards';

export default function SuccessStory() {
  return (
    <div className="px-4  max-w-7xl mx-auto md:px-10 flex font-work-sans flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Key Solutions{' '}
      </h3>
      <p className="text-gray-600 max-w-5xl text-center ">
        Our solutions help organisation drive digital transformation to identify
        new opportunities, it also helps organisation’s reduce cost, helps in
        decision making. We have worked with companies and built positive
        success stories across the financial service industry.
      </p>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">UBA</h3>
              <p className="text-gray-600 text-sm">
                We successful implemented a Microsoft Business Intelligence
                Solution and spearheaded a Microsoft SQL Server Consolidation
                Project
              </p>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                Diamond Bank
              </h3>
              <p className="text-gray-600 text-sm">
                We provided expert techniques to help thier organization improve
                their efficiency by the implementation of StorSimple Hybrid
                Storage.
              </p>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                Custodian Alliance
              </h3>
              <p className="text-gray-600 text-sm">
                We improved their business operations, enhanced productivity and
                improved real-time team collaboration by deploying Microsoft
                Office365.
              </p>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                Heritage Bank
              </h3>
              <p className="text-gray-600 text-sm">
                Our SharePoint experts provided Microsoft SharePoint
                Infrastructure Support Services to enahance business process
                automation
              </p>
            </div>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
