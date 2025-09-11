import React from 'react';
import Solutioncards from '../../ui/Cards/Solutioncards';

export default function BussinessOptimiztion() {
  const features = [
    {
      title: 'Continuous Process Improvement',
      description:
        'Drive continuous process optimisation, automate workflows, connect data with Microsoft 365, and respond to enquiries faster.',
    },
    {
      title: 'Supply Chain & Operations',
      description:
        'Transform manufacturing and supply chain operations with AI & IoT insights to maximize efficiency, quality, and profitability.',
    },
    {
      title: 'Business Process Consulting',
      description:
        'Get world-class consulting services and tailored enterprise solutions to improve efficiency and reduce costs.',
    },
    {
      title: 'Workflow Automation',
      description:
        'Automate and streamline your processes with Microsoft Dynamics for smarter, faster business operations.',
    },
  ];
  return (
    <div className="max-w-7xl mt-30 mx-auto font-work-sans flex flex-col gap-10">
      <div className="flex flex-col gap-2 items-center text-center justify-center  ">
        <h3 className="text-3xl md:text-4xl  font-bold max-w-4xl items-center text-center text-[#151035]">
          Business Process & Optimization{' '}
        </h3>
        <p className="max-w-4xl items-center text-center text-gray-600">
          We help enterprises improve efficiency, streamline workflows, and
          reduce operating costs with proven consulting strategies and Microsoft
          Dynamics solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <Solutioncards key={idx}>
            <h3 className="text-xl font-semibold text-[#151035]  mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 ">{feature.description}</p>
          </Solutioncards>
        ))}
      </div>
    </div>
  );
}
