export default function DynamicInput({ type, value, onChange, label, error, className = '' }) {
  return (
    <div>
      <label htmlFor={type} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={type}
        name={type}
        type={type}
        value={value}
        onChange={onChange}
        required
        className={`w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
      />
    </div>
  );
}
