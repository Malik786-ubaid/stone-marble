'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
<<<<<<< HEAD
        {/* Updated logo/text */}
        <div className="text-2xl font-bold text-gray-900">Islamabad Chakwal Stone</div>

=======
        <div className="text-2xl font-bold text-gray-900">Islamabad Chakwal Stone</div>
>>>>>>> a3aa92174b0f1c9b0936cf10e4d7b8b9e604c528
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`text-gray-700 hover:text-gray-900 font-semibold ${
                  pathname === item.path ? "text-yellow-600" : ""
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
