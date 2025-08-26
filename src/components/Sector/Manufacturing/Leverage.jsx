import React from 'react';

export default function Leverage() {
  return (
    <div className="w-full h-full flex flex-col gap-5  justify-center  mt-10">
      <h3 className="text-2xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Manufacturers Are Pressed To Bring Products To Market Faster While
        Maintaining Production Efficiencies.
      </h3>
      <h3>
        Manufacturers are leveraging the cloud to facilitate collaboration and
        coordination among geographically dispersed engineers, functions, and
        business units. Currently, the IT challenges for most maufacturing
        inustries are providing the ability to rapidly deploy a secure/private
        cloud environmnet and providing seamless access to cloud resourses
        (private and public)
      </h3>
      <h3 className=" font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Snapnet Solutions:
      </h3>
      <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
        <li>
          <b>Microsoft Azure </b>
          supports agile software development with continuous DevOps processes
          and automation applied to open source, PaaS, IaaS, SaaS, big data,
          machine learning and IoT.
        </li>
        <li>
          <b>Azure Site Recovery </b>
          is an underlying technology of Operations Management Suite, helps
          protect the critical applications running in your datacenter with
          flexible recovery plans and low RPOs/RTOs.
        </li>
        <li>
          <b>Dynamics 365 </b>
          is an ERP + CRM tool that lets you effectively manage your customers,
          optimize your operations, win new customers and build profitable
          long-term relationships
        </li>
      </ul>
    </div>
  );
}
