import LoginPage from '../components/Login';

const CrudDataManagement = () => {
  return (
    <section id="crud" className="pt-32 min-h-screen bg-white px-4">
      <h1 className="text-center text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
        Project 1: CRUD Data Management
      </h1>
      <p className="text-gray-600 max-w-[700px] mx-auto inter-300 text-lg text-center pb-10">
        Sebelum Anda dapat melakukan manipulasi data, silakan login terlebih
        dahulu untuk mendapatkan Bearer Token.
      </p>

      <LoginPage />
    </section>
  );
};

export default CrudDataManagement;
