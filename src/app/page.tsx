'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white">

    
      <section className="relative h-[75vh] sm:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/product2.jpg"
          alt="Stone Marble Hero"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40"></div>
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Premium Stone & Marble Collection
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Bringing natural beauty and timeless elegance to your spaces.
          </p>
        </div>
      </section>

    
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
          About Stone Marble
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          At Stone Marble, we specialize in providing premium quality marble,
          granite, and natural stones sourced from the finest quarries. Our
          products are designed to enhance both residential and commercial
          spaces with luxury, durability, and style.
        </p>
      </section>

  
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
            Our Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[2, 3, 4].map((num) => (
              <div
                key={num}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <Image
                  src={`/images/product${num}.jpg`}
                  alt={`Product ${num}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-56 sm:h-64"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Premium Marble {num}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Elegant and durable stone for interiors and exteriors.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
            Our Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[5, 6, 7].map((num) => (
              <div key={num} className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src={`/images/product${num}.jpg`}
                  alt={`Gallery ${num}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-56 sm:h-64 hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 sm:py-20 bg-gray-100 text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Have any questions or want to order premium marble? <br />
            Contact us directly on WhatsApp — we’d love to help!
          </p>

          <a
            href="https://wa.me/923485874072"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition"
          >
            💬 Chat on WhatsApp
          </a>

          <div className="mt-8 text-gray-700 text-sm sm:text-base">
            <p>📞 Phone: +92 3455005530</p>
          </div>
        </div>
      </section>

    </div>
  );
}
