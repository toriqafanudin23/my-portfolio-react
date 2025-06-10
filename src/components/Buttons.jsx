export const ButtonSave = ({ onClick }) => {
  return (
    <button
      type="button"
      className="hover:cursor-pointer rounded-sm px-3 py-1.5 text-sm inter-500 text-teal-500 bg-white border border-teal-500 hover:bg-teal-50 transition-colors"
      onClick={onClick}
    >
      Save
    </button>
  );
};

export const ButtonEdit = ({ onClick }) => {
  return (
    <button
      type="button"
      className="hover:cursor-pointer rounded-sm px-2 py-1 text-sm inter-400 text-sky-600 border border-sky-600 hover:bg-blue-50"
      onClick={onClick}
    >
      Edit
    </button>
  );
};

export const ButtonDelete = ({ onClick }) => {
  return (
    <button
      type="button"
      className="hover:cursor-pointer rounded-sm px-2 py-1 text-sm inter-400 text-pink-600 border border-pink-600 bg-white hover:bg-red-50 transition-colors"
      onClick={onClick}
    >
      Delete
    </button>
  );
};

export const ButtonFetch = ({ onClick }) => {
  return (
    <div className="p-4 flex items-center justify-center">
      <button
        onClick={onClick}
        className="mt-2 rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 hover:cursor-pointer inter-400"
      >
        Muat Ulang
      </button>
    </div>
  );
};

export const ButtonSubmit = ({ disabled }) => {
  return (
    <button
      type="submit"
      className="hover:cursor-pointer w-full py-3 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600"
      disabled={disabled}
    >
      {disabled ? 'Memproses...' : 'LOGIN'}
    </button>
  );
};

export const ButtonAdd = ({ onClick }) => {
  return (
    <td className="p-4">
      <button
        onClick={onClick}
        className="bg-white hover:bg-teal-100 text-teal-600 px-4 py-1 rounded border border-teal-500 hover:cursor-pointer text-sm inter-400"
      >
        Tambah
      </button>
    </td>
  );
};
