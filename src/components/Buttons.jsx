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

export const ButtonDeleteImage = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md transition-opacity opacity-100 hover:cursor-pointer"
      title="Hapus gambar"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sm:w-5 sm:h-5 w-3 h-3"
      >
        <path
          d="M20.5001 6H3.5"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9.5 11L10 16"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.5 11L14 16"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
          stroke="#1C274C"
          strokeWidth="1.5"
        />
        <path
          d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export const ButtonLikeImage = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="absolute sm:top-10 top-8 right-2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md transition-opacity opacity-100 hover:cursor-pointer"
      title={title ? 'Unlike' : 'Like'}
    >
      <svg
        fill={title ? '#e0245e' : '#000000'}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="sm:w-5 sm:h-5 w-3 h-3"
      >
        <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5A5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z"></path>
      </svg>
    </button>
  );
};
