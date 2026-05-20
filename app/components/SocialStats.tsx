import { socialStats, totalFollowers, totalAvgViews } from '../data/stats';

export default function SocialStats() {
  return (
    <section id="stats" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Jangkauan Platform
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Total jangkauan dan engagement di seluruh platform social media
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialStats.map((stat) => (
            <div
              key={stat.platform}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center text-2xl mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.platform}</h3>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Followers</span>
                  <span className="font-semibold text-gray-900">{stat.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Avg Views</span>
                  <span className="font-semibold text-gray-900">{stat.avgViews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 text-sm mb-1">Total Followers</p>
            <p className="text-3xl font-bold text-gray-900">{totalFollowers}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 text-sm mb-1">Total Avg Views</p>
            <p className="text-3xl font-bold text-gray-900">{totalAvgViews}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
