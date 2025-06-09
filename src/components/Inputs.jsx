export const InputEdit = ({ value, onChange }) => {
  return (
    <td className="p-4">
      <input
        type="text"
        className="w-full rounded border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
        value={value}
        onChange={onChange}
      />
    </td>
  );
};

export const InputLogin = ({
  htmlFor,
  title,
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="block font-semibold text-slate-700 mb-1"
      >
        {title}
        <span className="text-pink-500">*</span>
      </label>
      <input
        type={type}
        id={htmlFor}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
      />
    </div>
  );
};
