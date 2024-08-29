const InfoCard = ({title, info}) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-600">{info}</p>
    </div>
  )
}

export default InfoCard