'use client';
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  src: string;
};

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("/products.json");
      const data: Product[] = await res.json();
      const prod = data.find((p) => p.id === Number(params.id));
      if (prod) setProduct(prod);
    }
    fetchProduct();
  }, [params.id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <main className="fixed inset-0 bg-gray-900/90 flex items-center justify-center z-50 p-4 overflow-auto">
      <div className="relative flex flex-col md:flex-row max-w-6xl w-full bg-transparent">
        
        <div className="flex-shrink-0 w-full md:w-1/2">
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src={product.src}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        
        <div className="md:ml-10 mt-6 md:mt-0 flex flex-col justify-between text-white md:w-1/2">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg md:text-xl mb-6">{product.description}</p>
          </div>

          <div className="mt-4 space-y-2">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>📱 WhatsApp: <span className="font-semibold">0345-5005530</span></p>
            <p>📞 Call: <span className="font-semibold">0346-5330086</span> (Ifthikhar Ahmed)</p>
            <p>📞 Call: <span className="font-semibold">0300-5341424</span> (Arshad Mehmood)</p>
            <a
              href="https://wa.me/923455005530"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

      
        <button
          onClick={() => router.back()}
          className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-yellow-400"
        >
          &times;
        </button>
      </div>
    </main>
  );
}
