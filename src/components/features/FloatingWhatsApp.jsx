import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20Keiza%20Tailor,%20saya%20ingin%20konsultasi%20mengenai%20jasa%20jahit."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group flex items-center justify-center animate-bounce-slow"
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse" />
      {/* Optional tooltip */}
      <span className="absolute right-full mr-4 bg-white text-text-primary px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Konsultasi Sekarang!
      </span>
    </a>
  );
}
