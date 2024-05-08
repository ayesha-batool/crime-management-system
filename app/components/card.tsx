// components/Card.tsx

import Image from "next/image";
import Link from "next/link";

type CardProps = {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ imageUrl, altText, title, description, link }) => {
  return (
    <div className="bg-orange-500 text-center rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:bg-[#2a6496] hover:text-white hover:shadow-xl">
     <div className="flex justify-center items-center">
      <Image src={imageUrl} alt={altText} width={100} height={100} className="h-auto align-middle" />
     </div>
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="">{description}</p>
        <Link href={link} className="mt-4 block font-bold hover:text-black">Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card;
