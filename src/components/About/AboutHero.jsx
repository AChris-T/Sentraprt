import { ArrowIcon } from '../../assets/icons';
import Lottie from 'lottie-react';
import Isometric from '../../assets/images/Isometric.json';

export default function AboutHero() {
  return (
    <div className="flex bg-[#F5F8FB] px-4 md:px-10  flex-col gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="flex max-w-7xl mx-auto justify-between items-center">
        <div className="max-w-2xl flex-col gap-8 flex">
          <div className="relative overflow-hidden">
            <h3 className="text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
              About Us
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <h3 className="md:text-lg text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ">
              At Sentraport Solutions, a top 3 IT consulting firm in Nigeria, we
              specialize in developing bespoke IT solutions, offering software
              development, web design, cybersecurity, cloud computing, business
              consulting, and systems integration services. Our
              industry-specific solutions are tailored to the unique needs of
              discerning clients in the private and public sector, with offices
              in Lagos and Abuja."{' '}
            </h3>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="hover:bg-[#048383] group flex items-center gap-2 text-[#151035] hover:text-white px-5 md:px-10 py-3 rounded-md font-medium border-1 border-black hover:border-none cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Download Company Overview
              <h3 className="mt-1">
                <ArrowIcon className="group-hover:text-white text-black" />
              </h3>
            </button>
          </div>
        </div>
        <div className=" w-full  justify-center hidden lg:flex h-full">
          <Lottie
            animationData={Isometric}
            loop={true}
            autoplay={true}
            className="w-96 h-96"
          />
        </div>
      </div>
    </div>
  );
}
