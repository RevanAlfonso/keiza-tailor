import { CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function WhyChooseUs() {
  const ref = useScrollAnimation();

  const reasons = [
    { title: 'Jahitan Rapi', desc: 'Standar QC ketat untuk hasil jahitan yang kuat, halus, dan presisi.' },
    { title: 'Ukuran Custom', desc: 'Diukur langsung per individu untuk memastikan kenyamanan maksimal.' },
    { title: 'Bahan Berkualitas', desc: 'Menggunakan material pilihan yang sejuk dan tidak mudah kusut.' },
    { title: 'Harga Kompetitif', desc: 'Penawaran harga terbaik yang sebanding dengan kualitas jahitan.' },
    { title: 'Tepat Waktu', desc: 'Komitmen pada tenggat waktu penyelesaian sesuai kesepakatan.' },
    { title: 'Pelayanan Ramah', desc: 'Konsultasi terbuka untuk mewujudkan model dan kebutuhan Anda.' },
  ];

  return (
    <section className="py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-2">Mengapa Memilih Kami</h2>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-6">
              Keunggulan Keiza Tailor
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Kami tidak hanya menjahit pakaian, tapi juga membangun kepercayaan melalui kualitas dan pelayanan terbaik untuk pelanggan di Padang.
            </p>
          </div>

          <div ref={ref} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-section transition-colors duration-300">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-poppins font-bold text-text-primary mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
