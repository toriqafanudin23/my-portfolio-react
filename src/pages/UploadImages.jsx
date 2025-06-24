import { useState, useEffect } from 'react';
import { supabase } from '../client/supabase';
import StaticGallery from '../components/TampilkanImages';

const UploadImages = ({ ref }) => {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState(null);
  const [imageNames, setImageNames] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchImages = async () => {
    try {
      const res = await fetch(`${apiUrl}/uploaded-files`);
      const data = await res.json();

      if (res.ok && Array.isArray(data.data)) {
        setImageNames(data.data.map((item) => item.filename));
      } else {
        console.error('Gagal mendapatkan data gambar:', data.error);
      }
    } catch (err) {
      console.error('Error saat fetch gambar:', err.message);
    }
  };

  useEffect(() => {
    fetchImages(); // Ambil data saat pertama kali load
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('File terlalu besar. Maksimum 5MB.');
      return;
    }

    const allowedTypes = ['image/png', 'image/jpeg'];
    if (!allowedTypes.includes(file.type)) {
      alert('Tipe file tidak diizinkan. Hanya PNG dan JPG.');
      return;
    }

    setUploading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const { error } = await supabase.storage
      .from('files')
      .upload(filePath, file, { upsert: false });

    if (error) {
      alert('Upload gagal: ' + error.message);
    } else {
      const { data } = supabase.storage.from('files').getPublicUrl(filePath);
      setUrl(data.publicUrl);

      try {
        const res = await fetch(`${apiUrl}/upload`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ filename: fileName }),
        });

        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.error || 'Gagal menyimpan nama file');
        }

        fetchImages();
      } catch (err) {
        console.error('Upload ke API gagal:', err.message);
      }
    }

    setUploading(false);
  };

  return (
    <section
      ref={ref}
      className="flex items-center justify-center my-20 w-full flex-col pt-32"
    >
      <StaticGallery imageNames={imageNames} onDeleteSuccess={fetchImages} />

      <div className="col-span-full sm:w-3xl">
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg
              className="mx-auto size-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="mt-4 flex text-sm/6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative flex items-center justify-center w-full px-4 py-2 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
              >
                {uploading ? 'Uploading...' : 'Upload a file'}
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  accept="image/png, image/jpeg"
                />
              </label>
            </div>

            <p className="text-xs/5 text-gray-600">PNG, JPG up to 5MB</p>

            {url && (
              <div className="mt-4">
                <p className="text-sm">Uploaded Image:</p>
                <img
                  src={url}
                  alt="Uploaded"
                  className="mt-2 w-48 mx-auto rounded"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadImages;
