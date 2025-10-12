"use client";
import { useState } from "react";
import Image from "next/image";

export default function StonesPage() {
  // ✅ Stone Data
  const stones = [
    { id: 20, name: "Golden", category: "Golden" },
    { id: 21, name: "Silky Grey", category: "Grey" },
    { id: 22, name: "Kohat", category: "Brown" },
    { id: 23, name: "Cream", category: "White" },
    { id: 24, name: "Sitla", category: "Red" },
    { id: 25, name: "Lal", category: "Red" },
    { id: 26, name: "Crystal Grey", category: "Grey" },
    { id: 27, name: "Crystal White", category: "White" },
    { id: 28, name: "Black & Gold Split", category: "Black" },
    { id: 29, name: "Swat Golden Split", category: "Golden" },
    { id: 30, name: "Swat Silky Split", category: "Grey" },
    { id: 31, name: "Charbagh White Split", category: "White" },
    { id: 32, name: "Black Granite Split", category: "Black" },
    { id: 33, name: "Singhara", category: "Brown" },
  ];

  // ✅ Categories
  const categories = ["All", "Golden", "Grey", "Black", "White", "Red", "Brown"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Filter Logic
  const filteredStones =
    selectedCategory === "All"
      ? stones
      : stones.filter((stone) => stone.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Our Stone Collection
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-yellow-600 text-white border-yellow-600"
                : "bg-white text-gray-700 hover:bg-yellow-100 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stones Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredStones.map((stone) => (
          <div
            key={stone.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <Image
              src={`/marble images/product${stone.id}.jpeg`}
              alt={stone.name}
              width={400}
              height={300}
              className="object-cover w-full h-64 hover:scale-110 transition-transform duration-500"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {stone.name}
              </h3>
              <p className="text-gray-500 text-sm">{stone.category} Stone</p>
            </div>
          </div>
        ))}
      </section>

      {/* Empty State */}
      {filteredStones.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No stones found for this category.
        </p>
      )}
    </main>
  );
}
