'use client';

export default function Hero() {
  const scrollToPortfolio = () => {
    const portfolio = document.getElementById('portfolio');
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Blur Food — Content Creator yang Menginspirasi
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Makanan lezat, konten yang menginspirasi. Kolaborasi brand dengan hasil nyata.
        </p>
        
        <button
          onClick={scrollToPortfolio}
          className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
        >
          Lihat Portfolio
        </button>
      </div>
    </section>
  );
}
