import React from 'react';
import Card from '../../ui/Cards/Card';

export default function Mission() {
  return (
    <div className="w-full font-work-sans flex items-center flex-col justify-center py-5 md:py-20 ">
      <h3 className="text-3xl w-full lg:text-7xl  font-bold max-w-4xl items-center text-center text-[#151035]">
        More About Sentraport.
      </h3>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <Card>
          <h3 className="text-[#151035] text-2xl md:text-3xl font-semibold ">
            Our Mission
          </h3>
          <p className="my-4">
            Our mission is to connect organizations to premium IT solutions that
            meet their specific needs.
          </p>
          <h3 className="text-[#151035] text-2xl md:text-3xl font-semibold ">
            What Makes Us Unique
          </h3>
          <p className="mt-3">
            What makes Snapnet unique is our ability to help clients overcome
            all business challenges. We help them enhance productivity by
            ensuring that vital business functions work faster, cheaper and
            better. And, our ability to conceptualize, design and implement new
            and expanded capabilities allows clients to transform legacy models
            to take their business to the next level. We form partnerships and
            strategic alliances with world-class organizations to expand our
            service offerings and deliver comprehensive solutions to our
            clients’ business and IT challenges
          </p>
        </Card>
        <Card>
          <h3 className="text-[#151035] text-2xl md:text-3xl font-semibold ">
            Our Strengths
          </h3>
          <p className="mt-3">
            To continually provide IT solutions to meet the needs of an
            ever-changing marketplace.
          </p>
          <h3 className="text-[#151035] text-lg font-medium mt-6">
            Core Values: (CITEE)
          </h3>
          <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
            <li>
              Fastest Growing Business Information Technology Company in Nigeria
            </li>
            <li>
              Foremost Microsoft Partner on Data Analytics and Business
              Intelligence
            </li>
            <li>Customer Focused and Support Oriented Organization</li>
            <li>
              Strategic partnerships and alliances with world-class
              organizations
            </li>
            <li>
              Offers the best flexible and affordable rates in the industry at
              desired quality
            </li>
          </ul>
        </Card>
        <Card>
          <h3 className="text-[#151035] text-2xl md:text-3xl font-semibold ">
            Our Vision
          </h3>
          <p className="mt-3">
            Our aim is to innovatively transform organizations with adept
            business solutions in the IT space.
          </p>
          <h3 className="text-[#151035] text-lg font-medium mt-6">
            Core Values: (CITEE)
          </h3>
          <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
            <li>Customer Centricity</li>
            <li>Integrity</li>
            <li>Teamwork</li>
            <li>Excellence</li>
            <li>Empathy</li>
          </ul>
        </Card>
        <Card>
          <div className="flex flex-col gap-4">
            <h3 className="text-[#151035] text-2xl md:text-3xl font-semibold ">
              Our Focus
            </h3>
            <p className="text-balck">
              Our focus is the provision of Business and Information Technology
              solutions to drive the operations of organizations for growth and
              effectiveness. We have assisted our various clients improve
              organizational performance by combining the innovative use of
              technology with extensive business process experience in a range
              of industries to deliver solutions that help our clients achieve
              rapid and sustainable business advantage. We’re driven by the
              passion to help our clients build stronger, more agile and more
              innovative businesses. We enable local and global enterprises to
              address a dual mandate: to make their current operations as
              efficient and cost-effective as possible, and to invest in
              innovation to unleash new potential across their organizations.
            </p>
          </div>
        </Card>
      </div>
      <div className="mt-20 flex w-full items-start flex-col gap-4 ">
        <h3 className="text-3xl font-bold text-start text-[#151035]">
          QUALITY POLICY STATEMENT
        </h3>
        <p className="mt-3">
          We are committed to delivering optimum services to our clients to
          drive growth and effectiveness. Hence, Snapnet Limited has adopted the
          principles therein for the quality management system (QMS)
          requirements. We are committed to:
        </p>
        <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
          <li>Ensuring all customer’s service requirements are fulfilled.</li>
          <li>
            Complying with all the requirements of the ISO 9001:2015, and all
            applicable statutory and regulatory requirements.
          </li>
          <li>
            Ensuring that all our employees understand the organization’s
            commitment to achieving and sustaining customers’ satisfaction.
          </li>
          <li>
            Optimally planning, establishing, documenting, monitoring, measuring
            and periodically reviewing our operational processes for continued
            suitability.
          </li>
          <li>
            Maintaining a qualified, professional and adequately equipped
            workforce through meritorious recruitments, appropriate appraisals
            and planned capacity development programmes.
          </li>
          <li>
            Implementing a risk-based operational and strategic management
            framework across all our organizational functions.
          </li>
          <li>
            Providing a framework for the continual improvement of the
            effectiveness of Snapnet’s quality management system, including the
            review of this policy and the corporate quality objectives
          </li>
        </ul>
      </div>
    </div>
  );
}
