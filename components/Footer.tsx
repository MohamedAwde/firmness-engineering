import Link from "next/link";
import ContactInfo from "./ContactInfo";
import Logo from "./Logo";
import MainButton from "./MainButton";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-500 md:p-16 p-4 text-white pb-0">
      <div className="sm:flex block justify-between basis-1/3">
        <div>
          <h6 className="text-4xl my-4">شركة فيرمنس</h6>
          <div className="bg-white p-4 rounded-sm mb-4">
            <Logo />
          </div>
          <p className="max-w-sm">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات
          </p>
          <MainButton url="/services" text="تعرف علينا اكثر" />
        </div>
        <div>
          <h6 className="text-4xl my-4">تواصل معنا</h6>
          <ContactInfo />
        </div>
        <div>
          <h6 className="text-4xl my-4">روابط سريعة</h6>
          <ul className="pr-8">
            <li>
              <Link href="/services">خدماتنا</Link>
            </li>
            <li>
              <Link href="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-50 text-center py-4 mt-4">
        <p>
          شركة فيرمنس للمقاولات - كل الحقوق محفوظة©{new Date().getFullYear()} تم
          التصميم بواسطة
          <a
            href="https://mohamedawde.github.io/portfolio-ar/"
            target={"_blank"}
          >
            {" "}
            محمد عوض
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
