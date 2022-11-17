import Link from "next/link";

const MainButton: React.FC<{ text: string; url: string }> = ({ text, url }) => {
  return (
    <Link
      href={url}
      className="bg-orange-600 hover:bg-orange-500 inline-block duration-500 rounded-md hover:text-white text-white p-4 px-8 mt-4"
    >
      {text}
    </Link>
  );
};

export default MainButton;
