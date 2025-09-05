import React from 'react';
import Solutioncards from '../../ui/Cards/Solutioncards';

export default function KeySolutions() {
  return (
    <div className="px-4  max-w-7xl mx-auto md:px-10 flex flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-4xl md:text-7xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Key Solutions
      </h3>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">Power BI </h3>
            <p className="text-gray-600 text-sm">
              Power BI is a suite of business analytics tools to analyze data
              and share insights and provides a 360-degree view for business
              users with their most important metrics in one place, updated in
              real time, and available on all of their devices.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Cell Analytics
            </h3>
            <p className="text-gray-600 text-sm">
              Cell Analytics™ is a Management Information System (MIS) dashboard
              that provides real time financial analytics for financial
              institutions, where users can view a whole set of predefined
              metrics and KPIs.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Azure Machine Learning{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Azure Machine Learning is a cloud predictive analytics service
              that makes it possible to quickly create and deploy predictive
              models as analytics solutions.
            </p>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
