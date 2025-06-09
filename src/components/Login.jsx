import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/login', formData);
      const { token, username } = response.data;

      // Simpan token ke localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      alert('Login berhasil!');
      // Redirect bisa dilakukan di sini (jika pakai react-router)
      // navigate("/dashboard");
    } catch (err) {
      setError('Username atau password salah!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center pb-10">
      <div className="w-full max-w-md bg-white border border-slate-300 rounded-xl p-8 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-semibold text-slate-700 mb-1"
            >
              Username<span className="text-pink-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Masukkan username (admin)"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-semibold text-slate-700 mb-1"
            >
              Password<span className="text-pink-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan password (1234)"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>

          {error && (
            <p className="text-pink-500 inter-400 text-sm mb-4">{error}</p>
          )}

          <button
            type="submit"
            className="hover:cursor-pointer w-full py-3 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600"
            disabled={loading}
          >
            {loading ? 'Memproses...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
