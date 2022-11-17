import React from "react";

export const TeamMember: React.FC<{
  name: string;
  position: string;
  qualification: string;
}> = ({ name, position, qualification }) => {
  return (
    <blockquote className="flex flex-col items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
      <img
        className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
        alt=""
      />
      <div className="flex flex-col pr-8">
        <div className="relative pl-12">
          <p className="mt-2 text-3xl font-bold">{name} </p>
          <p className="mt-1 text-sm leading-5 text-gray-500 truncate">
            {position} -
          </p>
          <p className="mt-2 text-lg font-bold">{qualification}</p>
        </div>
        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
      </div>
    </blockquote>
  );
};

const TeamList = () => {
  return (
    <div className="p-4 sm:p-16">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
          فريق العمل
        </h2>
        <p className="my-6 text-xl font-medium text-gray-500">
          جيش من اميز الكفائات الهندسية و الادارية كان خلف كل هذة النجاحات و
          الانجازات مستعد لتحويل احلامك الي واقع
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <TeamMember
          name="Abd Elmoez Akasha"
          position="General Manager."
          qualification="B.Sc. Chemical Engineering"
        />
        <TeamMember
          name="Eltigani Mustafa"
          position="General Manager."
          qualification="B.Sc. Chemical Engineering"
        />
        <TeamMember
          name="Nazar Alkhidir"
          position="Eng."
          qualification="B.Sc. Architecture"
        />
        <TeamMember
          name="Sharif Kamal Mohamed"
          position="Eng."
          qualification="B.Sc. Architecture"
        />
        <TeamMember
          name="Mahmoud Youssef Ali"
          position="Eng."
          qualification="B.Sc. Civil Engineering"
        />
        <TeamMember
          name="Omer Gaafar Abubakr"
          position="Eng."
          qualification="B.Sc. Civil Engineering"
        />
        <TeamMember
          name="Wejdan Ahmed Mohammed Ali"
          position="Eng."
          qualification="B.Sc. Civil Engineering"
        />
        <TeamMember
          name="Reham Ali"
          position="Eng."
          qualification="B.Sc. Architecture"
        />
        <TeamMember
          name="Mohammed Fadhel"
          position="Surveyor."
          qualification="B.Sc. Survey Engineering"
        />
        <TeamMember
          name="Mohammed Youssef"
          position="Surveyor."
          qualification="B.Sc. Survey Engineering"
        />
        <TeamMember
          name="Khola Abdelbagy Mohammed"
          position="Managing Director."
          qualification="B.Sc. MIS"
        />
        <TeamMember
          name="Abrar Youseef Obaid"
          position="Accountant."
          qualification="B.Sc. Economics"
        />
      </div>
    </div>
  );
};

export default TeamList;
