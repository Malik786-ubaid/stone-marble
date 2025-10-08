"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Chakwal Stone", path: "/chakwal-stone" },
    { name: "Singhara", path: "/singhara" },
    { name: "Interior Gallery", path: "/interior-gallery" },
    { name: "Projects", path: "/projects" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
        <h1 className="text-2xl font-bold text-gray-800">Nafees Chakwal Stone</h1>

      
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`font-semibold transition ${
                  pathname === item.path
                    ? "text-yellow-600 border-b-2 border-yellow-600"
                    : "text-gray-700 hover:text-yellow-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        
        <div
          className="md:hidden cursor-pointer text-2xl font-bold text-gray-800"
          onClick={toggleMenu}
        >
          &#9776;
        </div>
      </div>

    
      {isOpen && (
        <ul className="md:hidden bg-white flex flex-col space-y-2 p-4 shadow-md">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block font-semibold transition ${
                  pathname === item.path
                    ? "text-yellow-600 border-b-2 border-yellow-600"
                    : "text-gray-700 hover:text-yellow-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
