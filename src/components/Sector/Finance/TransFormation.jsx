import React, { useState } from 'react';
import CustomerDriven from './CustomerDriven';
import DataDriven from './DataDriven';
import SecurityData from './SecurityData';
import ContinuesData from './ContinuesData';

export default function TransFormation() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      label: 'Customer-Driven Demands',
      content: <CustomerDriven />,
    },
    {
      id: 'tab2',
      label: 'Data-Driven Customer Interactions',
      content: <DataDriven />,
    },
    {
      id: 'tab3',
      label: 'Security & Regulatory Compliance',
      content: <SecurityData />,
    },
    {
      id: 'tab4',
      label: 'Continuous Cost Reduction',
      content: <ContinuesData />,
    },
  ];

  return (
    <div className="px-4  max-w-7xl mx-auto md:px-10 w-full flex font-work-sans flex-col justify-center items-center gap-20 py-10">
      <h3 className="text-2xl md:text-4xl text-center font-bold text-[#151035] transition-all duration-700 ease-in-out transform">
        Digital Banking Transformation Drivers
      </h3>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex w-full border-b border-gray-300 overflow-x-auto scrollbar-hide">
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
