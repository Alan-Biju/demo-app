// components/DynamicButton.jsx
export default function DynamicButton({
    type = 'button',
    onClick,
    children,
    className = '',
    disabled = false,
  }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  