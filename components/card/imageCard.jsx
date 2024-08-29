import Image from 'next/image';
import Link from 'next/link';

const ImageCard = ({ imageSrc, imageAlt, title, description }) => {
  return (
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={imageSrc}
          alt={imageAlt}
          width={192} // Adjust width to match md:w-48
          height={256} // Adjust height to match h-96
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            {description}
          </p>
        </div>
      </div>
  );
};

export default ImageCard;
