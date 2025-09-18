import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram,FaCode } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                           <Link href="" className="text-white font-bold text-2xl flex items-center">
          <FaCode className="mr-2" />
          Alaa Mahmoud
        </Link>
                        <p className="text-gray-400">
                            أنا مطور واجهات أمامية متخصص في إنشاء مواقع ويب سريعة وجذابة مع التركيز على تجربة المستخدم والأداء العالي.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
                        <ul className="space-y-2">
                            <li><Link href="#home" className="text-gray-400 hover:text-white transition">الرئيسية</Link></li>
                            <li><Link href="#about" className="text-gray-400 hover:text-white transition">عنّي</Link></li>
                            <li><Link href="#skills" className="text-gray-400 hover:text-white transition">المهارات</Link></li>
                            <li><Link href="#projects" className="text-gray-400 hover:text-white transition">المشاريع</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-white transition">التواصل</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-6">وسائل التواصل</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition">
                                <FaTwitter className="text-2xl" />
                            </Link>
                            <Link href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition">
                                <FaLinkedinIn className="text-2xl" />
                            </Link>
                            <Link href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition">
                                <FaGithub className="text-2xl" />
                            </Link>
                           
                            <Link href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition">
                                <FaFacebookF className="text-2xl" />
                            </Link>
                            <Link href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition">
                                <FaInstagram className="text-2xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}