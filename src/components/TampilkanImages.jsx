import { useState } from 'react';
import { ButtonDeleteImage, ButtonLikeImage } from './Buttons';
import { supabase } from '../client/supabase';

const apiUrl = import.meta.env.VITE_API_URL;
const baseUrl = import.meta.env.VITE_DIR_UPLOAD;

const StaticGallery = ({ imageNames, onDeleteSuccess, onImageClick }) => {
  const [likedImages, setLikedImages] = useState({});

  const toggleLike = (name) => {
    setLikedImages((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleDelete = async (filename) => {
    const confirmDelete = window.confirm(`Yakin ingin hapus ${filename}?`);
    if (!confirmDelete) return;

    const { error } = await supabase.storage
      .from('files')
      .remove([`uploads/${filename}`]);

    if (error) {
      alert('Gagal hapus dari Supabase: ' + error.message);
      return;
    }

    const res = await fetch(`${apiUrl}/upload/${filename}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert('Berhasil dihapus!');
      onDeleteSuccess();
    } else {
      const result = await res.json();
      alert('Gagal hapus dari database: ' + result.error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
        Project 2: My Gallery
      </h1>
      <p className="text-gray-600 max-w-[700px] mx-auto inter-300 sm:text-xl text-md text-center pb-10">
        Anda bisa melakukan upload dan hapus image layaknya media sosial!
      </p>
      <div className="grid grid-cols-3 gap-2">
        {imageNames.map((name, index) => {
          const imageUrl = `${baseUrl}${name}`;
          return (
            <div
              key={index}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={imageUrl}
                alt={name}
                onClick={() => onImageClick?.(imageUrl)}
                className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition"
              />
              <ButtonDeleteImage onClick={() => handleDelete(name)} />
              <ButtonLikeImage
                onClick={() => toggleLike(name)}
                title={likedImages[name]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StaticGallery;
