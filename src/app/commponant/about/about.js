import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-16 relative after:absolute after:bottom-[-12px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
          عنّي
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden ">
              <Image
                src="/web.svg"
                alt="عمل على المشروع"
                width={600}
                height={320}
                className="w-full"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl text-black font-bold mb-6">مرحبًا، أنا علاء</h3>
            <p className="text-gray-600 mb-6">
              مطور واجهات أمامية بخبرة تزيد عن 4 سنوات في تصميم وتطوير مواقع الويب. متخصص في إنشاء تجارب مستخدم متميزة باستخدام HTML5, CSS3,Bootstrap,Tailwind Css, JavaScript,React.js,Next.js .
            </p>
            <p className="text-gray-600 mb-8">
              أؤمن بأن الجمع بين التصميم الجذاب والأداء العالي هو سر نجاح أي موقع ويب. لذلك أركز دائمًا على إنشاء حلول سريعة وسهلة الاستخدام.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-2 gap-3">
                  <FaCheckCircle className="text-primary text-xl mr-2" />
                  <span className="font-bold text-primary">HTML/CSS</span>
                </div>
                <div className="text-gray-600">بناء هيكل قوي وتصميم متجاوب</div>
              </div>
              <div>
                <div className="flex items-center mb-2 gap-3">
                  <FaCheckCircle className="text-primary text-xl mr-2" />
                  <span className="font-bold text-primary">JavaScript</span>
                </div>
                <div className="text-gray-600">وظائف تفاعلية وسلسة</div>
              </div>
              <div>
                <div className="flex items-center mb-2 gap-3">
                  <FaCheckCircle className="text-primary text-xl mr-2" />
                  <span className="font-bold text-primary">React JS</span>
                </div>
                <div className="text-gray-600">تطبيقات ويب معقدة</div>
              </div>
              <div>
                <div className="flex items-center mb-2 gap-3">
                  <FaCheckCircle className="text-primary text-xl mr-2" />
                  <span className="font-bold text-primary">Next JS</span>
                </div>
                <div className="text-gray-600">  يدعم SEO بشكل قوي. </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}