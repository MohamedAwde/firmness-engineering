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
            تعمل شركة فيرمينست في المجالات الهندسية الحيوية و المقاولات بالإضافة
            إلى أعمال محطات تحلية وتوزيع المياه اعتمادا على الخبرات المتراكمة
            نتيجة تعاون الشركة مع المؤسسات المحلية و الدولية و الحكومية,كما قامت
            الشركة ببناء فريق من الفنيين و الحرفيين المهرة لإنجاز الأعمال
            الانشائية بكفائة عالية. تضع شركة فيرمينست السلامة المهنية من ضمن
            أولوياتها وذلك من خلال تدريب العاملين فيها بورش عمل تقلل من المخاطر
            المهنية وتزيد من انتاجية العمال.
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
