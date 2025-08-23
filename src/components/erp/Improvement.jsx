import Lottie from 'lottie-react';
import Business from '../../assets/images/Business.json';
import Computer from '../../assets/images/computer.json';

export default function Improvement() {
  return (
    <div className="px-4 md:px-10 w-full flex font-work-sans  flex-col  justify-center items-center gap-20 py-10">
      <div className="w-full flex">
        <div className="hidden lg:flex flex-1 justify-center">
          {' '}
          <Lottie
            animationData={Business}
            loop={true}
            autoplay={true}
            className="w-full h-96"
          />
        </div>
        <div className="flex-1 gap-3 flex flex-col">
          <h3 className="font-bold text-[#151035]">MICROSOFT DYNAMICS ERP</h3>
          <h3 className="text-4xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
            Improve Your Business Performance Everyday
          </h3>
          <h3 className="  transition-all duration-700 ease-in-out transform delay-100 ">
            Your business needs people. Your people need powerful tools.
            Microsoft Dynamics ERP fits the needs of your organization.
            Microsoft Dynamics ERP helps drive business performance, measure
            financial effectiveness and make better business decisions that
            deliver immediate results on the top- and bottom-lines. That’s where
            we come in. The role-tailored experience of Microsoft Dynamics ERP
            gives your people access to information. The right information. And
            when your people can get their hands on data specific to their
            day-to-day jobs, they can be more productive. What makes it even
            better is the fact that Microsoft Dynamics ERP works like and with
            the Microsoft Office productivity tools they already use. So your
            team can get started quickly and become more efficient even faster
          </h3>
          <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
            <li>
              Increasing sales and profitability with better business insight
            </li>
            <li>Keeping up with demand without adding headcount</li>
            <li>
              Managing multiple lines of business, currencies, or multi-site
              locations
            </li>
            <li>
              Simplifying and securing processes to reduce data entry and risk
            </li>
            <li>
              Go beyond basic accounting with improved financials and operations
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-row-reverse">
        <div className="hidden lg:flex flex-1 justify-center">
          {' '}
          <Lottie
            animationData={Computer}
            loop={true}
            autoplay={true}
            className="w-full h-96"
          />
        </div>
        <div className="flex-1 gap-3 flex flex-col">
          <h3 className="font-bold text-[#151035]">NETSUITE</h3>
          <h3 className="text-4xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
            Accelerate Business Performance Using The World’s Most Deployed
            Cloud ERP Solution{' '}
          </h3>
          <h3 className="  transition-all duration-700 ease-in-out transform delay-100 ">
            NetSuite is engineered to scale with businesses as they grow and to
            streamline mission-critical processes. In turn, this allows them to
            continue focusing on what they do best and to react to new market
            opportunities swiftly and confidently. From advanced financials to
            supply chain management to billing and beyond, NetSuite ERP gives
            companies the tools they need to accelerate growth and drive
            innovation.
          </h3>
          <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
            <li>Financial Management </li>
            <li>Financial Planning</li>
            <li>Order Management</li>
            <li>Production Management</li>
            <li>Supply Chain Management </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
