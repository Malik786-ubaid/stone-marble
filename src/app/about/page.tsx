'use client';
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/product1.jpg"  // <-- yaha correct file name & extension
          alt="Stone Marble Hero"
          fill
          className="object-cover brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Stone Marble
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            Transforming Spaces with Premium Marble & Natural Stones
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Stone Marble, we provide premium marble, granite, and natural stones
          to enhance residential and commercial spaces. Our products combine
          timeless elegance, durability, and craftsmanship, helping you create
          sophisticated and beautiful interiors and exteriors.
        </p>
      </section>

      {/* Location Section */}
      <section className="py-16 px-6 bg-gray-50 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Location</h2>
        <p className="text-gray-600 text-lg">
          Malakwal City, near NADRA Office, District Mandi Bahauddin
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h2>
        <p className="text-gray-600 text-lg mb-4">
          Phone: <span className="font-semibold">+92 348 5874072</span>
        </p>
        <p className="text-gray-600 text-lg mb-6">
          For inquiries, orders, or consultation, feel free to reach out to our team.
        </p>
        <a
          href="https://wa.me/923485874072"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          💬 Chat on WhatsApp
        </a>
      </section>

    </div>
  );
}
