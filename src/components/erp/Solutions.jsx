import React from 'react';
import Solutioncards from '../../ui/Cards/Solutioncards';
import dynamic from '../../assets/images/dynamic.png';
import dynamiccentral from '../../assets/images/businesscentral.png';
import micro from '../../assets/images/Dynamics-finance.png';
import Nav365 from '../../assets/images/customer365.png';
import Net from '../../assets/images/microsoft-power-platform-logo.png';
import SAP from '../../assets/images/automation.png';
import Bi from '../../assets/images/PowerBi.jpeg';
import Zoho from '../../assets/images/sap.png';
import { NavLink } from 'react-router';
import { ArrowIcon } from '../../assets/icons';

export default function Solutions() {
  return (
    <div className="px-4 max-w-7xl mx-auto md:px-10 flex font-work-sans flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-2xl md:text-4xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Key Solutions{' '}
      </h3>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 lg:grid-cols-2">
        <Solutioncards>
          <div className="flex items-start gap-1 ">
            <img
              src={dynamiccentral}
              alt=""
              className="w-30 hidden md:flex h-30"
            />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                Dynamics 365 Business Central
              </h3>
              <p className="text-gray-600 text-sm">
                Dynamics 365 Business Central is a cloud-based business
                application platform that combines components of CRM and ERP,
                along with productivity applications and artificial intelligence
                tools for maximum flexibility and extensibility.
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
          <div className="flex items-start gap-1 ">
            <img src={dynamic} alt="" className="w-40 hidden md:flex h-40" />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                Dynamics 365 Human Resources
              </h3>
              <p className="text-gray-600 text-sm">
                Dynamics 365 Human Resources is a cloud-based application that
                helps organizations manage and optimize HR programs, including
                employee benefits, compensation, leave and absence, compliance,
                and workforce management to improve productivity and employee
                experience.
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
              <h3 className="text-xl font-semibold text-[#151035]">
                Dynamics 365 finance{' '}
              </h3>
              <p className="text-gray-600 text-sm">
                Dynamics 365 Finance is a cloud-based ERP solution that helps
                organizations automate and modernize their global financial
                operations. It provides tools for financial reporting,
                budgeting, accounts payable and receivable, and real-time
                analytics to support strategic decision-making and ensure
                compliance.
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
              <h3 className="text-xl font-semibold text-[#151035]">
                Power Apps
              </h3>
              <p className="text-gray-600 text-sm">
                Power Apps is a low-code development platform from Microsoft
                that enables users to quickly build custom applications for web
                and mobile. It allows businesses to digitize processes, connect
                to data sources, and extend functionality with ease, empowering
                both developers and non-technical users to create powerful
                business solutions.
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
              <h3 className="text-xl font-semibold text-[#151035]">
                Dynamics 365 Customer Service{' '}
              </h3>
              <p className="text-gray-600 text-sm">
                Dynamics 365 Customer Service is a cloud-based solution that
                helps organizations deliver personalized, efficient, and
                consistent support across multiple channels. It provides tools
                for case management, knowledge base, and AI-driven insights to
                improve customer satisfaction and agent productivity.
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
            <img src={Bi} alt="" className="w-30 hidden md:flex h-30 mt-3" />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                Power Bi{' '}
              </h3>
              <p className="text-gray-600 text-sm">
                Power BI is Microsoft’s business analytics tool that enables
                users to visualize data, share insights, and make data-driven
                decisions. It connects to a wide range of data sources,
                transforms raw information into interactive dashboards and
                reports, and provides real-time analytics to empower smarter
                decision-making across organizations.
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
          <div className="flex  items-start gap-5 md:gap-5 ">
            <img src={SAP} alt="" className="w-40 hidden md:flex h-40 mt-3" />
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                Power Automation{' '}
              </h3>
              <p className="text-gray-600 text-sm">
                Power Automate is a cloud-based service from Microsoft that
                enables users to create automated workflows between apps and
                services. It helps streamline repetitive tasks, integrate
                systems, and improve productivity by connecting data, sending
                notifications, collecting information, and automating business
                processes with little to no code.
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
            <div className="w-[400px]  hidden md:flex">
              <img
                src={Zoho}
                alt=""
                className="w-full object-contain  h-full mt-3"
              />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                SAP Business ByDesign
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
            <div className="w-[400px]  hidden md:flex">
              <img
                src={Zoho}
                alt=""
                className="w-full object-contain  h-full mt-3"
              />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
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
            <div className="w-[400px]  hidden md:flex">
              <img
                src={Zoho}
                alt=""
                className="w-full object-contain  h-full mt-3"
              />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <h3 className="text-xl font-semibold text-[#151035]">
                SAP S/4 HANA
              </h3>
              <p className="text-gray-600 text-sm">
                SAP S/4HANA is an intelligent, integrated enterprise resource
                planning (ERP) system designed to run on the SAP HANA in-memory
                database. It helps organizations manage business processes in
                real time, including finance, supply chain, manufacturing,
                sales, procurement, and more, enabling faster decision-making
                and greater business agility.
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
