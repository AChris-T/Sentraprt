import React from 'react';

export default function CourseCard({ children, height }) {
  return (
    <div
      className={`relative ${height} bg-white shadow-lg px-2 h-full md:h- cursor-pointer py-8 w-full border-2 border-teal-500 group`}
    >
      {children}

      <span className="absolute top-0 left-0 w-3 h-3 border-2 border-teal-500 bg-white -translate-x-1/2 -translate-y-1/2 transition-all group-hover:rounded-full"></span>
      <span className="absolute top-0 right-0 w-3 h-3 border-2 border-teal-500 bg-white translate-x-1/2 -translate-y-1/2 transition-all group-hover:rounded-full"></span>
      <span className="absolute bottom-0 left-0 w-3 h-3 border-2 border-teal-500 bg-white -translate-x-1/2 translate-y-1/2 transition-all group-hover:rounded-full"></span>
      <span className="absolute bottom-0 right-0 w-3 h-3 border-2 border-teal-500 bg-white translate-x-1/2 translate-y-1/2 transition-all group-hover:rounded-full"></span>
    </div>
  );
}
