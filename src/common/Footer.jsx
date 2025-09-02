import React from 'react';
import logo from '../assets/images/logo.png';
import {
  FacebookIcon,
  Linkedin,
  TwitterIcon,
  YoutubeIcon,
} from '../assets/icons';
import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <div className="font-work-sans">
      <div className="grid py-20  items-start gap-10 text-gray-600 px-4 md:px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <img
            src={logo}
            alt="Logo"
            width={200}
            height={50}
            className=" h-auto"
          />
          <h3>
            Fastest growing ICT Consulting company in Nigeria with strategic
            focus in developing Industry specific solutions, Business consulting
            and Systems Integration.
          </h3>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <h3 className="text-lg text-[#151035] font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <NavLink href={'/'}>About Us</NavLink>
            <NavLink href={'/'}>
              Snapnet Blog Insight into the World Computing
            </NavLink>
            <NavLink href={'/'}>Support</NavLink>
            <NavLink href={'/'}>Contact Us</NavLink>
            <NavLink href={'/'}>Privacy Policy</NavLink>
            <NavLink href={'/'}>
              Integrated Quality and Information Security Policy
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <h3 className="text-lg text-[#151035] font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-2">
            <h3>
             No 14, Pat Olatunji St,Command Road, Ipaja, Lagos.
            </h3>
            <h3>info@snapnetsolutions.com</h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <h3 className="text-lg text-[#151035] font-semibold">Telephone</h3>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-[#151035] font-semibold">
              Lagos Office:
            </h3>
            <h3>+234 909 000 4652</h3>
            <h3>+234 818 777 8801</h3>
            <h3>+234 818 777 8803 (Voice & Whatsapp)</h3>
            <h3>+02013305010</h3>
            <h3 className="text-lg text-[#151035] font-semibold">
              Abuja Office:
            </h3>
            <h3>+234 818 777 8802.</h3>
            <h3>+234 818 777 8803 (Voice & Whatsapp)</h3>
            <h3>02013305010</h3>

            <h3 className="text-lg text-[#151035] font-semibold">
              Customer Support:
            </h3>
            <h3>0818 681 7777 (Voice & Whatsapp)</h3>
            <h3>0818 777 8803 (Voice & Whatsapp)</h3>
          </div>
        </div>
      </div>
      <div className="border-t flex flex-col gap-8 md:flex-row items-center justify-between border-gray-200 py-5 px-4 md:px-10">
        <h3 className="text-[#151035] text-center">
          © 2025 Sentraport Nigeria Limited. All Rights Reserved. Terms &
          Privacy.
        </h3>
        <div className="flex gap-5 items-center">
          <FacebookIcon />
          <TwitterIcon />
          <YoutubeIcon />
          <Linkedin />
        </div>
      </div>
    </div>
  );
}
