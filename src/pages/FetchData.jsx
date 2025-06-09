import { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null); // customer_id yang sedang diedit
  const [editData, setEditData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const fetchCustomers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/customers/name', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCustomers(response.data.data);
      setError('');
      setEditId(null);
    } catch (err) {
      console.error(err);
      setError('Gagal mengambil data pelanggan');
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleEditClick = (customer) => {
    setEditId(customer.customer_id);
    setEditData({
      name: customer.name,
      phone: customer.phone,
      address: customer.address,
    });
  };

  const handleInputChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveClick = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`/customer/${editId}`, editData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      // Setelah sukses update, refresh data pelanggan dan reset edit mode
      fetchCustomers();
    } catch (err) {
      console.error(err);
      setError('Gagal memperbarui data pelanggan');
    }
  };

  const handleDeleteClick = async (customerId) => {
    const confirmed = window.confirm(
      'Apakah Anda yakin ingin menghapus pelanggan ini?'
    );
    if (!confirmed) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/customer/${customerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Pelanggan berhasil dihapus.');
      fetchCustomers(); // refresh tabel setelah delete
    } catch (error) {
      console.error(error);
      alert('Gagal menghapus pelanggan.');
    }
  };

  return (
    <div className="rounded-sm w-full sm:w-4/5 p-2 overflow-x-auto">
      <div className="min-w-[640px]">
        <table className="table-fixed w-full text-left text-slate-600 inter-300">
          <thead className="inter-300 border-y border-slate-300 bg-slate-100 text-slate-700">
            <tr>
              <th className="p-4 w-20">ID</th>
              <th className="p-4 w-48">Nama</th>
              <th className="p-4 w-48">No. HP</th>
              <th className="p-4 w-48">Alamat</th>
              <th className="p-4 w-40">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-300">
            {customers.map((customer) => (
              <tr key={customer.customer_id}>
                <td className="p-4">{customer.customer_id}</td>

                {/* Jika baris ini sedang diedit, tampilkan input */}
                {editId === customer.customer_id ? (
                  <>
                    <td className="p-4">
                      <input
                        type="text"
                        className="w-full rounded border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        value={editData.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                      />
                    </td>
                    <td className="p-4">
                      <input
                        type="text"
                        className="w-full rounded border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        value={editData.phone}
                        onChange={(e) =>
                          handleInputChange('phone', e.target.value)
                        }
                      />
                    </td>
                    <td className="p-4">
                      <input
                        type="text"
                        className="w-full rounded border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        value={editData.address}
                        onChange={(e) =>
                          handleInputChange('address', e.target.value)
                        }
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-4">{customer.name}</td>
                    <td className="p-4">{customer.phone}</td>
                    <td className="p-4">{customer.address}</td>
                  </>
                )}

                <td className="p-4 flex gap-2">
                  {editId === customer.customer_id ? (
                    <button
                      type="button"
                      className="hover:cursor-pointer rounded-sm px-3 py-1.5 text-sm inter-500 text-teal-500 bg-white border border-teal-500 hover:bg-teal-50 transition-colors"
                      onClick={handleSaveClick}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="hover:cursor-pointer rounded-sm px-2 py-1 text-sm inter-400 text-sky-600 border border-sky-600 hover:bg-blue-50"
                        onClick={() => handleEditClick(customer)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="hover:cursor-pointer rounded-sm px-2 py-1 text-sm inter-400 text-pink-600 border border-pink-600 bg-white hover:bg-red-50 transition-colors"
                        onClick={() => handleDeleteClick(customer.customer_id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {error && <div className="p-4 text-red-500">{error}</div>}

        {/* Tombol muat ulang hanya muncul kalau gak sedang edit */}
        {!editId && (
          <div className="p-4 flex items-center justify-center">
            <button
              onClick={fetchCustomers}
              className="mt-2 rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 hover:cursor-pointer inter-400"
            >
              Muat Ulang
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerTable;
