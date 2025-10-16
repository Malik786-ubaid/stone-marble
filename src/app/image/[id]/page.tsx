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
  { id: 1, title: 'Modern Bedroom Design', category: 'Interior', description: 'Elegant bedroom with marble accents and warm lighting.', src: '/interior/interior1.jpeg' },
  { id: 2, title: 'Marble Wall Design', category: 'Interior', description: 'Stylish marble feature wall adding luxury to any space.', src: '/interior/interior2.jpeg' },
  { id: 3, title: 'Luxury Living Room', category: 'Interior', description: 'Spacious living area with premium marble flooring and decor.', src: '/interior/interior3.jpeg' },
  { id: 4, title: 'Bathroom Interior', category: 'Interior', description: 'Sleek bathroom with marble tiles and minimalistic fixtures.', src: '/interior/interior4.jpeg' },
  { id: 5, title: 'Hotel Lobby Interior', category: 'Interior', description: 'Grand marble-finished lobby that exudes sophistication.', src: '/interior/interior5.jpeg' },
  { id: 6, title: 'Outdoor Stone Patio', category: 'Interior', description: 'Beautiful outdoor sitting area designed with natural stone.', src: '/interior/interior6.jpeg' },
  { id: 7, title: 'Exterior Modern House', category: 'Exterior', description: 'Modern house exterior with premium stone finishes.', src: '/exterior/exterior1.jpeg' },
  { id: 8, title: 'Garden Stone Pathway', category: 'Exterior', description: 'Beautiful stone pathway for outdoor garden.', src: '/exterior/exterior2.jpeg' },
  { id: 9, title: 'Luxury Villa Exterior', category: 'Exterior', description: 'Elegant villa exterior with marble accents.', src: '/exterior/exterior3.jpeg' },
  { id: 10, title: 'Outdoor Patio Design', category: 'Exterior', description: 'Stylish outdoor patio with stone flooring.', src: '/exterior/exterior4.jpeg' },
  { id: 11, title: 'Facade Design', category: 'Exterior', description: 'Modern facade with stone and glass combination.', src: '/exterior/exterior5.jpeg' },
  { id: 12, title: 'Entrance Gate Design', category: 'Exterior', description: 'Stone-finished entrance gate for luxury homes.', src: '/exterior/exterior6.jpeg' },
];

export default function ImageDetailPage() {
  const params = useParams();
  const [showContact, setShowContact] = useState(false);
  const id = Number(params.id);
  const image = imageDetails.find((img) => img.id === id);

  if (!image) return <div className="p-10 text-center text-xl">Image not found.</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Image Section */}
        <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
          <Image
            src={image.src}
            alt={image.title}
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Right: Details Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{image.title}</h1>
          <p className="text-gray-700 text-base mb-4">{image.description}</p>
          <p className="text-sm text-gray-500 mb-6">Category: {image.category}</p>

          {!showContact ? (
            <button
              onClick={() => setShowContact(true)}
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition w-fit"
            >
              Contact Us
            </button>
          ) : (
            <div className="bg-gray-50 border rounded-lg p-4 mt-4">
              <h2 className="text-xl font-semibold mb-2">📞 Contact Details</h2>
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
