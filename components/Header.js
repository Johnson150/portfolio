"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const navItems = [
        { label: "About Me", href: "/" },
        { label: "Resume", href: "/resume" },
        { label: "Projects", href: "/projects" },
    ];

    return (
        <div>
            <ul className="flex gap-5 p-10">
                {navItems.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className={
                                pathname === link.href ? "text-blue-500 font-bold" : ""
                            }
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
