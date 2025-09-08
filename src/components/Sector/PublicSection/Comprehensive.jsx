import React, { useState } from 'react';
import Management from './Management';
import Security from './Security';
import CostPerformance from './CostPerformance';
import Migration from './Migration';

export default function Comprehensive() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      label: 'Cognitive Service Management',
      content: <Management />,
    },
    {
      id: 'tab2',
      label: 'Security & Compliance',
      content: <Security />,
    },
    {
      id: 'tab3',
      label: 'Cost & Performance',
      content: <CostPerformance />,
    },
    {
      id: 'tab4',
      label: 'Automation & Cloud Migration',
      content: <Migration />,
    },
  ];

  return (
    <div className="px-4  max-w-7xl mx-auto md:px-10 w-full flex font-work-sans flex-col justify-center items-center gap-20 py-10">
      <div className="flex flex-col gap-5 items-center text-center">
        <h3 className="text-2xl md:text-4xl text-center font-bold text-[#151035] transition-all duration-700 ease-in-out transform">
          Ensure Success For Your Agency With A Comprehensive Approach{' '}
        </h3>
        <p className="text-gray-600">
          Our solutions help organisation drive digital transformation to
          identify new opportunities, it also helps organisation’s reduce cost,
          helps in decision making.The results of digital transformation in an
          organisation is improving busisness effeciences, make better business
          decisions, empowering your employess and transforming your products.
          With our cloud solutions we are able to solve industry specific
          problems in the public sector.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between w-full border-b border-gray-300 overflow-x-auto scrollbar-hide">
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
