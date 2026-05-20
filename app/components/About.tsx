export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              Blur Food adalah content creator yang fokus di niche Food & Beverage. 
              Membuat konten yang tidak hanya enak dipandang, tapi juga menginspirasi.
            </p>
            
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              Food & Beverage
            </div>
          </div>
          
          {/* Right: Platform Icons */}
          <div className="bg-secondary rounded-2xl p-8">
            <p className="font-semibold text-foreground mb-4">Platform</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">▶</span>
                </div>
                <span className="text-foreground font-medium">YouTube</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📷</span>
                </div>
                <span className="text-foreground font-medium">Instagram</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">♪</span>
                </div>
                <span className="text-foreground font-medium">TikTok</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
