import { MessageCircle } from 'lucide-react';
import { BasicIcon, TechIcons } from '../components/Icons';

const packages = [
  {
    name: 'Paket Basic',
    // priceBefore: 'Rp1.200.000',
    price: 'Rp1.000.000',
    features: [
      '1 Platform (Mobile/Web)',
      'Max 10 Halaman',
      'Tanpa Backend',
      'Estimasi 7-14 hari',
      'Belum termasuk hosting',
      'Belum termasuk Domain',
    ],
    recommended: false,
  },
  {
    name: 'Paket Pro',
    priceBefore: 'Rp2.000.000',
    price: 'Rp1.500.000',
    features: [
      '1 Platform (Mobile/Web)',
      'Max 10 Halaman',
      'Dengan Backend',
      'Estimasi 10-20 hari',
      'Belum termasuk VPS',
      'Belum termasuk Domain',
      'Gratis upload Playstore (Mobile)',
    ],
    recommended: true,
  },
  {
    name: 'Paket Premium',
    price: 'Rp3.000.000',
    features: [
      '2 Platform (Mobile & Web)',
      'Max 15 Halaman',
      'Dengan Backend',
      'Support + Maintenance',
      'Estimasi 25 hari',
      'Belum termasuk VPS',
      'Belum termasuk Domain',
      'Gratis upload Playstore (Mobile)',
    ],
    recommended: false,
  },
];

export const Order = ({ ref }) => {
  const whatsappLink = 'https://wa.me/6282122214133';

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center w-full mx-auto text-center px-4 py-32 bg-slate-50"
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent mb-4">
        Bangun Aplikasimu Bersama Kami!
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg mb-8">
        Siap untuk memulai bisnismu? Pilih paket terbaik sesuai kebutuhanmu dan
        nikmati promo spesial. Hubungi kami melalui WhatsApp untuk konsultasi
        terlebih dahulu!
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full shadow transition font-medium"
        >
          <MessageCircle size={20} />
          Chat via WhatsApp
        </a>
      </div>

      {/* Paket Pemesanan */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center border-2 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-xl ${
              pkg.recommended
                ? 'bg-white border-teal-500 bg-gradient-to-br from-teal-50 via-white to-teal-100'
                : pkg.name === 'Paket Basic'
                ? 'bg-white border-slate-400'
                : 'bg-gradient-to-br from-yellow-50 via-white to-yellow-100 border-yellow-400'
            }`}
          >
            {pkg.recommended && (
              <div className="absolute -top-4 right-4 px-4 py-1 text-sm font-semibold text-white bg-amber-500 rounded-full shadow">
                Diskon 25%
              </div>
            )}

            <h2
              className={`text-2xl font-bold mb-2 ${
                pkg.recommended
                  ? 'text-slate-800'
                  : pkg.name === 'Paket Basic'
                  ? 'text-slate-700'
                  : 'text-yellow-700'
              }`}
            >
              {pkg.name}
            </h2>

            <div className="mb-4 flex flex-col items-center gap-1">
              {pkg.priceBefore && (
                <span className="text-base text-slate-400 line-through">
                  {pkg.priceBefore}
                </span>
              )}
              <span
                className={`text-xl font-semibold ${
                  pkg.recommended
                    ? 'text-teal-600'
                    : pkg.name === 'Paket Basic'
                    ? 'text-slate-700'
                    : 'text-yellow-700'
                }`}
              >
                {pkg.price}
              </span>
            </div>

            <div className="mb-6">
              {pkg.name.includes('Basic') ? <BasicIcon /> : <TechIcons />}
            </div>

            <ul
              className={`text-sm sm:text-base space-y-2 mb-6 w-full px-4 ${
                pkg.recommended
                  ? 'text-slate-600'
                  : pkg.name === 'Paket Basic'
                  ? 'text-slate-700'
                  : 'text-yellow-800'
              }`}
            >
              {pkg.features.map((feature, i) => {
                const isNegative =
                  feature.toLowerCase().includes('belum') ||
                  feature.toLowerCase().includes('tanpa');
                return (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className={`text-lg font-bold ${
                        isNegative ? 'text-red-500' : 'text-green-600'
                      }`}
                    >
                      {isNegative ? '✕' : '✓'}
                    </span>
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>

            <a
              href={`https://wa.me/6282122214133?text=${encodeURIComponent(
                `Halo! Saya tertarik dengan *${pkg.name}* dengan harga ${pkg.price}. Apakah bisa konsultasi lebih lanjut?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto px-6 py-2 rounded-full text-sm font-medium transition-all shadow ${
                pkg.recommended
                  ? 'bg-teal-600 hover:bg-teal-700 text-white'
                  : pkg.name === 'Paket Basic'
                  ? 'bg-slate-700 hover:bg-slate-800 text-white'
                  : 'bg-yellow-500 hover:bg-yellow-600 text-white'
              }`}
            >
              Pilih Paket Ini
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
