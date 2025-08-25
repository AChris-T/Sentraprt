import React from 'react';
import DataHero from '../components/DataAnalytics/DataHero';
import DataProduct from '../components/DataAnalytics/DataProduct';
import KeySolutions from '../components/DataAnalytics/KeySolutions';
import Register from '../common/Register';

export default function DataAnalytics() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <DataHero />
      <DataProduct />
      <KeySolutions />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
