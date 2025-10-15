export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        
      
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Awais Marble & Chakwal Stone Showroom provides premium marble and natural stones 
            to transform your spaces with elegance and durability.
          </p>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Stones", href: "/stones" },
              { name: "Interior", href: "/interior" },
              { name: "Exterior", href: "/exterior" },
              { name: "About", href: "/about" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-yellow-500 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">📍 Westridge II, Rawalpindi</p>
          <p className="text-gray-400 text-sm">📞 0345-5005530</p>
          <p className="text-gray-400 text-sm">📞 0346-5330086</p>
          <a
            href="https://wa.me/923455005530"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

    
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        <p>© 2025 Awais Marble & Chakwal Stone Showroom. All rights reserved.</p>
        <p className="text-xs mt-1">Crafted with ❤️ in Pakistan</p>
      </div>
    </footer>
  );
}
