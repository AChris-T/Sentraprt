import React from 'react';
import Solutioncards from '../../ui/Cards/Solutioncards';

export default function Approach() {
  return (
    <div className="px-4 md:px-10 flex flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-4xl md:text-7xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Approach
      </h3>
      <p className="max-w-4xl text-center text-gray-600">
        We conduct detailed approach assessment and painstaking examination of
        your network and environment, with our services below. And with this, we
        are helped to understand your exact areas of security needs and proffer
        the right solution appropriately coupled with professional
        recommendations/advice.
      </p>
      <div className="grid mt-10 gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Comprehensive Risk Assessment{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              We begin by conducting a thorough assessment of your
              organization's existing security measures, potential
              vulnerabilities, and critical assets. This step allows us to
              tailor a cyber security strategy and policies that align with your
              specific needs.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Tailored Security Solutions{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              We believe in delivering bespoke cyber security solutions, as
              every business has unique requirements. Our expert team of
              security professionals will work closely with you to develop a
              tailored plan, procedures and policies that address your specific
              risks and challenges after our assessment
            </p>
          </div>
        </Solutioncards>{' '}
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Regulatory Compliance{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Assisting your organization in meeting industry-specific and legal
              cyber security compliance requirements.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              End User Security Awareness Training{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Your employees are the first line of defense against
              cyber-attacks. We provide comprehensive training to raise
              awareness about cyber threats, phishing, and social engineering,
              empowering your staff to make informed and intelligent security
              decisions.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Vulnerability Assessment and Penetration Testing{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              Our experts Identify vulnerabilities within your systems across
              all levels e.g., applications, networks etc. through various means
              e.g. simulated cyber-attacks, helping you stay one step ahead of
              potential threats by proffering remediation where necessary.
            </p>
          </div>
        </Solutioncards>
        <Solutioncards>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-2xl font-semibold text-[#151035]">
              Corporate Espionage Prevention/Insider Threat Mitigation:{' '}
            </h3>
            <p className="text-gray-600 text-sm">
              We listen to hear and comprehend the problems from the
              owner/leaders of strategic departments or lines of business. We
              use our knowledge from training (locally and offshore) and
              consulting for enterprise environments to provide you with the
              proper fit so you can achieve your business goals.
            </p>
          </div>
        </Solutioncards>
      </div>
    </div>
  );
}
