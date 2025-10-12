"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Stones", path: "/stones" },
    { name: "Interior", path: "/interior" },
    { name: "Exterior", path: "/exterior" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
          Nafees Chakwal Stone
        </h1>

        {/* Nav Links */}
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`font-semibold text-lg transition-all duration-300 ${
                  pathname === item.path
                    ? "text-yellow-600 border-b-2 border-yellow-600 pb-1"
                    : "text-gray-700 hover:text-yellow-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
