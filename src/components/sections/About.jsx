import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform -translate-x-4 translate-y-4 -z-10"></div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Jahitan Rapi Keiza Tailor" 
                className="rounded-2xl shadow-sm object-cover h-64 w-full"
                loading="lazy"
              />
              <img 
                src="https://images.unsplash.com/photo-1536867520774-5b4f2628a69b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Bahan Berkualitas Keiza Tailor" 
                className="rounded-2xl shadow-sm object-cover h-64 w-full mt-8"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-2">Tentang Kami</h2>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-6">
              Lebih Dari Sekadar Penjahit, Kami Adalah Mitra Penampilan Anda
            </h3>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Berlokasi di Padang, <strong>Keiza Tailor</strong> hadir sebagai solusi jasa jahit profesional yang mengutamakan kualitas, ketepatan ukuran, dan kepuasan pelanggan.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Kami mengerti bahwa setiap profesi membutuhkan pakaian yang tidak hanya rapi, tapi juga nyaman dipakai sepanjang hari. Oleh karena itu, kami mendedikasikan keahlian kami khusus untuk pembuatan jas koas, jas apoteker, dan berbagai seragam dinas dengan standar tinggi.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
