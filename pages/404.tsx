import Image from "next/image";
import MainButton from "../components/MainButton";
import about from "./../public/imgs/about.webp";

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-orange-600 text-9xl">404</h1>
            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">تباً!</span> الصفحة غير موجودة
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              الصفحة التي تبحث عنها غير موجودة.
            </p>
            <MainButton text="الصفحة الرئسية" url="/" />
          </div>
          <div className="mt-4">
            <Image
              src={about}
              alt="img"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
