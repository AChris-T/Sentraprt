import React from 'react';
import Solutioncards from '../../ui/Cards/Solutioncards';

export default function Solutions() {
  return (
    <div className="px-4  max-w-7xl mx-auto md:px-10 flex flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-2xl md:text-4xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Key Solutions
      </h3>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">
              Microsoft Office 365{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Microsoft Office 365 is a cloud-based enterprise-grade
              productivity suite that includes Microsoft Office and other
              services, such as email and collaboration, so you can access your
              Office from anywhere and anytime.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">
              Enterprise Mobility + Security
            </h3>
            <p className="text-gray-600 text-sm">
              It is a cloud-based offering from Microsoft which combines
              valuable standalone solutions in a highly discounted suite, giving
              users extra control over their company's data.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">Azure </h3>
            <p className="text-gray-600 text-sm">
              It is a cloud computing service created by Microsoft for building,
              testing, deploying, and managing applications and services through
              a global network of Microsoft-managed data centers.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]"> Zebra </h3>
            <p className="text-gray-600 text-sm">
              Zebra builds enterprise-level data capture and automatic
              identification solutions that provide businesses with operational
              visibility.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]"> Power BI</h3>
            <p className="text-gray-600 text-sm">
              Power BI is a suite of business analytics tools to analyze data
              and share insights and provides a 360-degree view for business
              users with their most important metrics in one place, updated in
              real time, and available on all of their devices.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">
              Microsoft’s 365
            </h3>
            <p className="text-gray-600 text-sm">
              It is the latest in Microsoft’s integrated business solution on
              cloud, combining Enterprise Resource Planning (ERP) and Customer
              Relationship Management (CRM), alongside additional features such
              as Microsoft Flow and Microsoft PowerApps.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">Polycom </h3>
            <p className="text-gray-600 text-sm">
              Polycom is the leader in video, voice, and content solutions,
              building several technology solutions that can help your
              organization unleash the power of team collaboration.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">
              {' '}
              HCMatrix{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              HCMatrix is a human capital management system integrated,
              cloud-based solution that is amazingly easy to use, affordable,
              easy to deploy and ideal for large corporations and SME’s.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">
              MasterRecruit
            </h3>
            <p className="text-gray-600 text-sm">
              MasterRecruit was developed by Snapnet Nigeria Limited because of
              the strong desire to make the recruitment process transparent with
              a real emphasis on the overall quality of hire and the hiring
              process.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">
              Share Point
            </h3>
            <p className="text-gray-600 text-sm">
              It is a browser-based collaboration platform that supports a wide
              variety of projects, from simple document management solutions to
              networking portals and Internet sites.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">Sophos</h3>
            <p className="text-gray-600 text-sm">
              Sophos develops IT security products for communication endpoint,
              encryption, network security, email security, mobile security and
              unified threat management.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold text-[#151035]">
              Huawei Cloud
            </h3>
            <p className="text-gray-600 text-sm">
              Huawei Cloud provides cutting-edge IaaS, PaaS, and SaaS solutions,
              empowering organizations with advanced analytics, AI capabilities,
              and global compliance certifications. Accelerate your digital
              transformation and drive business growth with Huawei Cloud's
              secure and scalable cloud services
            </p>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
