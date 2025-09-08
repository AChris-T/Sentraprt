import React from 'react';
import dataAl from '../../assets/images//pie-chart.gif';
import ERP from '../../assets/images/growth.gif';
import Drive from '../../assets/images/hard-drive.gif';
import Security from '../../assets/images/data-safety.gif';
import Software from '../../assets/images/software.gif';
import Training from '../../assets/images/training.gif';
import CourseCard from '../../ui/Cards/CourseCard';

export default function OurService() {
  return (
    <div className="md:mt-[-100px] max-w-7xl mx-auto font-work-sans flex flex-col gap-10">
      <div className="flex justify-center  ">
        <h3 className="text-3xl md:text-4xl  font-bold max-w-4xl items-center text-center text-[#151035]">
          Turn Your Passion into Success!
        </h3>
      </div>
      <div className="grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-6">
        <CourseCard>
          <div>
            <img src={ERP} alt="" className="w-16 h-16 mb-4 mx-2" />
            <div className="px-4 flex flex-col gap-3">
              <h3 className="text-[#151035] text-xl font-medium">ERP</h3>
              <p className="text-gray-600">
                Improve performance, enhance productivity and drive growth
                initiatives through automation of your business processes.
              </p>
            </div>
          </div>
        </CourseCard>
        <CourseCard>
          <div>
            <img src={dataAl} alt="" className="w-16 h-16 mb-4" />
            <div className="px-4 flex flex-col gap-3">
              <h3 className="text-[#151035] text-xl font-medium">
                Data Analytics & AI
              </h3>
              <p className="text-gray-600">
                Challenge your assumptions by turning information into insight
                with our latest cloud, big data and predictive analytics
                solutions.
              </p>
            </div>
          </div>
        </CourseCard>
        <CourseCard>
          <div>
            <img src={Drive} alt="" className="w-16 h-16 mb-4 mx-2" />
            <div className="px-4 flex flex-col gap-3">
              <h3 className="text-[#151035] text-xl font-medium">
                Managed Service Providers
              </h3>
              <p className="text-gray-600">
                Choose how you deploy your cloud and on-premises with consistent
                hybrid cloud capabilities using open source technologies.
              </p>
            </div>
          </div>
        </CourseCard>
        <CourseCard>
          <div>
            <img src={Security} alt="" className="w-16 h-16 mb-4 mx-2" />
            <div className="px-4 flex flex-col gap-3">
              <h3 className="text-[#151035] text-xl font-medium">
                Security Solutions{' '}
              </h3>
              <p className="text-gray-600">
                Our world class IT security solutions allows processes and
                procedures to be in place to ensure that all information is
                protected.
              </p>
            </div>
          </div>
        </CourseCard>
        <CourseCard>
          <div>
            <img src={Software} alt="" className="w-16 h-16 mb-4 mx-2" />
            <div className="px-4 flex flex-col gap-3">
              <h3 className="text-[#151035] text-xl font-medium">
                Software Development{' '}
              </h3>
              <p className="text-gray-600">
                Sentraport cutting-edge software development team have built
                bespoke solutions to improve efficiency, productivity, insight
                and profit.
              </p>
            </div>
          </div>
        </CourseCard>
        <CourseCard>
          <div className=" h-full">
            <img src={Training} alt="" className="w-16 h-16 mb-4 mx-2" />
            <div className="px-4 flex flex-col gap-3">
              <h3 className="text-[#151035] text-xl font-medium">Training</h3>
              <p className="text-gray-600">
                We provide immersive training and 24/7 support to ensure
                increased availability and high performance of all your IT
                operations.
              </p>
            </div>
          </div>
        </CourseCard>
      </div>
    </div>
  );
}
