import { useState } from 'react';
import axios from 'axios';
import { InputLogin } from './Inputs';
import { ButtonSubmit } from './Buttons';
import { loginSchema } from '../validations/login';

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

    const parse = loginSchema.safeParse(formData);
    if (!parse.success) {
      setError(parse.error.errors[0].message);
      setLoading(false);
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/login`, formData);

      const { token, username } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      alert('Login berhasil!');
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
          <InputLogin
            htmlFor="username"
            title="Username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Masukan username..."
          />
          <InputLogin
            htmlFor="password"
            title="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukkan password..."
          />
          {error && (
            <p className="text-pink-500 inter-400 text-sm mb-4">{error}</p>
          )}

          <ButtonSubmit disabled={loading} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
