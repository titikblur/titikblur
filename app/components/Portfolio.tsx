import { portfolioData, getPlatformIcon } from '../data/portfolio';

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toString();
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Portfolio
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Contoh project dan kolaborasi dengan berbagai brand F&B
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Thumbnail</span>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {getPlatformIcon(item.platform)} {item.platform}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Logo</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.brandName}</p>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">{formatNumber(item.views)}</p>
                    <p className="text-xs text-gray-500">Views</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">{formatNumber(item.likes)}</p>
                    <p className="text-xs text-gray-500">Likes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">{formatNumber(item.comments)}</p>
                    <p className="text-xs text-gray-500">Comments</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
