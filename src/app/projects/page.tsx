export default function ProjectsPage() {
  const images = [
    "/images/product15.jpg",
    "/images/product16.jpg",
    "/images/product17.jpg",
    "/images/product18.jpg",
    "/images/product19.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p className="mb-6 text-gray-600">
        View our completed stone and marble projects, showcasing professional craftsmanship.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={src} alt={`Project ${idx + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
