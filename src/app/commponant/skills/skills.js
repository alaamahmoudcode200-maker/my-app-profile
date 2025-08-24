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
				<div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl text-black font-bold mb-6">مستوى المهارات</h3>
						<div className="space-y-6">
							{levels.map((level, idx) => (
								<div key={idx}>
									<div className="flex text-primary font-bold justify-between items-center mb-2">
										<span>{level.label}</span>
										<span className="text-primary font-bold">
											{level.percent}%
										</span>
									</div>
									<div className="w-full bg-gray-300 rounded-full h-2.5">
										<div
											className="bg-primary h-2.5 rounded-full"
											style={{ width: `${level.percent}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<h3 className="text-2xl text-black  font-bold mb-6">لماذا تختارني؟</h3>
						<div className="bg-white h-60 rounded-2xl p-6 text-gray-600 shadow-lg">
							<ul className="space-y-4">
								{reasons.map((reason, idx) => (
									<li key={idx} className="flex gap-3 items-start">
										<FaCheckCircle className="text-primary text-xl mr-3 mt-1" />
										<span>{reason}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}