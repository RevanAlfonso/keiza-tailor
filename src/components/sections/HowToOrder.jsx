import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function HowToOrder() {
  const ref = useScrollAnimation();

  const steps = [
    { num: '01', title: 'Hubungi via WhatsApp', desc: 'Sampaikan niat Anda untuk membuat seragam, jas koas, atau jas apoteker.' },
    { num: '02', title: 'Konsultasi Kebutuhan', desc: 'Diskusikan model, bahan, dan jumlah pesanan dengan tim kami.' },
    { num: '03', title: 'Pengukuran', desc: 'Datang ke lokasi kami di Padang atau buat janji untuk pengukuran langsung.' },
    { num: '04', title: 'Proses Pengerjaan', desc: 'Pesanan akan dikerjakan dengan teliti sesuai dengan ukuran dan desain.' },
    { num: '05', title: 'Pesanan Selesai', desc: 'Pakaian siap diambil atau dikirim setelah melewati tahap Quality Control.' },
  ];

  return (
    <section className="py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-2">Proses Mudah</h2>
          <h3 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Cara Pemesanan
          </h3>
          <p className="text-lg text-text-secondary">
            Langkah-langkah sederhana untuk mendapatkan hasil jahitan terbaik dari Keiza Tailor.
          </p>
        </div>

        <div ref={ref} className="relative">


          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-poppins font-bold text-xl shadow-md mb-6 relative">
                  {step.num}

                </div>
                <h4 className="text-lg font-poppins font-bold text-text-primary mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
