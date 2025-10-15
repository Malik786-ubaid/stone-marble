"use client";
import Image from "next/image";

export default function InteriorPage() {
  const interiors = [
    { id: 1, name: "Modern Bedroom Design", desc: "Elegant bedroom with marble accents and warm lighting." },
    { id: 2, name: "Marble Wall Design", desc: "Stylish marble feature wall adding luxury to any space." },
    { id: 3, name: "Luxury Living Room", desc: "Spacious living area with premium marble flooring and decor." },
    { id: 4, name: "Bathroom Interior", desc: "Sleek bathroom with marble tiles and minimalistic fixtures." },
    { id: 5, name: "Hotel Lobby Interior", desc: "Grand marble-finished lobby that exudes sophistication." },
    { id: 6, name: "Outdoor Stone Patio", desc: "Beautiful outdoor sitting area designed with natural stone." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Interior Design Gallery
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore our interior design inspirations crafted with premium marble and stone.
        From modern bedrooms to luxurious living spaces — we bring elegance to every detail.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {interiors.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="overflow-hidden">
              <Image
                src={`/interior/interior${item.id}.jpeg`}
                alt={item.name}
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
