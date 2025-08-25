import React from 'react';
import Solutioncards from '../../ui/Cards/Solutioncards';
import Lottie from 'lottie-react';
import Business from '../../assets/images/team.json';
import Computer from '../../assets/images/computer.json';
import Aiauto from '../../assets/images/AIAutomation.json';

export default function SoftSolutions() {
  return (
    <div className="px-4 md:px-10 flex flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-4xl md:text-7xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Key Solutions
      </h3>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">HCMatrix </h3>
            <p className="text-gray-600 text-sm">
              HCMatrix is a human capital management system integrated,
              cloud-based solution that is amazingly easy to use, affordable,
              easy to deploy and ideal for large corporations and SME’s..
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Bid Automate
            </h3>
            <p className="text-gray-600 text-sm">
              Bid Automate is a bid management system that automates and
              oversees the entire bidding process from internal requisition to
              external bid invitations and submissions, panel review, and
              completion certificates for an organization.
            </p>
          </div>
        </Solutioncards>{' '}
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]"> HCMatrix</h3>
            <p className="text-gray-600 text-sm">
              HCMatrix Recruit was developed by Snapnet Nigeria Limited because
              of the strong desire to make the recruitment process transparent
              with a real emphasis on the overall quality of hire and the hiring
              process.
            </p>
          </div>
        </Solutioncards>
      </div>

      <div className="px-4 mt-10 md:px-10 w-full flex font-work-sans  flex-col  justify-center items-center gap-20 py-10">
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
            <h3 className="font-bold text-[#151035]">HCMATRIX RECRUIT</h3>
            <h3 className="text-4xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              Get The Perfect Match For The Job!
            </h3>
            <h3 className="  transition-all duration-700 ease-in-out transform delay-100 ">
              HCMatrix Recruit is a Nigerian product, developed in Nigeria by
              Snapnet Nigeria Limited It was developed because of the strong
              desire to make the recruitment process not only more measured but
              more defined and transparent with a real emphasis on the overall
              quality of hire and the hiring process. we are really focused on
              helping Recruiters and Hiring Managers collaborate better to
              improve Candidate and Process Quality. We want to be the first
              company who really delve in and properly measure Hiring Quality.
              Lots of work has been done on a cost per hire and time to hire and
              we feel like Hiring Quality has been left behind – well, by
              everyone except us
            </h3>
            <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
              <li>Talent Pool</li>
              <li>Job Posting</li>
              <li>Applicant Tracking</li>
              <li>Resume Viewer/Keyword Filter</li>
              <li>Applicant Self-Service</li>
              <li>Application Duplication Detection</li>
              <li>Computer Based Test/E-interviews</li>
              <li>Productive Workflow</li>
              <li>Executive Dashboard</li>
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
              NetSuite is engineered to scale with businesses as they grow and
              to streamline mission-critical processes. In turn, this allows
              them to continue focusing on what they do best and to react to new
              market opportunities swiftly and confidently. From advanced
              financials to supply chain management to billing and beyond,
              NetSuite ERP gives companies the tools they need to accelerate
              growth and drive innovation.
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
        <div className="w-full flex">
          <div className="hidden lg:flex flex-1 justify-center">
            {' '}
            <Lottie
              animationData={Aiauto}
              loop={true}
              autoplay={true}
              className="w-full h-96"
            />
          </div>
          <div className="flex-1 gap-3 flex flex-col">
            <h3 className="font-bold text-[#151035]">BID AUTOMATE</h3>
            <h3 className="text-4xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              Automate Bid Processes from Start to Finish
            </h3>
            <h3 className="  transition-all duration-700 ease-in-out transform delay-100 ">
              Bid Management has been a manual process in about 80% of
              organizations in Nigeria. From requisitions to requests for
              proposals, vendor selection, and bid review, it has been a process
              of several bound documents and files moving from one examiner to
              the other. There has been a need for change as
            </h3>
            <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
              <li>Manual bid processes are slow and prone to human error</li>
              <li>
                The vendor selection process and subsequent search are difficult
                in manual systems
              </li>
              <li>
                It is difficult to certify the transparency of the bid process.
              </li>
            </ul>
            <h3 className="  transition-all duration-700 ease-in-out transform delay-100 ">
              BidAutomate is a bid management solution that fully automates the
              bid process from start to finish. BidAutomate is a cloud based
              solution that can be accessed remotely and securely, and provides
              a database for vendor registration and subsequent search.
            </h3>
            <h3>With Bid automate you can</h3>
            <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
              <li>Automate documentation of bid processes.</li>
              <li>Ensure bid transparency through role-based access.</li>
              <li>Track all bid progress & status. </li>
              <li>
                Setup a bid evaluation team, evaluation criteria and metrics.
              </li>
              <li>Access bid library/history.</li>
              <li>View Evaluation reports</li>
            </ul>
            <h3>Let’s show you how you can optimize your bid process.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
