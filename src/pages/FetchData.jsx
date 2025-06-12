import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ButtonAdd,
  ButtonDelete,
  ButtonEdit,
  ButtonFetch,
  ButtonSave,
} from '../components/Buttons';
import { InputEdit } from '../components/Inputs';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null); // customer_id yang sedang diedit
  const [editData, setEditData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/customers/name`);
      setCustomers(response.data.data);
      setError('');
      setEditId(null);
    } catch (err) {
      console.error(err);
      setError(
        'Gagal mengambil data pelanggan, silahkan login terlebih dahulu!'
      );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    fetchCustomers();
    // localStorage.removeItem('token');
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
      await axios.put(`${apiUrl}/customer/${editId}`, editData);
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
      await axios.delete(`${apiUrl}/customer/${customerId}`);
      alert('Pelanggan berhasil dihapus.');
      fetchCustomers(); // refresh tabel setelah delete
    } catch (error) {
      console.error(error);
      alert('Gagal menghapus pelanggan.');
    }
  };

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const handleNewCustomerChange = (field, value) => {
    setNewCustomer((prev) => ({ ...prev, [field]: value }));
  };
  const handleAddCustomer = async () => {
    // Validasi input kosong
    if (!newCustomer.name || !newCustomer.phone || !newCustomer.address) {
      alert('Semua kolom harus diisi sebelum menambahkan pelanggan.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.post(`${apiUrl}/customer`, newCustomer, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      // Reset form dan ambil ulang data
      setNewCustomer({ name: '', phone: '', address: '' });
      fetchCustomers();
    } catch (error) {
      console.error(error);
      alert('Gagal menambahkan pelanggan baru, login terlebih dahulu!');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-sm w-full sm:w-4/5 p-2 overflow-x-auto">
        <div className="min-w-[640px]">
          <table className="table-fixed w-full text-left text-slate-600 inter-300">
            <thead className="inter-300 border-y border-slate-300 bg-slate-100 text-slate-700">
              <tr>
                <th className="p-4 w-20">ID</th>
                <th className="p-4 w-48">Name</th>
                <th className="p-4 w-48">Phone</th>
                <th className="p-4 w-48">Address</th>
                <th className="p-4 w-40">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-300 border-y border-slate-300">
              {/* Baris data pelanggan */}
              {customers.map((customer) => (
                <tr key={customer.customer_id}>
                  <td className="p-4">{customer.customer_id}</td>
                  {editId === customer.customer_id ? (
                    <>
                      <InputEdit
                        value={editData.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                      />
                      <InputEdit
                        value={editData.phone}
                        onChange={(e) =>
                          handleInputChange('phone', e.target.value)
                        }
                      />
                      <InputEdit
                        value={editData.address}
                        onChange={(e) =>
                          handleInputChange('address', e.target.value)
                        }
                      />
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
                      <ButtonSave onClick={handleSaveClick} />
                    ) : (
                      <>
                        <ButtonEdit onClick={() => handleEditClick(customer)} />
                        <ButtonDelete
                          onClick={() =>
                            handleDeleteClick(customer.customer_id)
                          }
                        />
                      </>
                    )}
                  </td>
                </tr>
              ))}

              {/* Baris input untuk tambah pelanggan baru */}
              {isLoggedIn && (
                <tr>
                  <td className="p-4 text-center">#</td>
                  <InputEdit
                    value={newCustomer.name}
                    onChange={(e) =>
                      handleNewCustomerChange('name', e.target.value)
                    }
                  />
                  <InputEdit
                    value={newCustomer.phone}
                    onChange={(e) =>
                      handleNewCustomerChange('phone', e.target.value)
                    }
                  />
                  <InputEdit
                    value={newCustomer.address}
                    onChange={(e) =>
                      handleNewCustomerChange('address', e.target.value)
                    }
                  />
                  <ButtonAdd onClick={handleAddCustomer} />
                </tr>
              )}
            </tbody>
          </table>

          {error && <div className="p-4 text-pink-600 inter-300">{error}</div>}

          {!editId && (
            <div className="mt-4">
              <ButtonFetch onClick={fetchCustomers} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
