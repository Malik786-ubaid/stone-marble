'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  src: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((item) => item.id === Number(id));
        setProduct(found || null);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <h1 className="text-2xl font-semibold text-gray-700">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        
    
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[400px] h-[400px] relative">
            <Image
              src={product.src}
              alt={product.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

    
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>

          <hr className="border-gray-300 mb-4" />

          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">📞 +92 300 1234567</p>
          <p className="text-gray-700">📍 Islamabad, Pakistan</p>
          <p className="text-gray-700">✉️ info@stonemarble.com</p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
