"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const navItems = [
        { label: "About Me", href: "/" },
        { label: "Resume", href: "/resume" },
        { label: "Projects", href: "/project" },
    ];

    return (
        <div className="bg-black"> {/* Header background color */}
            <ul className="flex gap-5 p-10 text-white"> {/* Text color and padding */}
                {navItems.map((link, index) => (
                    <li key={index} className="hover:text-green-600"> {/* Hover effect */}
                        <Link
                            href={link.href}
                            className={
                                pathname === link.href ? "text-green-500 font-bold" : "hover:text-green-600"
                            } // Active link styling
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
