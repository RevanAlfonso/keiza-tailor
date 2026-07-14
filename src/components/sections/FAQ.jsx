import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function FAQ() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Apakah menerima ukuran custom?',
      a: 'Ya, kami sangat menyarankan ukuran custom. Anda bisa datang langsung ke tempat kami untuk pengukuran, agar hasilnya benar-benar pas dan nyaman.'
    },
    {
      q: 'Berapa lama proses pengerjaan?',
      a: 'Lama pengerjaan bervariasi tergantung kerumitan dan antrean, rata-rata memakan waktu 7 hingga 14 hari kerja. Kami akan memberikan estimasi waktu saat Anda memesan.'
    },
    {
      q: 'Apakah bisa konsultasi terlebih dahulu?',
      a: 'Tentu saja. Anda bisa berkonsultasi mengenai model, bahan, hingga budget melalui WhatsApp atau datang langsung ke workshop kami.'
    },
    {
      q: 'Apakah menerima pesanan satuan?',
      a: 'Ya, kami menerima pesanan jas koas, jas apoteker, maupun seragam dinas dalam jumlah satuan tanpa ada minimum order.'
    },
    {
      q: 'Apakah melayani pesanan dalam jumlah banyak?',
      a: 'Sangat bisa. Kami berpengalaman menangani pesanan seragam dinas atau instansi dalam skala besar dengan harga yang lebih kompetitif.'
    },
    {
      q: 'Bagaimana cara pemesanan?',
      a: 'Anda bisa langsung menghubungi kami via WhatsApp, lalu kita jadwalkan waktu pengukuran. Setelah itu, kami akan mulai memproses pesanan Anda.'
    },
    {
      q: 'Apakah bisa bordir nama atau logo?',
      a: 'Bisa. Kami menyediakan layanan bordir komputer yang rapi untuk nama, logo instansi, atau logo universitas sesuai permintaan Anda.'
    },
    {
      q: 'Apakah ada layanan selain yang ditampilkan di website?',
      a: 'Ya, kami juga menerima pembuatan pakaian formal lainnya. Silakan hubungi kami via WhatsApp untuk mengonsultasikan kebutuhan spesifik Anda.'
    }
  ];

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-2">Tanya Jawab</h2>
          <h3 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Pertanyaan Umum (FAQ)
          </h3>
          <p className="text-lg text-text-secondary">
            Jawaban untuk beberapa pertanyaan yang sering diajukan oleh pelanggan kami.
          </p>
        </div>

        <div ref={ref} className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border/60 rounded-xl overflow-hidden shadow-sm hover:border-primary/50 transition-colors bg-white"
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-poppins font-bold text-text-primary pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`flex-shrink-0 text-text-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-text-secondary leading-relaxed border-t border-border/30 pt-3">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
