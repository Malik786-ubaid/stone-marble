'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExteriorPage() {

  const exteriors = [
    { id: 7, name: "Modern House Facade", category: "White" },
    { id: 8, name: "Outdoor Patio Design", category: "Grey" },
    { id: 9, name: "Marble Entrance Pathway", category: "Golden" },
    { id: 10, name: "Garden Stone Walls", category: "Brown" },
    { id: 11, name: "Villa Exterior", category: "White" },
    { id: 12, name: "Swimming Pool Area", category: "Grey" },
  ];

  
  const categories = ["All", "White", "Grey", "Black", "Red", "Brown", "Golden"];
  const [selectedCategory, setSelectedCategory] = useState("All");


  const filteredExteriors =
    selectedCategory === "All"
      ? exteriors
      : exteriors.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-4 sm:px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-10">
        Exterior Design Gallery
      </h1>

    
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 sm:px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-yellow-600 text-white border-yellow-600"
                : "bg-white text-gray-700 hover:bg-yellow-100 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {filteredExteriors.map((item) => (
          <Link key={item.id} href={`/image/${item.id}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
              <Image
                src={`/exterior/exterior${item.id}.jpeg`}
                alt={item.name}
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">{item.category} Exterior</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {filteredExteriors.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No exterior designs found for this category.
        </p>
      )}
    </main>
  );
}
