import Image from "next/image";
import Link from "next/link";
import project_1_img_1 from "./../public/imgs/قسم-اعمال-البناء-و-التشيد.webp";

const ProjectCard: React.FC = () => {
  return (
    <div className="w-full flex flex-col my-8 md:my-0 flex-grow flex-shrink hover:scale-105 transform transition-all">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          href="/projects/project-1/"
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <Image
            src={project_1_img_1}
            className="h-full w-full rounded-t pb-6"
            alt=""
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">
            <span className="fa fa-map-marker-alt" /> حي المغتربين
          </p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            فيلا حي المغتربين
          </div>
          <p className="text-gray-800 text-base px-6 mb-5">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
