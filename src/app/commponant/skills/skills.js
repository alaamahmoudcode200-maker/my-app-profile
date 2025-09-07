import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaCheckCircle } from "react-icons/fa";
import { SiNextdotjs, SiBootstrap, SiTailwindcss } from "react-icons/si"; // Import Bootstrap & Tailwind icons

const skills = [
	{
		icon: <FaHtml5 className="text-primary text-5xl mb-6" />,
		title: "HTML5",
		desc: "هيكلة نظيفة ودلالية لصفحات الويب مع التركيز على SEO وسهولة الوصول.",
	},
	{
		icon: <FaCss3Alt className="text-primary text-5xl mb-6" />,
		title: "CSS3",
		desc: "تصاميم responsive مبتكرة مع تأثيرات CSS فقط بدون مكتبات خارجية.",
	},
	{
		icon: <FaJsSquare className="text-primary text-5xl mb-6" />,
		title: "JavaScript",
		desc: "JavaScript نقي بدون إطارات عمل لتحقيق أقصى أداء وسرعة في التحميل.",
	},
	{
		icon: <SiBootstrap className="text-primary text-5xl mb-6" />, // Bootstrap icon
		title: "Bootstrap",
		desc: "Bootstrap إطار عمل CSS لتصميم مواقع متجاوبة وسريعة التطوير.",
	},
	{
		icon: <SiTailwindcss className="text-primary text-5xl mb-6" />, // Tailwind icon
		title: "Tailwind CSS",
		desc: "Tailwind إطار عمل CSS لتصميم مواقع جذابة و متجاوبة وسريعة التطوير.",
	},
	{
		icon: <FaReact className="text-primary text-5xl mb-6" />,
		title: "React",
		desc: "تطوير واجهات مستخدم تفاعلية باستخدام مكتبة React.",
	},
	{
		icon: <SiNextdotjs className="text-primary text-5xl mb-6" />,
		title: "Next.js",
		desc: "تطوير تطبيقات ويب متقدمة وسريعة باستخدام Next.js.",
	},
];

const levels = [
	{ label: "HTML5 & CSS3", percent: 95 },
	{ label: "JavaScript", percent: 90 },
    { label: "Bootstarp & Tailwind CSS", percent: 94 },
	{ label: "React & Next", percent: 85 },
];

const reasons = [
	"تصميم متجاوب يعمل على جميع الأجهزة",
	"كود نظيف وسهل الصيانة والتطوير",
	"تحسين لمحركات البحث (SEO)",
	"سرعة تحميل عالية وأداء متميز",
];

export default function Skills() {
	return (
		<section id="skills" className="py-20 bg-gray-100">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl text-black font-bold text-center mb-16 relative after:absolute after:bottom-[-12px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
					مهاراتي
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skills.map((skill, idx) => (
						<div
							key={idx}
							className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
						>
							<div className={"flex justify-center"}>{skill.icon}</div>
							<h3 className="text-xl text-black font-bold mb-4">{skill.title}</h3>
							<p className="text-gray-600">{skill.desc}</p>
						</div>
					))}
				</div>
			
			</div>
		</section>
	);
}