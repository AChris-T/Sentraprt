'use client';
import React, { useEffect, useState } from 'react';
import mat from '../../assets/images/mat.png';
import { NavLink } from 'react-router';

export default function Hero() {
  const headlines = [
    'Working smart is the new cool.',
    'Take your business into the future. ',
    'Be miles ahead of the competition. ',
    'We are transforming every industry. ',
  ];

  const subTexts = [
    'Strengthen your workforce seamlessly and empower your employees to work smarter by increasing team productivity and real-time collaboration. We provide business solution that enable organizations maximize value and manage complex changes throughout their business.',
    'With about 93 percent of organizations today using at least one cloud-based service, we provide the best cloud solutions to take your business into the future. Our team of experts can provide your organisation with futuristic IT solutions to achieve excellence and ensure that your business stays in the lead. ',
    "In today's competitive marketplace, there is need to deliver high quality services and products efficiently. Using our suite of business intelligence tools, stand out from the competition and give your customers what they are craving for. ",
    "We can help drive digital transformation in your business. This not only ensures your business stays relevant and competitive but transforms your customer's experience, drives data-based insights, encourages collaboration across departments, increases productivity and saves costs. ",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [slideDirection, setSlideDirection] = useState('up');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('down');
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setSlideDirection('up');
        setFade(true); // fade in
      }, 400); // wait for fade out before switching
    }, 8000); // 8 seconds (reduced from 10 for better engagement)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center mb-10 md:mb-40 items-center text-center max-w-7xl mx-auto px-4 gap-2 pt-5 pb-16 md:py-16 font-work-sans">
      <div className="max-w-3xl flex-col gap-8 flex">
        <div className="relative z-40 overflow-hidden">
          <h3
            className={`text-4xl md:text-7xl font-bold text-[#151035] transition-all duration-700 ease-in-out transform ${
              fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${
              slideDirection === 'up' ? 'animate-slideUp' : 'animate-slideDown'
            }`}
            style={{
              transform: fade
                ? 'translateY(0) scale(1)'
                : 'translateY(20px) scale(0.95)',
            }}
          >
            {headlines[index]}
          </h3>
        </div>
        <div className="relative overflow-hidden">
          <h3
            className={`md:text-lg text-sm text-gray-600 transition-all duration-700 ease-in-out transform delay-100 ${
              fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transform: fade
                ? 'translateY(0) scale(1)'
                : 'translateY(15px) scale(0.98)',
            }}
          >
            {subTexts[index]}
          </h3>
        </div>
        <div className="flex items-center justify-center space-x-2 mt-4">
          {headlines.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-[#048383]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex   justify-center md:items-center w-full items-start">
        <div className="flex gap-4 items-center w-full mt-6 justify-center">
          <NavLink
            to={'contact-us'}
            className="bg-[#048383] text-white px-5 md:px-10 py-2 rounded-md font-medium hover:bg-[#25b4b4] cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </NavLink>
          <NavLink
            to={'contact-us'}
            className="border-1 z-40 border-gray-200 text-black px-5 md:px-10 py-2 rounded-md font-medium hover:bg-[#048383] hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Call an Agent
          </NavLink>
        </div>
        <div className="absolute right-32">
          <img
            src={mat}
            alt=""
            className="-mt-30 object-cover hidden lg:block h-[300px] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-20px);
            opacity: 0;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.7s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-in;
        }
      `}</style>
    </div>
  );
}
