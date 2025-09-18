import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function CarouselCommponant() {
	return (
		<section id="home" className="pt-32 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 mb-10 md:mb-0">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">أنا <span className="text-yellow-300">مطور واجهات أمامية</span></h1>
						<p className="text-xl mb-8">أقوم بإنشاء مواقع ويب سريعة وجذابة باستخدام أحدث التقنيات مع التركيز على تجربة المستخدم والأداء العالي.</p>
						<div className="flex flex-wrap gap-4">
							<Link href="#projects" className="bg-white text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition">أعمالي</Link>
							
							    <Link
              href="/Cv.docx" // رابط مباشر لملف السيرة الذاتية
              download // هذا السمة تخبر المتصفح بتنزيل الملف بدلاً من فتحه
            className="border-2 flex gap-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition"            >
              <FaDownload className="text-lg" />
              <span>تنزيل السيرة الذاتية</span>
            </Link>
						</div>
					</div>
					<div className="md:w-1/2 flex justify-center">
						<div className="relative">
							<div className="w-80 h-80  overflow-hidden ">
								<Image
									src={"/div.png"}
                                    
									alt="صورة الشخصية"
									width={320}
									height={320}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="absolute -bottom-2 -right-2 bg-accent text-white px-6 py-2 rounded-full shadow-lg">
								<span>مطوّر ويب</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</section>
	);
}