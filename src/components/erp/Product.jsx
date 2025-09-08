import React from 'react';
import CourseCard from '../../ui/Cards/CourseCard';
import dataAl from '../../assets/images/agreement.gif';
import gear from '../../assets/images/clipboard-gear.gif';
import direction from '../../assets/images/directions.gif';

export default function Product() {
  return (
    <div className="bg-[#F5F8FB] px-4 md:px-10   py-10">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-5">
        <h3 className="text-2xl md:text-4xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
          Our Products
        </h3>
        <p className="px-4 lg:px-[180px] text-gray-600 text-center">
          Enterprise resource planning systems are an asset for almost any
          organization. Our solutions make your business run smoother by
          unifying and protecting your information; automating processes and
          reports; managing important information through total systems
          integration; and providing easy views into trends. With these and many
          more capabilities, your day-to-day operations and long-term planning
          becomes easier and faster
        </p>
        <div className="grid lg:grid-cols-3 gap-5 mt-10 ">
          <CourseCard height={'h-full'}>
            <div>
              <img src={dataAl} alt="" className="w-20 h-20 " />
              <div className="px-4 flex flex-col gap-3">
                <h3 className="text-[#151035] text-xl font-medium">
                  Business Process Modelling{' '}
                </h3>
                <p className="text-gray-600">
                  We provide a graphical representation of your company's
                  business processes or workflows, as a means of identifying
                  potential improvements.
                </p>
              </div>
            </div>
          </CourseCard>
          <CourseCard>
            <div>
              <img src={gear} alt="" className="w-20 h-20 " />
              <div className="px-4 flex flex-col gap-3">
                <h3 className="text-[#151035] text-xl font-medium">
                  Business Process Optimization
                </h3>
                <p className="text-gray-600">
                  We offer specialized methods to enhance organizational
                  efficiency through streamlining their operations with Business
                  Process Automation techniques.
                </p>
              </div>
            </div>
          </CourseCard>
          <CourseCard>
            <div>
              <img src={direction} alt="" className="w-20 h-20 " />
              <div className="px-4 flex flex-col gap-3">
                <h3 className="text-[#151035] text-xl font-medium">ERP</h3>
                <p className="text-gray-600">
                  Integrate business processes and allow quick decision making
                  and customer engagement in real-time backed by adequate
                  data—from marketing, sales, service, operations, to finance.
                </p>
              </div>
            </div>
          </CourseCard>
        </div>
      </div>
    </div>
  );
}
