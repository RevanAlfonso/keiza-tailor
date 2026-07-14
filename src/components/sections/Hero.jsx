import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import imghero from '../../../public/img/hero.png';

export function Hero() {
  const ref = useScrollAnimation();

  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div ref={ref} className="text-left">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <CheckCircle2 size={16} className="text-accent" />
              <span>Tailor Profesional di Padang</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-text-primary leading-tight mb-6">
              Jahit Jas Koas, Jas Apoteker & <span className="text-primary">Seragam Dinas</span> Berkualitas
            </h1>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl">
              Keiza Tailor melayani pembuatan jas koas, jas apoteker, dan seragam dinas dengan jahitan rapi, ukuran custom, serta hasil yang nyaman digunakan.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://wa.me/6281234567890?text=Halo%20Keiza%20Tailor,%20saya%20ingin%20konsultasi%20pembuatan%20seragam." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto">
                  Konsultasi via WhatsApp
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white">
                  Lihat Portofolio <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative fade-in delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src={imghero} 
              alt="Proses menjahit seragam di Keiza Tailor" 
              className="rounded-3xl shadow-soft object-cover w-full h-[400px] lg:h-[500px]"
              loading="lazy"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-accent/10 p-3 rounded-full text-accent">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="font-poppins font-bold text-text-primary">Jahitan Rapi</p>
                <p className="text-sm text-text-secondary">Kualitas Terjamin</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
