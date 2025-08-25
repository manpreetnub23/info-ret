"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProgressBar from "./ProgressBar";

export default function Navbar({ loading = false }: { loading?: boolean }) {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex flex-col">
            <div className="flex items-center justify-between p-6 
                      bg-gradient-to-r from-gray-900 via-black to-gray-900 
                      border-b border-gray-700 shadow-lg">
                <div className="text-white text-2xl font-extrabold tracking-wide cursor-pointer">
                    <Link href="/">profiles</Link>
                </div>

                <ul className="flex space-x-8">
                    <li>
                        <Link
                            href="/"
                            className={`relative px-3 py-2 font-semibold transition-all duration-300 
                  ${pathname === "/" ? "text-red-500 after:w-full" : "text-white hover:text-red-500"}`}
                        >
                            <span className="relative z-10">Home</span>
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
                  ${pathname === "/create" ? "text-red-500 after:w-full" : "text-white hover:text-red-500"}`}
                        >
                            <span className="relative z-10">Create</span>
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 
                  ${pathname === "/create" ? "w-full" : "w-0"}`}
                            />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* ProgressBar always under navbar */}
            <ProgressBar loading={loading} />
        </nav>
    );
}
