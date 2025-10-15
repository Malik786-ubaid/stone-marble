"use client";
import Image from "next/image";

export default function ExteriorPage() {
  const exteriors = [
    { id: 1, name: "Modern House Facade", desc: "Contemporary marble facade giving the home a stunning exterior look." },
    { id: 2, name: "Outdoor Patio Design", desc: "Luxurious outdoor sitting area designed with natural stone flooring." },
    { id: 3, name: "Marble Entrance Pathway", desc: "Elegant entrance pathway made with polished marble stones." },
    { id: 4, name: "Garden Stone Walls", desc: "Natural stone walls adding texture and beauty to the garden." },
    { id: 5, name: "Villa Exterior", desc: "A grand villa exterior finished with premium marble for a timeless appeal." },
    { id: 6, name: "Swimming Pool Area", desc: "Stylish marble surroundings enhancing the outdoor pool ambiance." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 sm:pt-28 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10">
        Exterior Design Gallery
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
        Discover elegant exterior designs made with natural marble and stone.
        Perfect for villas, pathways, gardens, and outdoor living spaces.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {exteriors.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="overflow-hidden">
              <Image
                src={`/exterior/exterior${item.id}.jpeg`}
                alt={item.name}
                width={400}
                height={300}
                className="object-cover w-full h-60 sm:h-64 hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
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

