"use client";
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
        <div className="bg-black font-mono relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-full matrix-rain-animation z-1"></div>


            <ul className="flex gap-5 p-10 text-green-300 relative z-10">
                {navItems.map((link, index) => (
                    <li key={index} className="hover:text-green-500">
                        <Link
                            href={link.href}
                            className={
                                pathname === link.href ? "text-green-500 font-bold" : "text-green-300 hover:text-green-500"}
                        >

                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default Header;


