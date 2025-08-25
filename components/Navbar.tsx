"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-700 shadow-lg">
            <div className="text-white text-2xl font-extrabold tracking-wide">
                profiles
            </div>

            <ul className="flex space-x-8">
                <li>
                    <Link
                        href="/"
                        className={`relative px-3 py-2 font-semibold transition-all duration-300 
                            ${pathname === "/" ? "text-red-500 after:w-full" : "text-white hover:text-red-500"}
                        `}
                    >
                        <span className="relative z-10">Home</span>
                        {/* Underline effect */}
                        <span
                            className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 
                            ${pathname === "/" ? "w-full" : "w-0"}`}
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        href="/create"
                        className={`relative px-3 py-2 font-semibold transition-all duration-300 
                            ${pathname === "/create" ? "text-red-500 after:w-full" : "text-white hover:text-red-500"}
                        `}
                    >
                        <span className="relative z-10">Create</span>
                        <span
                            className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 
                            ${pathname === "/create" ? "w-full" : "w-0"}`}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
