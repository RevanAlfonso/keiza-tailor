import { Helmet } from 'react-helmet-async';

export function SEO() {
  const title = "Keiza Tailor | Jasa Jahit Jas Koas, Jas Apoteker & Seragam Dinas di Padang";
  const description = "Keiza Tailor adalah jasa jahit profesional di Padang yang melayani pembuatan jas koas, jas apoteker, dan seragam dinas dengan hasil jahitan rapi, ukuran custom, dan kualitas terbaik.";
  const url = "https://keizatailorpadang.com"; // Replace with actual domain later

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Keiza Tailor",
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop", // Add actual logo/image later
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Contoh Alamat No. 123",
      "addressLocality": "Padang",
      "addressRegion": "Sumatera Barat",
      "postalCode": "25111", // Add actual postal code
      "addressCountry": "ID"
    },
    "telephone": "+6281234567890",
    "url": url,
    "priceRange": "$$"
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="tailor Padang, jasa jahit Padang, jas koas Padang, jas apoteker Padang, seragam dinas Padang" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og-image.jpg" /> {/* Recommend adding an actual og-image.jpg to public folder */}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/og-image.jpg" />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}
