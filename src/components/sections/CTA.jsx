import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function CTA() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 relative bg-primary overflow-hidden">
      {/* Background Pattern/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#10346a]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div ref={ref}>
          <div className="bg-white/10 p-4 rounded-2xl inline-block mb-6 backdrop-blur-sm">
            <MessageCircle size={40} className="text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6 leading-tight">
            Tidak menemukan layanan yang Anda cari?
          </h2>
          
          <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Hubungi Keiza Tailor melalui WhatsApp untuk konsultasi. Kami siap membantu segala kebutuhan jahit Anda, dari pakaian formal hingga custom lainnya.
          </p>
          
          <a href="https://wa.me/6281234567890?text=Halo%20Keiza%20Tailor,%20saya%20ingin%20konsultasi%20mengenai%20jasa%20jahit." target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg" className="text-lg px-8 shadow-lg font-bold">
              Hubungi via WhatsApp Sekarang
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
