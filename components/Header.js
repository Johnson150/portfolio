import Link from "next/link";
import { usePathname } from "next/navigation";
import '../app/globals.css';

const Header = () => {
    const pathname = usePathname();

    const navItems = [
        { label: "About Me", href: "/" },
        { label: "Resume", href: "/resume" },
        { label: "Projects", href: "/project" },
        { label: "Contact Me", href: "/contactpage" },
    ];

    return (
        <div className="bg-gradient-to-r from-purple-900 to-blue-600 font-mono w-full z-10 shadow-lg relative">
            <div className="absolute inset-0 w-full h-full bg-black opacity-75"></div>
            <ul className="flex justify-center gap-8 p-5 text-lg text-white relative z-20">
                {navItems.map((link, index) => (
                    <li key={index} className={`${pathname === link.href ? "font-bold underline" : "hover:underline"}`}>
                        <Link
                            href={link.href}
                            className={`${pathname === link.href ? "text-blue-400" : "hover:text-blue-400"}`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
