const pricingPlans = [
  {
    id: '1-video',
    title: '1 Video',
    price: 'Rp 1.500.000',
    features: [
      '1 video content',
      'Horizontal (YouTube/Tokped)',
      'Vertical (TikTok/Reels)',
      'Revisi Maks 2x',
      '7-14 Hari Kerja',
    ],
    popular: false,
    cta: 'Pilih Paket',
  },
  {
    id: '2-video',
    title: '2 Video',
    price: 'Rp 2.500.000',
    features: [
      '2 video content',
      'Horizontal (YouTube/Tokped)',
      'Vertical (TikTok/Reels)',
      'Revisi Maks 2x',
      '7-14 Hari Kerja',
      'Diskon Paket',
    ],
    popular: true,
    cta: 'Pilih Paket',
  },
  {
    id: 'custom',
    title: '3+ Video',
    price: 'Hubungi via WhatsApp',
    features: [
      'Custom paket video',
      'Semua format',
      'Revisi sesuai kesepakatan',
      'Priority scheduling',
      'Harga negotiable',
    ],
    popular: false,
    cta: 'Hubungi via WhatsApp',
  },
];

export default function Pricing() {
  const handleCTA = (planId: string) => {
    if (planId === 'custom') {
      window.open('https://forms.google.com/placeholder-contact-form', '_blank');
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Harga Layanan
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan brand kamu
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? 'bg-gray-900 text-white shadow-xl scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.title}
              </h3>
              <p className={`text-2xl font-bold mb-6 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.price}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className={plan.popular ? 'text-green-400' : 'text-green-500'}>✓</span>
                    <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleCTA(plan.id)}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
