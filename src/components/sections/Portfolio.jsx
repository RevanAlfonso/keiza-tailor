import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Button } from '../ui/Button';
import dinas1 from "../../../public/img/dinas1.jpeg"
import dinas2 from "../../../public/img/dinas2.jpeg"
import dinas3 from "../../../public/img/dinas3.jpeg"
import dinas4 from "../../../public/img/dinas4.jpeg"

export function Portfolio() {
  const ref = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['Semua', 'Jas Koas', 'Jas Apoteker', 'Seragam Dinas'];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset count when changing category
  };

  // Dummy images for portfolio using Unsplash with specific tailor/uniform themes
  const items = [
    { id: 1, category: 'Jas Koas', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop' },
    { id: 2, category: 'Seragam Dinas', img: 'https://images.unsplash.com/photo-1556228720-192a6af4e865?q=80&w=600&auto=format&fit=crop' },
    { id: 3, category: 'Jas Apoteker', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop' },
    { id: 4, category: 'Seragam Dinas', img: dinas2 },
    { id: 5, category: 'Seragam Dinas', img: dinas1 },
    { id: 6, category: 'Seragam Dinas', img: dinas3 },
    { id: 7, category: 'Seragam Dinas', img: dinas4 },
  ];

  const filteredItems = activeCategory === 'Semua' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="portfolio" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-2">Galeri Hasil</h2>
          <h3 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Portofolio Kami
          </h3>
          <p className="text-lg text-text-secondary">
            Beberapa hasil karya jahitan Keiza Tailor yang telah dipercaya oleh berbagai klien.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-text-secondary hover:text-primary hover:bg-gray-50 shadow-soft border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleItems.map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 bg-white">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={item.img} 
                  alt={`Hasil Jahitan ${item.category} di Padang`} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredItems.length && (
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8"
            >
              Lihat Lebih Banyak
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
