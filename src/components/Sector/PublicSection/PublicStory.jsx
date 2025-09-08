import React from 'react';
import Solutioncards from '../../../ui/Cards/Solutioncards';

export default function PublicStory() {
  return (
    <div className="px-4  max-w-7xl mx-auto md:px-10 flex font-work-sans flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-2xl md:text-4xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Success Stories
      </h3>
      <p className="text-gray-600 max-w-5xl text-center ">
        Our solutions help organisation drive digital transformation to identify
        new opportunities, it also helps organisation’s reduce cost, helps in
        decision making. We have worked with various organizations and built
        positive success stories across the public sector.
      </p>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                Department of Petroleum Resources{' '}
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
                Federal Road Maintenance Agency
              </h3>
              <p className="text-gray-600 text-sm">
                Microsoft Office 365 was deployed to aid easy collaboration and
                we automated their Business Processes. Our HCM solution,
                HCMatrix was implemented and successfully increased work
                efficiently.
              </p>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                Nigeria LNG Limited
              </h3>
              <p className="text-gray-600 text-sm">
                We successful deployed a Microsoft Business Intelligence suite
                (Power BI) to enable users get quick and easy access to metrics
                reports for Whether they are in the office or on the go. This
                provided huge relief to key memebers of the organization.
              </p>
            </div>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
