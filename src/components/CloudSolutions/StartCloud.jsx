import Lottie from 'lottie-react';
import Business from '../../assets/images/About.json';
import Computer from '../../assets/images/BusinessGrowth.json';

export default function StartCloud() {
  return (
    <div className="px-4  max-w-7xl mx-auto md:px-10 w-full flex font-work-sans  flex-col  justify-center items-center gap-20 py-10">
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
          <h3 className="font-bold text-[#151035]">POLYCOM</h3>
          <h3 className="text-4xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
            Get Started With Video Collaboration Solutions
          </h3>
          <h3 className="  transition-all duration-700 ease-in-out transform delay-100 ">
            Polycom is passionate about helping all businesses grow. They enable
            that growth by helping those businesses better communicate and
            collaborate with their employees, partners, and customers—anytime,
            anywhere and on any device. Polycom uses the most advanced audio,
            video, and content-sharing technologies to create solutions that are
            powerful, affordable and easy to use. Those solutions address a
            range of communication activities, from telephony and video
            conferencing, to telepresence and unified communications.
          </h3>
          <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
            <li>Reduce travel costs </li>
            <li>Improve productivity</li>
            <li>Speed problem-solving</li>
            <li>Improve customer service</li>
            <li>Shorten sales cycles</li>
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
          <h3 className="font-bold text-[#151035]">ZEBRA TECHNOLOGY</h3>
          <h3 className="text-4xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
            Enterprise-Level Data Capture And Automatic Identification Solutions
          </h3>
          <h3 className="  transition-all duration-700 ease-in-out transform delay-100 ">
            NetSuite is engineered to scale with businesses as they grow and to
            streamline mission-critical processes. In turn, this allows them to
            continue focusing on what they do best and to react to new market
            opportunities swiftly and confidently. From advanced financials to
            supply chain management to billing and beyond, NetSuite ERP gives
            companies the tools they need to accelerate growth and drive
            innovation.Zebra empowers those on the front line in retail,
            healthcare, transportation and logistics, manufacturing and other
            industries to achieve a performance edge – an edge that translates
            to delighted customers, good patient outcomes and superior business
            results. As the pioneer at the edge of the enterprise, our products,
            software, services, analytics and solutions are used to
            intelligently connect your people, assets and data. With decades of
            industry experience, we design with front-line users and workplaces
            in mind, giving you the best-action guidance needed to optimize
            in-motion operations and make business-critical decision
          </h3>
          <ul className="list-disc flex flex-col gap-2 mt-2 list-inside">
            <li>Location and Sensing </li>
            <li>RFID</li>
            <li>Barcode Printing</li>
            <li>Card Printing</li>
            <li>Data Capture</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
