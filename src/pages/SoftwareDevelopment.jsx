import Register from '../common/Register';
import SoftHero from '../components/software-development/SoftHero';
import SoftSolutions from '../components/software-development/SoftSolutions';

export default function SoftwareDevelopment() {
  return (
    <div className="mt-30 flex-col flex gap-10 item-center justify-center ">
      <SoftHero />
      <SoftSolutions />
      <div className="bg-[#F5F8FB]">
        <Register />
      </div>
    </div>
  );
}
