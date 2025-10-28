"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Stones", path: "/stones" },
    { name: "Interior", path: "/interior" },
    { name: "Exterior", path: "/exterior" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
        <div className="text-xl md:text-2xl font-bold text-gray-900">
          Awais Marble & Chakwal Stone
        </div>

      
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`font-semibold transition-colors ${
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

    
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

    
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg font-medium ${
                    pathname === item.path
                      ? "text-yellow-600"
                      : "text-gray-700 hover:text-yellow-600"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
