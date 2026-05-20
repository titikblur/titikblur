'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nama: '',
    brand: '',
  });

  // Google Form URL - replace with actual form URL after creating
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/YOUR_FORM_ID/viewform';
  const WHATSAPP_URL = 'https://wa.me/6281234567890';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Google Form for data collection
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Hubungi Kami
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Isi form di bawah atau hubungi langsung via WhatsApp
        </p>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                placeholder="Masukkan nama kamu"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 outline-none transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                Brand yang Ditangani
              </label>
              <input
                type="text"
                id="brand"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                placeholder="Nama brand/perusahaan"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 outline-none transition-all"
                required
              />
            </div>
            
            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition-colors"
              >
                Lanjutkan ke Google Form
              </button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">atau</span>
                </div>
              </div>
              
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-colors"
              >
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          </form>
          
          <p className="text-xs text-gray-400 text-center mt-6">
            Google Form akan mengumpulkan data kontak sebelum redirect ke WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
