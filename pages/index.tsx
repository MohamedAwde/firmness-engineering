import Image from "next/image";
import React from "react";
import MainButton from "../components/MainButton";
import aboutImage from "./../public/imgs/about.webp";
import onwer from "./../public/imgs/team/Mr Akash.jpg";
import water_works_image from "./../public/imgs/قسم اعمال و محطات المياة.webp";
import oil_works_image from "./../public/imgs/قسم اعمال و محطات البترول.webp";

function App() {
  return (
    <div>
      <header>
        <div id="hero">
          <div className="md:p-16 md:py-40 p-8 py-28">
            <h2 className="text-6xl mb-16 font-bold text-white leading-relaxed	md:leading-normal">
              نوازن بين الجمال و القوة
            </h2>
            <MainButton url="/services" text="تعرف اكثر علي خدماتنا" />
          </div>
        </div>
        <div className="md:grid gap-2 grid-cols-6 md:mt-[-90px] px-2 text-center">
          <div className="bg-gray-100  md:p-8 p-2 hover:bg-orange-500 hover:text-white duration-700 hover:cursor-default rounded-sm">
            <div className="pb-8 flex justify-center">
              <span className="fa fa-compass text-6xl p-4" />
            </div>
            <span className="md:text-2xl text-lg">خدمات البناء</span>
          </div>
          <div className="bg-gray-100  md:p-8 p-2 hover:bg-orange-500 hover:text-white duration-700 hover:cursor-default rounded-sm">
            <div className="pb-8 flex justify-center">
              <span className="fa fa-tools text-6xl p-4" />
            </div>
            <span className="md:text-2xl text-lg">صيانة المباني</span>
          </div>
          <div className="bg-gray-100  md:p-8 p-2 hover:bg-orange-500 hover:text-white duration-700 hover:cursor-default rounded-sm">
            <div className="pb-8 flex justify-center">
              <span className="fa fa-bolt text-6xl p-4" />
            </div>
            <span className="md:text-2xl text-lg">الأعمال الكهريبة</span>
          </div>
          <div className="bg-gray-100  md:p-8 p-2 hover:bg-orange-500 hover:text-white duration-700 hover:cursor-default rounded-sm">
            <div className="pb-8 flex justify-center">
              <span className="fa fa-water text-6xl p-4" />
            </div>
            <span className="md:text-2xl text-lg">محطات المياة</span>
          </div>
          <div className="bg-gray-100  md:p-8 p-2 hover:bg-orange-500 hover:text-white duration-700 hover:cursor-default rounded-sm">
            <div className="pb-8 flex justify-center">
              <span className="fa fa-store-alt text-6xl p-4" />
            </div>
            <span className="md:text-2xl text-lg">اعمال الفولاز</span>
          </div>
          <div className="bg-gray-100  md:p-8 p-2 hover:bg-orange-500 hover:text-white duration-700 hover:cursor-default rounded-sm">
            <div className="pb-8 flex justify-center">
              <span className="fa fa-gas-pump text-6xl p-4" />
            </div>
            <span className="md:text-2xl text-lg">اعمال البترول</span>
          </div>
        </div>
      </header>
      <main className="">
        <div className="md:flex-row flex flex-col-reverse md:p-16 p-4 ">
          <div className="flex-1 ">
            <h3 className="md:text-6xl text-4xl my-4">نبذة بسيطة عنا</h3>
            <p className="text-justify">
              تعمل شركة فيرمينست في المجالات الهندسية الحيوية و المقاولات
              بالإضافة إلى أعمال محطات تحلية وتوزيع المياه اعتمادا على الخبرات
              المتراكمة نتيجة تعاون الشركة مع المؤسسات المحلية و الدولية و
              الحكومية,كما قامت الشركة ببناء فريق من الفنيين و الحرفيين المهرة
              لإنجاز الأعمال الانشائية بكفائة عالية. تضع شركة فيرمينست السلامة
              المهنية من ضمن أولوياتها وذلك من خلال تدريب العاملين فيها بورش عمل
              تقلل من المخاطر المهنية وتزيد من انتاجية العمال.{" "}
            </p>
            <MainButton url="services" text="من نحن" />
          </div>
          <div className="flex-1 flex justify-center">
            <Image className="w-[300px] " src={aboutImage} alt="" />
          </div>
        </div>
        <div className="md:flex-row flex flex-col gap-4 md:p-28 md:px-16 p-4 bg-slate-900 text-white justify-between">
          <div className="border border-gray-100  duration-500 p-16 rounded-sm hover:border-orange-500 hover:cursor-default">
            <p className="text-center text-5xl p-2">
              <span className="fa fa-user text-orange-500" />
            </p>
            <h6 className="text-5xl font-bold m-4 text-center">0112</h6>
            <p className="text-center uppercase">عميل</p>
          </div>
          <div className="border border-gray-100 duration-500 p-16 rounded-sm hover:border-orange-500 hover:cursor-default">
            <p className="text-center text-5xl p-2">
              <span className="fa fa-handshake text-orange-500" />
            </p>
            <h6 className="text-5xl font-bold m-4  text-center">0166</h6>
            <p className="text-center uppercase">مشروع</p>
          </div>
          <div className="border border-gray-100 duration-500 p-16 rounded-sm hover:border-orange-500 hover:cursor-default">
            <p className="text-center text-5xl p-2">
              <span className="fa fa-truck  text-orange-500" />
            </p>
            <h6 className="text-5xl font-bold m-4  text-center">0112</h6>
            <p className="text-center uppercase">من المعدات</p>
          </div>
          <div className="border border-gray-100 duration-500 p-16 rounded-sm hover:border-orange-500 hover:cursor-default">
            <p className="text-center text-5xl p-2">
              <span className="fa fa-home  text-orange-500" />
            </p>
            <h6 className="text-5xl font-bold m-4  text-center">0112</h6>
            <p className="text-center uppercase">مبني</p>
          </div>
        </div>
        <div className="md:p-16 p-4 text-center">
          <h3 className="text-5xl my-4">اميز مشاريعنا</h3>
          <p>
            شركة عكاشة تختص تنفيز مشاريع المباني العالية , اليك اميز مشاريعنا
          </p>
          <div className="block md:flex justify-between gap-4 ">
            <div className="md:mt-16 mt-4 flex-1 border border-gray-200 p-4 rounded-sm text-right bg-gray-100">
              <Image className="w-full" src={water_works_image} alt="" />
              <h2 className="text-3xl my-2 ">قسم اعمال و محطات المياة</h2>
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
                  <span className="font-bold">لشركة روات للبترول المحدودة</span>
                </li>
              </ul>
            </div>
            <div className="md:mt-16 mt-4 flex-1 border border-gray-200 p-4 rounded-sm text-right bg-gray-100">
              <Image className="w-full" src={oil_works_image} alt="" />
              <h2 className="text-3xl my-2 "> قسم اعمال و محطات البترول</h2>
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
              </ul>
            </div>
          </div>
          <MainButton url="/services" text="المزيد من المشاريع المميزة" />
        </div>
        <div className="text-center gird place-items-center bg-slate-800 text-white p-16">
          <h2 className="mb-8"></h2>
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            تعرف علي فريق العمل
          </h2>
          <div className="my-8 ">
            <p className=" flex justify-center my-4">
              <Image
                className="w-[150px] h-[150px] rounded-full"
                src={onwer}
                alt="Mr. Akash"
              />
            </p>
            <h3 className="text-3xl">
              م.عكاشة عبد الله <span className="text-sm">المدير العام</span>
            </h3>
          </div>
          <div className="flex justify-evenly mb-4 flex-wrap">
            <div>
              <p className=" flex justify-center my-4">
                <Image
                  className="w-[150px] h-[150px] rounded-full"
                  src={onwer}
                  alt="Mr. Akash"
                />
              </p>
              <h3 className="text-3xl">
                م.محمد <span className="text-sm">مدير المشروعات</span>
              </h3>
            </div>
            <div>
              <p className=" flex justify-center my-4">
                <Image
                  className="w-[150px] h-[150px] rounded-full"
                  src={onwer}
                  alt="Mr. Akash"
                />
              </p>
              <h3 className="text-3xl">
                م.علي <span className="text-sm">مدير المشروعات</span>
              </h3>
            </div>
            <div>
              <p className=" flex justify-center my-4">
                <Image
                  className="w-[150px] h-[150px] rounded-full"
                  src={onwer}
                  alt="Mr. Akash"
                />
              </p>
              <h3 className="text-3xl">
                م.يس <span className="text-sm">مدير المشروعات</span>
              </h3>
            </div>
          </div>
          <MainButton url="/services" text="تعرف علينا اكثر" />
        </div>
      </main>
    </div>
  );
}

export default App;
