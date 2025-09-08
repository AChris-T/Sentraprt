import React from 'react';
import CourseCard from '../../ui/Cards/CourseCard';
import dataAl from '../../assets/images/file-transfer.gif';
import gear from '../../assets/images/artificial-intelligence.gif';
import direction from '../../assets/images/enterprise.gif';

export default function DataProduct() {
  return (
    <div className="bg-[#F5F8FB] px-4 md:px-10 flex flex-col justify-center items-center gap-5 py-10">
      <h3 className="text-2xl md:text-4xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
        Our Products
      </h3>
      <div className="grid max-w-7xl mx-auto lg:grid-cols-3 gap-5 mt-10 ">
        <CourseCard height={'h-full'}>
          <div>
            <img src={dataAl} alt="" className="w-20 h-20 " />
            <div className="px-4 flex flex-col gap-3">
              <h3 className="text-[#151035] text-2xl font-medium">
                Data Modelling{' '}
              </h3>
              <p className="text-gray-600">
                It is a representation of the data structures in a table for a
                company's database and is a very powerful expression of the
                company's business requirements.
              </p>
            </div>
          </div>
        </CourseCard>
        <CourseCard>
          <div>
            <img src={gear} alt="" className="w-20 h-20 " />
            <div className="px-4 flex flex-col gap-3">
              <h3 className="text-[#151035] text-2xl font-medium">
                Machine Learning (AI){' '}
              </h3>
              <p className="text-gray-600">
                It is an application of artificial intelligence (AI) that
                provides systems the ability to automatically learn and improve
                from experience without being explicitly programmed.
              </p>
            </div>
          </div>
        </CourseCard>
        <CourseCard>
          <div>
            <img src={direction} alt="" className="w-20 h-20 " />
            <div className="px-4 flex flex-col gap-3">
              <h3 className="text-[#151035] text-2xl font-medium">
                Enterprise Reporting
              </h3>
              <p className="text-gray-600">
                It is a business intelligence tool that transforms your
                enterprise-wide data into knowledge for effective measurement
                and management – contributing to better business decisions
              </p>
            </div>
          </div>
        </CourseCard>
      </div>
    </div>
  );
}
