import React from 'react';
import Solutioncards from '../../ui/Cards/Solutioncards';
import dynamic from '../../assets/images/dynamic.png';
import micro from '../../assets/images/365.png';
import Nav365 from '../../assets/images/nav365.png';
import Net from '../../assets/images/net.png';
import SAP from '../../assets/images/sap.png';
import Zoho from '../../assets/images/zoho.png';
import { NavLink } from 'react-router';
import { ArrowIcon } from '../../assets/icons';

export default function Solutions() {
  return (
    <div className="px-4 md:px-10 flex font-work-sans flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Key Solutions{' '}
      </h3>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 lg:grid-cols-2">
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <img src={dynamic} alt="" className="w-40 hidden md:flex h-40" />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                Dynamics 365
              </h3>
              <p className="text-gray-600 text-sm">
                Dynamics 365 is a cloud-based business application platform that
                combines components of CRM and ERP, along with productivity
                applications and artificial intelligence tools for maximum
                flexibility and extensibility.
              </p>
              <NavLink
                to={'/erp'}
                className="flex items-center gap-2 hover:underline  font-medium"
              >
                Learn More{' '}
                <h3 className="">
                  <ArrowIcon />
                </h3>
              </NavLink>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex  items-start gap-5 md:gap-10 ">
            <img
              src={Nav365}
              alt=""
              className="w-36 hidden md:flex h-36 mt-3"
            />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                Microsoft Dynamics NAV{' '}
              </h3>
              <p className="text-gray-600 text-sm">
                Microsoft Dynamics NAV is an enterprise resource planning (ERP)
                software suite for midsize organizations. The system offers
                specialized functionality for manufacturing, distribution,
                government, retail, and other industries
              </p>
              <NavLink
                to={'/erp'}
                className="flex items-center gap-2 hover:underline  font-medium"
              >
                Learn More{' '}
                <h3 className="">
                  <ArrowIcon />
                </h3>
              </NavLink>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex  items-start gap-5 md:gap-10 ">
            <img src={micro} alt="" className="w-36 hidden md:flex h-36 mt-3" />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                Microsoft Dynamics AX{' '}
              </h3>
              <p className="text-gray-600 text-sm">
                Microsoft Dynamics AX is an integrated, multilingual and
                multicurrency enterprise resource planning (ERP) software that
                streamlines financial, customer relationship, and supply chain
                processes.
              </p>
              <NavLink
                to={'/erp'}
                className="flex items-center gap-2 hover:underline  font-medium"
              >
                Learn More{' '}
                <h3 className="">
                  <ArrowIcon />
                </h3>
              </NavLink>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex  items-start gap-5 md:gap-10 ">
            <img src={Net} alt="" className="w-36 hidden md:flex h-36 mt-3" />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                Microsoft Dynamics AX{' '}
              </h3>
              <p className="text-gray-600 text-sm">
                Microsoft Dynamics AX is an integrated, multilingual and
                multicurrency enterprise resource planning (ERP) software that
                streamlines financial, customer relationship, and supply chain
                processes.
              </p>
              <NavLink
                to={'/erp'}
                className="flex items-center gap-2 hover:underline  font-medium"
              >
                Learn More{' '}
                <h3 className="">
                  <ArrowIcon />
                </h3>
              </NavLink>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex  items-start gap-5 md:gap-10 ">
            <img src={SAP} alt="" className="w-30 hidden md:flex h-30 mt-3" />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                SAP Business ByDesign{' '}
              </h3>
              <p className="text-gray-600 text-sm">
                As a top SAP Implementation partner in Nigeria, we provide this
                single cloud ERP solution for fast-growing, mid-market
                businesses to scale and compete without the complexity and cost.
                Connect every function across your company to time-tested best
                practices and in-depth analytics.
              </p>
              <NavLink
                to={'/erp'}
                className="flex items-center gap-2 hover:underline  font-medium"
              >
                Learn More{' '}
                <h3 className="">
                  <ArrowIcon />
                </h3>
              </NavLink>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex  items-start gap-5 md:gap-14 ">
            <img src={SAP} alt="" className="w-30 hidden md:flex h-30 mt-3" />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                SAP Business One
              </h3>
              <p className="text-gray-600 text-sm">
                Gain greater control over your business or subsidiary with SAP
                Business One. This small business management software connects
                and streamlines your processes and grows with you. Streamline
                key processes, gain greater insight into your business, and make
                decisions based on real-time information so you can drive
                profitable growth.
              </p>
              <NavLink
                to={'/erp'}
                className="flex items-center gap-2 hover:underline  font-medium"
              >
                Learn More{' '}
                <h3 className="">
                  <ArrowIcon />
                </h3>
              </NavLink>
            </div>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex  items-start gap-5 md:gap-14 ">
            <div className="w-[400px] h-36 hidden md:flex">
              <img
                src={Zoho}
                alt=""
                className="w-full object-contain  h-full mt-3"
              />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-2xl font-semibold text-[#151035]">
                Zoho One
              </h3>
              <p className="text-gray-600 text-sm">
                Automate business process across your organization with Zoho
                One. Experience an advanced toolbox that offers sales and
                marketing, customer service, finance and business intelligence
                aplications on one platform
              </p>
              <NavLink
                to={'/erp'}
                className="flex items-center gap-2 hover:underline  font-medium"
              >
                Learn More{' '}
                <h3 className="">
                  <ArrowIcon />
                </h3>
              </NavLink>
            </div>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
