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
        { href: '/products/consulting', label: 'Consulting Services' },
        { href: '/products/training', label: 'Training Programs' },
        { href: '/products/support', label: 'Technical Support' },
      ],
    },
    {
      label: 'Sectors',
      isDropdown: true,
      dropdownItems: [
        { href: '/sectors/healthcare', label: 'Healthcare' },
        { href: '/sectors/finance', label: 'Finance & Banking' },
        { href: '/sectors/education', label: 'Education' },
        { href: '/sectors/manufacturing', label: 'Manufacturing' },
        { href: '/sectors/retail', label: 'Retail & E-commerce' },
      ],
    },
    { href: '/support', label: 'Support' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/careers', label: 'Careers' },
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
            className="flex items-center text-black transition-colors"
          >
            {link.label}
            <DropDownIcon isOpen={isOpen} />
          </button>

          {isOpen && (
            <div className="absolute top-full flex flex-col gap-1 left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              {link.dropdownItems.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.href}
                  className="block px-4 py-2 text-[#151035] hover:bg-gray-300"
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
            className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-600"
          >
            {link.label}
            <DropDownIcon isOpen={isOpen} />
          </button>
          {isOpen && (
            <div className="ml-4 mt-2 space-y-2">
              {link.dropdownItems.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.href}
                  className="block text-[#151035] hover:text-gray-600"
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
            <button className="bg-[#048383] text-white px-6 py-2 rounded-md font-medium hover:bg-[#25b4b4] transition-colors">
              Get Started
            </button>
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
                <button className="w-full bg-[#048383] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#25b4b4] transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
