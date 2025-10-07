import Image from "next/image";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "White Italian Marble", img: "/images/product2.jpg" },
    { id: 2, name: "Black Galaxy Granite", img: "/images/product3.jpg" },
    { id: 3, name: "Beige Travertine", img: "/images/product4.jpg" },
    { id: 4, name: "Onyx Stone", img: "/images/product5.jpg" },
    { id: 5, name: "Green Marble", img: "/images/product6.jpg" },
    { id: 6, name: "Brown Granite", img: "/images/product7.jpg" },
  ];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-10">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Premium quality natural stone for elegant interiors.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
