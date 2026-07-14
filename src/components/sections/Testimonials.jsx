import { Star } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Testimonials() {
  const ref = useScrollAnimation();

  const reviews = [
    {
      name: 'Dr. Andi Saputra',
      role: 'Dokter Umum',
      content: 'Jas koas pesanan saya hasilnya sangat memuaskan. Jahitannya rapi, pas di badan, dan yang paling penting bahannya nyaman dipakai seharian di rumah sakit.',
    },
    {
      name: 'Siti Aminah, S.Farm., Apt.',
      role: 'Apoteker',
      content: 'Suka banget dengan jas apoteker dari Keiza Tailor. Cutting-nya bagus, membuat penampilan terlihat lebih profesional. Pengerjaannya juga on time.',
    },
    {
      name: 'Budi Santoso',
      role: 'Pegawai Instansi',
      content: 'Pesan seragam dinas untuk satu divisi di sini. Semuanya puas dengan hasilnya. Ukurannya pas karena diukur satu-satu, dan harganya juga bersahabat.',
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-2">Testimoni</h2>
          <h3 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Apa Kata Mereka?
          </h3>
          <p className="text-lg text-text-secondary">
            Kepuasan pelanggan adalah prioritas kami. Berikut adalah pengalaman mereka yang telah mempercayakan jahitannya kepada Keiza Tailor.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft border border-border/50 flex flex-col h-full">
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow italic">
                "{review.content}"
              </p>
              <div>
                <h4 className="font-poppins font-bold text-text-primary">{review.name}</h4>
                <p className="text-sm text-primary font-medium">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
