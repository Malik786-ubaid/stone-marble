export default function SingharaPage() {
  const images = [
    "/images/product6.jpg",
    "/images/product7.jpg",
    "/images/product8.jpg",
    "/images/product9.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Singhara</h1>
      <p className="mb-6 text-gray-600">
        Discover our premium Singhara stone collection, ideal for elegant interior and exterior designs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={src} alt={`Singhara Stone ${idx + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
