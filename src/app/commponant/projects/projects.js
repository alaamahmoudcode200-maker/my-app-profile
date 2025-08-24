import Image from "next/image";

const projects = [
	{
		title: "متجر إلكتروني",
		desc: "متجر إلكتروني سريع مع نظام عربة تسوق وتجربة مستخدم محسنة.",
		tech: "HTML, CSS, JS",
		img: "/p.avif",
		gradient: "from-blue-400 to-purple-500",
	},
	{
		title: "منصة تحليلية",
		desc: "لوحة تحكم تفاعلية لعرض البيانات والإحصائيات برسومات بيانية.",
		tech: "React, Chart.js",
		img: "/p2.avif",
		gradient: "from-green-400 to-blue-500",
	},
	{
		title: "مدونة تقنية",
		desc: "مدونة بتصميم عصري مع نظام إدارة محتوى وتصنيفات متقدمة.",
		tech: "HTML, CSS, JS",
				img: "/p3.avif",
		gradient: "from-orange-400 to-red-500",
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl text-black  font-bold text-center mb-16 relative after:absolute after:bottom-[-12px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
					مشاريعي
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
						>
							<div
								className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
							>
								<Image
									src={project.img}
									alt={project.title}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 33vw"
									style={{ objectFit: "cover" }}
								/>
								<div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
									<a
										href="#"
										className="bg-white z-10 text-primary px-6 py-2 rounded-full font-bold mx-2  shadow focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary hover:text-white transition"
									>
										عرض
									</a>
									<a
										href="#"
										className="bg-primary text-white px-6 py-2 rounded-full font-bold mx-2"
									>
										التفاصيل
									</a>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl text-primary font-bold mb-3">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-4">
									{project.desc}
								</p>
								<div className="flex justify-between items-center">
									<span className="text-sm text-gray-500">
										{project.tech}
									</span>
									<a
										href="#"
										className="text-primary font-bold hover:underline"
									>
										عرض المشروع
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<a
						href="#"
						className="bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
					>
						عرض المزيد من المشاريع
					</a>
				</div>
			</div>
		</section>
	);
}