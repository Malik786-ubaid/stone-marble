export default function InteriorGalleryPage() {
  const images = [
    "/images/product10.jpg",
    "/images/product11.jpg",
    "/images/product12.jpg",
    "/images/product13.jpg",
    "/images/product14.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Interior Gallery</h1>
      <p className="mb-6 text-gray-600">
        Explore our interior projects with high-quality marble and stone designs for homes and offices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={src} alt={`Interior Gallery ${idx + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
