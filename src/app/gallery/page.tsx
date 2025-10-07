import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = [
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
    "/images/product5.jpg",
    "/images/product6.jpg",
    "/images/product7.jpg",
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-10">Our Gallery</h1>
        <p className="text-gray-600 text-lg mb-12">
          Explore our marble designs and real installation projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
            >
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
