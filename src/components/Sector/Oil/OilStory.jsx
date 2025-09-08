import React from 'react';
import Solutioncards from '../../../ui/Cards/Solutioncards';

export default function OilStory() {
  return (
    <div className="px-4  max-w-7xl mx-auto md:px-10 flex font-work-sans flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-2xl md:text-4xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Success Stories
      </h3>
      <p className="text-gray-600 max-w-5xl text-center ">
        Our solutions help organisation drive digital transformation to identify
        new opportunities, it also helps organisation’s reduce cost, make
        effective decisions and increases revenue. We have worked with companies
        and built positive success stories across the oil and gas industry
      </p>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                Department of Petroleum Resources
              </h3>
              <p className="text-gray-600 text-sm">
                MasterRecruit was implemented to carry out a hassle-free
                recruitment exercise and the deployment of the Microsoft
                Business Intelligence solution (Power BI) greatly enhanced
                decision making and real-time business monitoring. Also, we
                implemented a world class Value Monitoring and Benchmarking
                Modelling Data Bank.
              </p>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                Prime Atlantic
              </h3>
              <p className="text-gray-600 text-sm">
                Microsoft Office 365 was deployed to aid easy collaboration and
                we automated their Business Processes. Also, we built a custom
                SharePoint intranet portal and our HCM solution, HCMatrix was
                implemented and successfully increased work efficiency.
              </p>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">NLNG</h3>
              <p className="text-gray-600 text-sm">
                We successfully implemented Microsoft Business Intelligence
                solution (Power BI) which greatly enhanced decision making and
                real-time business monitoring.
              </p>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">MRS </h3>
              <p className="text-gray-600 text-sm">
                We provided supoort services for the deployment of the Microsoft
                Business Intelligence solution (Power BI) which greatly enhanced
                decision making and real-time business monitoring.
              </p>
            </div>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
