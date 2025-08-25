import React from 'react';
import Solutioncards from '../../ui/Cards/Solutioncards';

export default function CyberSolutions() {
  return (
    <div className="px-4 md:px-10 flex flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-4xl md:text-7xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Solutions
      </h3>
      <p className="max-w-4xl text-center text-gray-600">
        At Snapnet, we are committed to providing reliable, cutting-edge cyber
        security solutions to protect your business from evolving cyber threats.
        With our partnership spanning leading OEMs and technical expertise
        across all the branches of cyber security, we are sure to grant you a
        99.9% level of security in your space. Let us be your trusted partner in
        securing your digital assets, ensuring your peace of mind, and allowing
        you to focus on what matters most – the success of your business.
      </p>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Microsoft Azure{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Microsoft Azure provides confidentiality, integrity, and
              availability of customer data, while also enabling transparent
              accountability. Take advantage of its wide array of security tools
              and capabilities.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Check Point{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Check Point Software Technologies Ltd., is the largest pure-play
              security vendor globally, providing industry-leading solutions,
              and protecting customers from cyberattacks with an unmatched catch
              rate of malware and other types of attacks.
            </p>
          </div>
        </Solutioncards>{' '}
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">SOPOHS </h3>
            <p className="text-gray-600 text-sm">
              IT security products have become as complex as the networks
              they’re trying to secure. Sophos develops products for
              communication endpoint, encryption, network security, email
              security, mobile security and unified threat management.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">Thales </h3>
            <p className="text-gray-600 text-sm">
              Thales provides your organization with security and trust in data
              wherever data is created, shared or stored without impacting
              business agility. From Encryption, Key Management, Digital
              Payments and Cloud Security.
            </p>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
