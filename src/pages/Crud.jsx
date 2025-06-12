import LoginPage from '../components/Login';
import CustomerTable from './FetchData';

const Crud = ({ ref }) => {
  return (
    <section ref={ref} id="crud" className="pt-32 min-h-screen bg-white px-4">
      <h1 className="text-center text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
        Project 1: CRUD Data Management
      </h1>
      <p className="text-gray-600 max-w-[700px] mx-auto inter-300 sm:text-xl text-md text-center pb-10">
        Sementara Anda hanya bisa melakukan manipulasi data berupa edit data dan
        juga delete data. Untuk bisa insert data, Anda diharuskan login terlebih
        dahulu.
      </p>

      <LoginPage />
      <CustomerTable />
    </section>
  );
};

export default Crud;
