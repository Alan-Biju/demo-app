export default function CardContainer({ children , className = ''}) {
    return (
        <div className={`w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg ${className}`}>
          {children}
        </div>
    );
  }