import Image from "next/image";

export default function Products() {
  const products = [
    "Golden",
    "Silky Grey",
    "Kohat Cream",
    "Sitara Red",
    "Lal Marble",
    "Crystal Grey",
    "Crystal White",
    "Sawat Golden Split",
    "Sawat Silky Split",
    "Charbagh White Split",
    "Black and Gold Split",
    "Black Granite Split",
    "Singhara Stone",
    "Sawat Cream Split",
    "Golden Shine Marble",
  ];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-12 text-gray-900">Our Stone Collection</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((name, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <Image
                src={`/images/product${20 + index}.jpeg`}
                alt={name}
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm">
                  Premium quality {name} stone for interiors and exteriors.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
