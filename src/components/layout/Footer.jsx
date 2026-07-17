import { MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Intro */}
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4">Keiza Tailor</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Spesialis Jas Koas, Jas Apoteker & Seragam Dinas di Padang. Jahitan rapi, ukuran custom, dan kualitas terbaik untuk penampilan profesional Anda.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/6281317571969" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors flex items-center justify-center">
                {/* Custom TikTok Icon since lucide might not have it or it's named differently, using a simple SVG or text for now */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portofolio</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h4 className="text-lg font-poppins font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">
                  Perumahan Harka Sarai, Blok H, No. 7, Kel. Padang Sarai, Kec. Koto Tangah, Padang,<br />
                  Sumatera Barat, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-300">+62 813-1757-1969</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Keiza Tailor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
