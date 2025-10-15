'use client';
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-gray-800">
      
      <section className="relative h-[55vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/product10.jpg"
          alt="Stone Marble Hero"
          fill
          className="object-cover brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Awais Marble & Chakwal Stone
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            Transforming Spaces with Premium Marble & Natural Stones
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Awais Marble & Chakwal Stone Showroom, we provide premium marble, granite, and natural stones
          to enhance residential and commercial spaces. Our products combine timeless elegance,
          durability, and craftsmanship — helping you create sophisticated interiors and exteriors.
        </p>
      </section>

      
      <section className="py-16 px-6 bg-gray-50 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Location</h2>

      
        <p className="text-gray-600 text-lg mb-8">
          Industrial Area, New Chak Madad Khan, Near Railway Phatak, Westridge II, Rawalpindi
        </p>

        
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-3xl h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/marble-images/product34.jpg"
              alt="Showroom Exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>

      
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps?q=33.6252,73.0186&z=15&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px', maxWidth: '900px' }}
            loading="lazy"
          ></iframe>
        </div>
      </section>


      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h2>

        <div className="text-gray-600 text-lg space-y-3">
          <p>📱 WhatsApp: <span className="font-semibold">0345-5005530</span></p>
          <p>📞 Call: <span className="font-semibold">0346-5330086</span> (Ifthikhar Ahmed)</p>
          <p>📞 Call: <span className="font-semibold">0300-5341424</span> (Arshad Mehmood)</p>
        </div>

        <p className="text-gray-600 text-lg mt-6 mb-8">
          For inquiries, orders, or consultations, feel free to contact our team.
        </p>

        <a
          href="https://wa.me/923455005530"
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
