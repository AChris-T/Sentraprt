import React from 'react';
import ERPHero from '../components/erp/ERPHero';
import Product from '../components/erp/Product';
import Solutions from '../components/erp/Solutions';
import Improvement from '../components/erp/Improvement';

export default function Erp() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <ERPHero />
      <Product />
      <Solutions />
      <Improvement />
    </div>
  );
}
