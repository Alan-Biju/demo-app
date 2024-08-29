export default function ErrorText({ children , className = ''}) {
    return (
        <div className={`p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg${className}`} role="alert">
            {children}
        </div>
    );
  }