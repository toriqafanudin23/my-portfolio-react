export const CardSertificate = ({ title, provider, year, link, icon }) => {
  return (
    <div className="relative border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden bg-gradient-to-br from-white via-teal-50 to-white">
      {/* Konten Card */}
      <div className="relative p-6 z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          <span className="text-xs bg-teal-200 text-teal-800 font-medium px-3 py-1 rounded-full">
            {year}
          </span>
        </div>

        <div className="mb-3">{icon}</div>

        <p className="text-sm font-medium text-pink-600 mb-1">{provider}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-semibold text-teal-600 hover:text-teal-800 hover:underline transition"
        >
          Lihat Sertifikat →
        </a>
      </div>
    </div>
  );
};
