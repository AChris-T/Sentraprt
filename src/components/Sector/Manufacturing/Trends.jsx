import React, { useState } from 'react';
import Machine from './Machine';
import WorkPlace from './WorkPlace';
import Leverage from './Leverage';
import BigData from './BigData';

export default function Trends() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      label: 'Machine-to-Machine Communication',
      content: <Machine />,
    },
    {
      id: 'tab2',
      label: 'Workplace Mobility',
      content: <WorkPlace />,
    },
    {
      id: 'tab3',
      label: 'Leverage Cloud',
      content: <Leverage />,
    },
    {
      id: 'tab4',
      label: 'Leverage Big Data',
      content: <BigData />,
    },
  ];

  return (
    <div className="px-4 max-w-7xl mx-auto  md:px-10 w-full flex font-work-sans flex-col justify-center items-center gap-20 py-10">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-2xl md:text-4xl text-center font-bold text-[#151035] transition-all duration-700 ease-in-out transform">
          IT Technologies And Trends In Manufacturing{' '}
        </h3>
        <p className="text-gray-600 text-center">
          Our solutions help organisation drive digital transformation to
          identify new opportunities, it also helps organisation’s reduce cost,
          helps in decision making. The results of digital transformation in an
          organisation is improving busisness effeciences, make better business
          decisions, empowering your employess and transforming your products.
          With our cloud solutions we are able to solve industry specific
          problems.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex w-full justify-between border-b border-gray-300 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-6 py-3 text-sm md:text-base font-medium transition-colors duration-200
                ${
                  activeTab === tab.id
                    ? 'text-[#151035] font-bold '
                    : 'text-gray-600 hover:text-[#151035]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="px-2 md:px-4 mt-4">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}
