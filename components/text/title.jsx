export default function TitleText({ children , className = ''}) {
    return (
        <h2 className={`text-2xl font-bold text-center text-gray-900${className}`}> {children}</h2>
    );
  }