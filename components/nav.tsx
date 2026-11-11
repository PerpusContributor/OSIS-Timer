import React from 'react';

export default function Navigation() {
  return (
        <div className="h-[100px] flex justify-center">
          <nav className="flex gap-4 w3-animate-opacity items-center backdrop-blur-3xl bg-[#0a0a0a]/70 justify-center h-full">
            <button className="text-1xl poppins-regular hover:border-b-2 border-blue-700 h-full w-[100px]">Home</button>
            <button className="text-1xl poppins-regular hover:border-b-2 border-blue-700 h-full w-[100px]">Events</button>
            <button className="text-1xl poppins-regular hover:border-b-2 border-blue-700 h-full">Announcements</button>
          </nav>
      </div>
  )
}