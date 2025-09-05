import CourseCard from '../../ui/Cards/CourseCard';
import Cloud from '../../assets/images/clouds.gif';
import gear from '../../assets/images/security-breach.gif';
import dataBackup from '../../assets/images/recovery.gif';
import networking from '../../assets/images/global-connection.gif';
import HelpDesk from '../../assets/images/helpdesk.gif';

export default function ITServices() {
  return (
    <div className="bg-[#F5F8FB] px-4 md:px-10   py-10">
      <div className=" flex flex-col justify-center items-center gap-5  max-w-7xl mx-auto ">
        <h3 className="text-4xl md:text-7xl  font-bold text-[#151035] transition-all duration-700 ease-in-out transform ">
          Our Services
        </h3>
        <div className="grid lg:grid-cols-3 gap-5 mt-10 ">
          <CourseCard height={'h-full'}>
            <div>
              <img src={Cloud} alt="" className="w-20 h-20 " />
              <div className="px-4 flex flex-col gap-3">
                <h3 className="text-[#151035] text-2xl font-medium">
                  Cloud Services
                </h3>
                <p className="text-gray-600">
                  Embrace the power of the cloud with our cloud computing
                  solutions. Whether it's migration to the cloud, managing cloud
                  infrastructure, or ensuring data security, we've got you
                  covered.
                </p>
              </div>
            </div>
          </CourseCard>
          <CourseCard>
            <div>
              <img src={gear} alt="" className="w-20 h-20 " />
              <div className="px-4 flex flex-col gap-3">
                <h3 className="text-[#151035] text-2xl font-medium">
                  Cybersecurity{' '}
                </h3>
                <p className="text-gray-600">
                  Safeguard your business against cyber threats with our
                  comprehensive cybersecurity services. We proactively monitor
                  and defend your systems, keeping your sensitive data safe from
                  potential breaches.
                </p>
              </div>
            </div>
          </CourseCard>
          <CourseCard>
            <div>
              <img src={dataBackup} alt="" className="w-20 h-20 " />
              <div className="px-4 flex flex-col gap-3">
                <h3 className="text-[#151035] text-2xl font-medium">
                  Data Backup and Recovery
                </h3>
                <p className="text-gray-600">
                  Integrate business processes and allow quick decision making
                  and customer engagement in real-time backed by adequate
                  data—from marketing, sales, service, operations, to finance.
                </p>
              </div>
            </div>
          </CourseCard>
          <CourseCard>
            <div>
              <img src={networking} alt="" className="w-20 h-20 " />
              <div className="px-4 flex flex-col gap-3">
                <h3 className="text-[#151035] text-2xl font-medium">
                  Network Management
                </h3>
                <p className="text-gray-600">
                  Our experts can design, implement, and maintain a robust and
                  secure network infrastructure tailored to your specific
                  business needs. We focus on optimizing performance, ensuring
                  data security, and streamlining communication across your
                  organization.
                </p>
              </div>
            </div>
          </CourseCard>
          <CourseCard>
            <div>
              <img src={HelpDesk} alt="" className="w-20 h-20 " />
              <div className="px-4 flex flex-col gap-3">
                <h3 className="text-[#151035] text-2xl font-medium">
                  Help Desk Support
                </h3>
                <p className="text-gray-600">
                  Our dedicated support team is available round the clock to
                  resolve any IT-related issues your employees may encounter. We
                  ensure seamless operations and quick problem resolution to
                  minimize downtime.
                </p>
              </div>
            </div>
          </CourseCard>
        </div>
      </div>
    </div>
  );
}
