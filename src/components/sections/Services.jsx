import { Stethoscope, UserCog, Briefcase, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Services() {
  const ref = useScrollAnimation();

  const services = [
    {
      title: 'Jas Koas',
      description: 'Pembuatan jas koas dengan standar medis, bahan nyaman, tidak mudah kusut, dan jahitan presisi untuk mobilitas tinggi.',
      icon: <Stethoscope size={32} className="text-primary" />
    },
    {
      title: 'Jas Apoteker',
      description: 'Desain elegan dan profesional dengan potongan (cutting) yang pas, memberikan kesan terpercaya bagi seorang apoteker.',
      icon: <UserCog size={32} className="text-primary" />
    },
    {
      title: 'Seragam Dinas',
      description: 'Seragam dinas instansi atau perusahaan dengan bordir komputer rapi, bahan premium, dan ukuran custom per individu.',
      icon: <Briefcase size={32} className="text-primary" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-2">Layanan Utama</h2>
          <h3 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Spesialisasi Jahit Kami
          </h3>
          <p className="text-lg text-text-secondary">
            Kami fokus pada pembuatan pakaian profesi yang membutuhkan ketelitian ekstra dan kenyamanan maksimal.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300 flex flex-col items-start border border-border/50"
            >
              <div className="bg-primary/5 p-4 rounded-xl mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-poppins font-bold text-text-primary mb-3">
                {service.title}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Special CTA Card for Other Services */}
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-xl shadow-soft text-white flex flex-col justify-between">
            <div>
              <div className="bg-white/20 p-4 rounded-xl mb-6 inline-block">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-poppins font-bold mb-3">
                Butuh layanan jahit lainnya?
              </h4>
              <p className="text-white/90 mb-6 leading-relaxed">
                Silakan hubungi kami melalui WhatsApp untuk konsultasi kebutuhan spesifik Anda.
              </p>
            </div>
            <a href="https://wa.me/6281317571969?text=Halo%20Keiza%20Tailor,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20jahit%20lainnya." target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" className="w-full bg-white text-primary hover:bg-gray-50 border-none">
                Konsultasi Sekarang
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
