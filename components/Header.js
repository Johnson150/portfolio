import Link from "next/link";
import { usePathname } from "next/navigation";
import '../app/globals.css';

const Header = () => {
    const pathname = usePathname();

    const navItems = [
        { label: "About Me", href: "/" },
        { label: "Resume", href: "/resume" },
        { label: "Projects", href: "/project" },
    ];

    return (
        <div className="bg-gradient-to-r from-purple-800 to-blue-500 font-mono w-full z-30 shadow-lg">
            <div className="absolute inset-0 w-full h-full matrix-rain-animation z-10 opacity-75"></div>
            <ul className="flex justify-center gap-8 p-5 text-lg text-white relative z-20">
                {navItems.map((link, index) => (
                    <li key={index} className={`${pathname === link.href ? "font-bold underline" : "hover:underline"}`}>
                        <Link
                            href={link.href}
                            className={`${pathname === link.href ? "text-white" : "text-green-300 hover:text-white"}`}
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
