"use client";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    "Golden",
    "Silky Grey",
    "Kohat Cream",
    "Sitara Red",
    "Lal Marble",
    "Crystal Grey",
    "Crystal White",
    "Sawat Golden Split",
    "Sawat Silky Split",
    "Charbagh White Split",
    "Black and Gold Split",
    "Black Granite Split",
    "Singhara Stone",
    "Sawat Cream Split",
    "Golden Shine Marble",
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-gray-900">
          Our Stone Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((name, index) => (
            <Link key={index} href={`/image/${20 + index}`}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer">
                <div className="overflow-hidden">
                  <Image
                    src={`/images/product${20 + index}.jpeg`}
                    alt={name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-60 sm:h-64 hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Premium quality {name} stone for interiors and exteriors.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
