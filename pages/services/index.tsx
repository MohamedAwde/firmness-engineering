import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import com_log1 from "./../../public/imgs/coms/com-logo-1.jpg";
import com_log2 from "./../../public/imgs/coms/com-logo-2.png";
import com_log3 from "./../../public/imgs/coms/com-logo-3.jpg";
import com_log4 from "./../../public/imgs/coms/com-logo-4.png";
import com_log5 from "./../../public/imgs/coms/com-logo-5.jpg";
import construction_image from "./../../public/imgs/قسم-اعمال-البناء-و-التشيد.webp";
import water_works_image from "./../../public/imgs/قسم اعمال و محطات المياة.webp";
import oil_works_image from "./../../public/imgs/قسم اعمال و محطات البترول.webp";

const Services = () => {
  return (
    <>
      <div className=" md:py-20 p-4 mt-8">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          اليك خدماتنا الاحترافية
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          هذة لمحة عن ما نبرع بالقيام بة
        </h3>

        <div className="mt-8">
          <div className="flex flex-col basis-1/2 md:flex-row">
            <div className="bg-white p-4 md:p-16 flex justify-end items-center flex-1">
              <Image
                src={water_works_image}
                className="w-full md:drop-shadow-md"
                alt="اعمال الانشاءات و المقاولات"
              />
            </div>
            <div className="p-4 md:p-16 flex justify-start items-center flex-1">
              <div className="max-w-md">
                <div className="w-24 h-2 bg-orange-500 mb-4"></div>
                <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
                  قسم اعمال و محطات المياة
                </h2>

                <ul className="font-light text-gray-600 text-base md:text-base mb-6 leading-relaxed text-justify">
                  <li>
                    - تأهيل و تصميم و انشاء شبكات المياه وشبكات الصرف الصحي
                    ومعالجتها بالإضافة إلى حفر الآبار
                  </li>
                  <li>
                    - تصميم وإنشاء شبكات المياه{" "}
                    <span className="font-bold">
                      بولاية البحر الأحمر للمنطقة الحرة
                    </span>
                    بحوالي 40 كم.
                  </li>
                  <li>
                    - تصميم وإنشاء شبكات المياه والصرف{" "}
                    <span className="font-bold">بمستشفى النور بأم درمان</span>.
                  </li>
                  <li>
                    - تصميم وإنشاء نظام تجهيزات الحريق{" "}
                    <span className="font-bold">لوزارة الخارجية</span>.
                  </li>
                  <li>
                    - تصميم وإنشاءمحطة مياة دار السلام لصالح{" "}
                    <span className="font-bold">منظمة كير العالمية</span>
                  </li>
                  <li>
                    - تصميم وإنشاءمحطة مياة مركز زالنجي لصالح{" "}
                    <span className="font-bold">منظمة UNOPS العالمية</span>
                  </li>
                  <li>
                    - تركيب نظام معالجة المياه{" "}
                    <span className="font-bold">
                      لشركة روات للبترول المحدودة
                    </span>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col basis-1/2 md:flex-row">
            <div className="bg-white p-4 md:p-16 flex justify-end items-center flex-1">
              <Image
                src={oil_works_image}
                className="w-full md:drop-shadow-md"
                alt="قسم اعمال و محطات البترول"
              />
            </div>
            <div className="p-4 md:p-16 flex justify-start items-center flex-1">
              <div className="max-w-md">
                <div className="w-24 h-2 bg-orange-500 mb-4"></div>
                <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
                  قسم اعمال و محطات البترول
                </h2>

                <ul className="font-light text-gray-600 text-base md:text-base mb-6 leading-relaxed text-justify">
                  <li>
                    {" "}
                    - تصنيع وتركيب خزانات الوقود المرتفعة{" "}
                    <span className="font-bold">
                      (شركة اراك فود و ايات للنفط والخدمات)
                    </span>
                    .
                  </li>
                  <li>
                    - تصميم وتصنيع الخزانات العمودية{" "}
                    <span className="font-bold">(ايات للنفط والخدمات)</span>.
                  </li>
                  <li>
                    - تصنيع وتركيب صهاريج الشاحنات{" "}
                    <span className="font-bold">(شركة الراكى - ايات)</span>.
                  </li>
                  <li>
                    - تصنيع خزانات الوقود المتنقلة{" "}
                    <span className="font-bold">(CNPC - السودان)</span>.
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col basis-1/2 md:flex-row">
            <div className="bg-white p-4 md:p-16 flex justify-end items-center flex-1">
              <Image
                src={construction_image}
                className="w-full"
                alt="اعمال الانشاءات و المقاولات"
              />
            </div>
            <div className="p-4 md:p-16 flex justify-start items-center flex-1">
              <div className="max-w-md">
                <div className="w-24 h-2 bg-orange-500 mb-4"></div>
                <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
                  اعمال الانشاءات و المقاولات
                </h2>
                <p className="font-light text-gray-600 text-base md:text-base mb-6 leading-relaxed text-justify">
                  {" "}
                  باستخدام احدث المعدات و الاليات مع جيش من أمهر العمالة و
                  الحرفيين قامت الشركة بانجاز العديد من المشاريع الهندسة وتشييد
                  العديد من المباني الخدمية والطرق الاسفلتية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:p-20 p-4 bg-gray-100 ">
        <h2 className="text-center font-header pt-10 text-4xl  font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          مشاريع نحن فخورون بالقيام بها
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          نحن فعلاً فخورون بهذة الانجازات
        </h3>
        <div className="md:flex md:px-16 gap-5 mt-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="bg-slate-900 text-white md:p-20 py-20 px-4">
        <div className="">
          <h2 className="text-center font-header mb-10 text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            شركات تعاقدنا معها من قبل
          </h2>
          <div className="flex flex-wrap items-center justify-center  bg-white">
            <span className="m-8 block">
              <Image
                src={com_log1}
                alt="client logo"
                className="mx-auto block h-20 w-auto"
              />
            </span>
            <span className="m-8 block">
              <Image
                src={com_log2}
                alt="client logo"
                className="mx-auto block h-20 w-auto"
              />
            </span>

            <span className="m-8 block">
              <Image
                src={com_log3}
                alt="client logo"
                className="mx-auto block h-20 w-auto"
              />
            </span>

            <span className="m-8 block">
              <Image
                src={com_log4}
                alt="client logo"
                className="mx-auto block h-20 w-auto"
              />
            </span>

            <span className="m-8 block">
              <Image
                src={com_log5}
                alt="client logo"
                className="mx-auto block h-20 w-auto"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
