'use client';

import { useState } from 'react';

const terms = [
  {
    title: 'Nichos Konten',
    content: 'Food & Beverage',
    icon: '🍜',
  },
  {
    title: 'Jumlah Revisi',
    content: 'Maksimal 2x revisi. Revisi tambahan akan dikenakan biaya tambahan.',
    icon: '✏️',
  },
  {
    title: 'Waktu Pengerjaan',
    content: '7-14 hari kerja setelah brief dan pembayaran DP diterima.',
    icon: '⏱️',
  },
  {
    title: 'Sistem Pembayaran',
    content: '50% DP di awal, 50% sisanya sebelum konten dipublish.',
    icon: '💳',
  },
  {
    title: 'Format Konten',
    content: 'Horizontal (YouTube/Tokped Play) atau Vertical (TikTok/Reels). Pilih sesuai kebutuhan.',
    icon: '📱',
  },
  {
    title: 'Hak Konten',
    content: 'Hak konten didiskusikan lebih lanjut. Silakan hubungi untuk detail.',
    icon: '📋',
  },
];

export default function TnC() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="terms" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Syarat & Ketentuan
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Informasi penting sebelum memesan layanan
        </p>
        
        <div className="space-y-3">
          {terms.map((term, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{term.icon}</span>
                  <span className="font-semibold text-gray-900">{term.title}</span>
                </div>
                <span className={`text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="p-5 text-gray-600 bg-white border-t border-gray-100">
                  {term.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
