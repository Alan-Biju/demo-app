export default function FeatureCard({ title, description }) {
    return (
      <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  