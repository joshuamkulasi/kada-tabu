import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-kada-brown text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#83580b' }}>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-kada-gold">•</span>
                <a
                  href="mailto:kadatabugraphicdesign@gmail.com"
                  className="text-white hover:text-kada-gold"
                >
                  Email: kadatabugraphicdesign@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-kada-gold">•</span>
                <a
                  href="https://wa.me/67572881637"
                  className="text-white hover:text-kada-gold"
                >
                  WhatsApp: +675 72881637
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-kada-gold">•</span>
                <span className="text-white">
                  Location: Port Moresby, PNG
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#83580b' }}>
              Quick Links
            </h3>
            <div className="space-y-4">
              <Link
                href="/products"
                className="text-white hover:text-kada-gold block"
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-kada-gold block"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-white hover:text-kada-gold block"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-kada-gold block"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-kada-gold block"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#83580b' }}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/KadaTabuGraphicDesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-kada-gold"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/KadaTabuGraphicDesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-kada-gold"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-kada-gold/30 text-center">
          <p>&copy; {new Date().getFullYear()} Kada Tabu Graphic Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
