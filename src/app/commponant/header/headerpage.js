import Link from "next/link";
import { FaCode } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "#about", label: "عنّي" },
  { href: "#skills", label: "المهارات" },
  { href: "/projectsall", label: "المشاريع" },
  { href: "#contact", label: "التواصل" },
];

export default function HeaderPage() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="" className="text-primary font-bold text-2xl flex items-center">
          <FaCode className="mr-2" />
          Alaa Mahmoud
        </Link>
        <ul className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 font-bold text-black hover:text-primary transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
