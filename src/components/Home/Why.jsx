import React, { useEffect, useRef } from 'react';
import { CommerIcon } from '../../assets/icons';
import { NavLink } from 'react-router';

export default function Why() {
  const scrollContainerRef = useRef(null);
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechFlow Solutions',
      testimonial:
        'Sentraport transformed our business operations completely. Their solutions helped us increase productivity by 40% within the first quarter.',
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      company: 'InnovateCorp',
      testimonial:
        "The cloud solutions provided by Sentraport are exceptional. We've seen a 60% reduction in IT costs while improving performance.",
    },
    {
      name: 'Emily Rodriguez',
      position: 'Operations Director',
      company: 'Global Dynamics',
      testimonial:
        'Working with Sentraport has been a game-changer. Their business intelligence tools gave us insights we never had before.',
    },
    {
      name: 'David Thompson',
      position: 'VP of Technology',
      company: 'FutureTech Inc',
      testimonial:
        "Sentraport's expertise in digital transformation helped us stay ahead of the competition. Our customer satisfaction scores increased by 35%.",
    },
    {
      name: 'Lisa Wang',
      position: 'IT Manager',
      company: 'Smart Solutions Ltd',
      testimonial:
        'The team at Sentraport is incredibly professional and knowledgeable. They delivered our project on time and exceeded expectations.',
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    let isHovered = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && scrollContainer) {
          if (
            scrollContainer.scrollLeft >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            // Reset to beginning when reaching the end
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 3000); // Scroll every 3 seconds
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full py-20 bg-[#F5F8FB]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-bold text-[#151035] mb-4">
            Why Organizations love us?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have
            to say about working with Sentraport.
          </p>
        </div>

        {/* Horizontal Scrollable Testimonials */}
        <div className="relative">
          {/* Scroll Indicators */}
          <div className="w-full  flex justify-center items-center mb-6">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-[#048383] rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-[#25b4b4] rounded-full animate-pulse"
                style={{ animationDelay: '0.5s' }}
              ></div>
              <div
                className="w-2 h-2 bg-[#048383] rounded-full animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory mx-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              maxWidth: 'calc(300px * 3 + 2rem)',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#048383] hover:border-[#25b4b4] min-w-[300px] max-w-[300px] flex-shrink-0 snap-start"
              >
                <div className="mb-4">
                  <CommerIcon />
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  "{testimonial.testimonial}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-[#151035] text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#048383] text-xs font-medium">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <NavLink
            to={'/contact-us'}
            className="bg-[#048383] text-white px-8 py-3 rounded-md font-medium hover:bg-[#25b4b4] cursor-pointer transition-colors text-lg"
          >
            Join Our Success Stories
          </NavLink>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
