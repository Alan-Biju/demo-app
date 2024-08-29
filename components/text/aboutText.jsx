const AboutText = ({ title, paragraphs }) => {
    return (
      <>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        {paragraphs.map((text, index) => (
          <p key={index} className="text-gray-600 mb-6">
            {text}
          </p>
        ))}
      </>
    );
  };
  
  export default AboutText;
  