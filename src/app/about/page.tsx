import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
  
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/product1.jpg" 
          alt="About Stone Marble"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-4">
            About <span className="text-yellow-400">Stone Marble</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Blending the beauty of nature with timeless craftsmanship to redefine luxury.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-yellow-600">Stone Marble</span> is Pakistan’s trusted name in premium marble and natural stone supply. 
            We bring you the finest materials sourced from around the world — designed to inspire elegance, 
            sophistication, and durability in every project.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With years of experience in craftsmanship and design, we specialize in creating breathtaking interiors and exteriors 
            that stand the test of time. From grand architectural spaces to cozy homes — our marble defines perfection.
          </p>
        </div>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/product2.jpg"
            alt="Marble Workshop"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is simple — to craft beauty that lasts forever. 
            We strive to deliver excellence in every piece of marble and granite we offer, ensuring 
            sustainability, elegance, and the natural charm that turns every surface into art.
          </p>
        </div>
      </section>
    </div>
  );
}
