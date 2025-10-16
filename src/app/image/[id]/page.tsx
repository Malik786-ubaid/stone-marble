'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const imageDetails = [
  { id: 20, title: 'Golden Stone', category: 'Stone', description: 'Golden marble adds a warm and elegant look to any interior or exterior design.', src: '/marble-images/product20.jpeg' },
  { id: 21, title: 'Silky Grey Stone', category: 'Stone', description: 'Silky Grey stone provides a smooth, sophisticated look ideal for modern spaces.', src: '/marble-images/product21.jpeg' },
  { id: 22, title: 'Kohat Stone', category: 'Stone', description: 'Kohat stone has a natural earthy tone that blends beautifully with rustic designs.', src: '/marble-images/product22.jpeg' },
  { id: 23, title: 'Cream Stone', category: 'Stone', description: 'Cream marble creates a subtle and timeless ambiance for both walls and floors.', src: '/marble-images/product23.jpeg' },
  { id: 24, title: 'Sitla Stone', category: 'Stone', description: 'Sitla stone offers a vibrant red hue that brings life to exteriors and pathways.', src: '/marble-images/product24.jpeg' },
  { id: 25, title: 'Lal Stone', category: 'Stone', description: 'Lal marble is a striking red stone perfect for bold and elegant interior accents.', src: '/marble-images/product25.jpeg' },
  { id: 26, title: 'Crystal Grey Stone', category: 'Stone', description: 'Crystal Grey stone reflects natural light beautifully, enhancing any modern décor.', src: '/marble-images/product26.jpeg' },
  { id: 27, title: 'Crystal White Stone', category: 'Stone', description: 'Crystal White marble provides a luxurious and clean finish for premium interiors.', src: '/marble-images/product27.jpeg' },
  { id: 28, title: 'Black & Gold Split Stone', category: 'Stone', description: 'This stunning contrast of black and gold brings richness and depth to any wall.', src: '/marble-images/product28.jpeg' },
  { id: 29, title: 'Swat Golden Split Stone', category: 'Stone', description: 'Swat Golden Split adds a textured and premium look to modern facades.', src: '/marble-images/product29.jpeg' },
  { id: 30, title: 'Swat Silky Split Stone', category: 'Stone', description: 'A sleek and smooth texture that blends beautifully with minimalist designs.', src: '/marble-images/product30.jpeg' },
  { id: 31, title: 'Charbagh White Split Stone', category: 'Stone', description: 'Elegant white split stone with a fine surface for clean and fresh aesthetics.', src: '/marble-images/product31.jpeg' },
  { id: 32, title: 'Black Granite Split Stone', category: 'Stone', description: 'Strong and durable, ideal for outdoor and feature wall installations.', src: '/marble-images/product32.jpeg' },
  { id: 33, title: 'Singhara Stone', category: 'Stone', description: 'Natural brown marble with rustic character, perfect for earthy interiors.', src: '/marble-images/product33.jpeg' },
];

export default function ImageDetailPage() {
  const params = useParams();
  const [showContact, setShowContact] = useState(false);
  const id = Number(params.id);
  const image = imageDetails.find((img) => img.id === id);

  if (!image) return <div className="p-10 text-center text-xl">Image not found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-[1000px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Image (Square & No Gaps) */}
        <div className="w-full md:w-1/2 aspect-square relative">
          <Image
            src={image.src}
            alt={image.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">{image.title}</h1>
          <p className="text-gray-700 mb-4">{image.description}</p>
          <p className="text-sm text-gray-500 mb-5">Category: {image.category}</p>

          {!showContact ? (
            <button
              onClick={() => setShowContact(true)}
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition"
            >
              Contact Us
            </button>
          ) : (
            <div className="bg-gray-50 border rounded-lg p-4 mt-2">
              <h2 className="text-lg font-semibold mb-2">📞 Contact Details</h2>
              <p className="text-gray-700">📍 Westridge II, Rawalpindi</p>
              <p className="text-gray-700">📱 0345-5005530</p>
              <p className="text-gray-700">📞 0346-5330086</p>
              <a
                href="https://wa.me/923455005530"
                target="_blank"
                className="inline-block bg-green-600 text-white px-5 py-2 mt-3 rounded-lg hover:bg-green-700"
              >
                WhatsApp Us
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
