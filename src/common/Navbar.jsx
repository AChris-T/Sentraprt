import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { DropDownIcon, MobileNavLinks } from '../assets/icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSectorDropdownOpen, setIsSectorDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', isMain: true },
    { href: '/about-us', label: 'About' },
    {
      label: 'Products & Services',
      isDropdown: true,
      dropdownItems: [
        { href: '/erp', label: 'ERP' },
        { href: '/it-outsourcing', label: 'IT-Outsourcing' },
        {
          href: '/robotic-process-automation-rpa',
          label: 'Robotic Process Automation (RPA)',
        },
        { href: 'data-analytics', label: 'Data-Analytics' },
        { href: 'cloud-solutions', label: 'Cloud Solutions' },
        { href: 'cybersecurity-solutions', label: 'Cybersecurity Solutions' },
        { href: 'software-development', label: 'Software Development' },
      ],
    },
    {
      label: 'Sectors',
      isDropdown: true,
      dropdownItems: [
        { href: '/finance-solutions', label: 'Financial Industry' },
        { href: '/oil-gas', label: 'Oil and Gas' },
        { href: '/public-sector', label: 'Public Sector' },
        { href: '/manufacturing', label: 'Manufacturing' },
        { href: '/others', label: 'Other Sectors' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsProductDropdownOpen(false);
        setIsSectorDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleProductDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProductDropdownOpen(!isProductDropdownOpen);
    setIsSectorDropdownOpen(false);
  };

  const toggleSectorDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSectorDropdownOpen(!isSectorDropdownOpen);
    setIsProductDropdownOpen(false);
  };

  const renderNavLink = (link, index) => {
    if (link.isDropdown) {
      const isOpen =
        link.label === 'Products & Services'
          ? isProductDropdownOpen
          : isSectorDropdownOpen;
      const toggleFunction =
        link.label === 'Products & Services'
          ? toggleProductDropdown
          : toggleSectorDropdown;

      return (
        <div key={index} className="relative font-work-sans dropdown-container">
          <button
            onClick={toggleFunction}
            className="flex cursor-pointer items-center text-black transition-colors"
          >
            {link.label}
            <DropDownIcon isOpen={isOpen} />
          </button>

          {isOpen && (
            <div className="absolute top-full flex flex-col gap-1 left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              {link.dropdownItems.map((item, i) => (
                <NavLink
                  onClick={() => {
                    setIsProductDropdownOpen(false);
                    setIsSectorDropdownOpen(false);
                  }}
                  key={i}
                  to={item.href}
                  className="block cursor-pointer px-4 py-2 text-[#151035] hover:bg-gray-300"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        key={index}
        to={link.href}
        onClick={() => {
          setIsProductDropdownOpen(false);
          setIsSectorDropdownOpen(false);
        }}
        className={`${
          link.isMain ? 'font-medium' : ''
        } hover:text-gray-700 text-[#151035] transition-colors`}
      >
        {link.label}
      </NavLink>
    );
  };

  const renderMobileNavLink = (link, index) => {
    if (link.isDropdown) {
      const isOpen =
        link.label === 'Products & Services'
          ? isProductDropdownOpen
          : isSectorDropdownOpen;
      const toggleFunction =
        link.label === 'Products & Services'
          ? toggleProductDropdown
          : toggleSectorDropdown;

      return (
        <div key={index}>
          <button
            onClick={toggleFunction}
            className="flex items-center cursor-pointer justify-between w-full text-left text-gray-700 hover:text-gray-600"
          >
            {link.label}
            <DropDownIcon isOpen={isOpen} />
          </button>
          {isOpen && (
            <div className="ml-4 mt-2 space-y-2">
              {link.dropdownItems.map((item, i) => (
                <NavLink
                  onClick={() => {
                    setIsProductDropdownOpen(false);
                    setIsSectorDropdownOpen(false);
                  }}
                  key={i}
                  to={item.href}
                  className="block cursor-pointer text-[#151035] hover:text-gray-600"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        key={index}
        to={link.href}
        onClick={() => {
          setIsProductDropdownOpen(false);
          setIsSectorDropdownOpen(false);
        }}
        className="block text-gray-700 hover:text-gray-600 transition-colors"
      >
        {link.label}
      </NavLink>
    );
  };

  return (
    <nav
      className={`fixed font-work-sans py-3 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F8FB] backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <img src={logo} alt="logo" className="w-40 h-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 font-medium text-[#151035]">
            {navLinks.map((link, i) => renderNavLink(link, i))}
          </div>

          <div className="hidden lg:block">
            <NavLink
              to="/contact-us"
              className="bg-[#048383] text-white px-6 py-2 rounded-md font-medium hover:bg-[#25b4b4] transition-colors"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#048383] focus:outline-none"
            >
              <MobileNavLinks isOpen={isOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {navLinks.map((link, i) => renderMobileNavLink(link, i))}
              <div className="pt-4">
                <NavLink
                  to="/contact-us"
                  className="w-full bg-[#048383] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#25b4b4] transition-colors"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
