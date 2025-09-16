/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaHome,
    FaInfoCircle,
    FaCog,
    FaSignOutAlt,
    FaHashtag,
} from "react-icons/fa";

/**
 * @file Sidebar.tsx
 * @description Komponen Sidebar ini adalah navigasi utama untuk aplikasi dashboard BioMA11 IoT.
 * Dia punya logo aplikasi, daftar menu navigasi (Dashboard, Alerts, Settings)
 * yang akan aktif sesuai halaman yang sedang dibuka (`usePathname` dari Next.js),
 * dan di bagian bawah ada info user beserta tombol logout. Jadi, ini adalah inti dari
 * navigasi aplikasi yang konsisten di setiap halaman.
 * @example <Sidebar />
 */
interface NavItem {
    name: string;
    href: string;
    icon: React.ElementType; // Icon dari react-icons
}

// Data menu navigasi yang diperbarui
const navItems: NavItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: FaHome },
    { name: "Alerts", href: "/alerts", icon: FaInfoCircle },
    { name: "Settings", href: "/settings", icon: FaCog },
];

const Sidebar = () => {
    const pathname = usePathname(); // Hook dari Next.js untuk dapetin path URL saat ini

    return (
        <div className="w-64 bg-blue-800 text-white flex flex-col h-screen shadow-lg">
            <div className="flex items-center p-6 bg-blue-900 border-b border-blue-700">
                <FaHashtag className="text-3xl text-blue-300 mr-3" />
                <h2 className="text-xl font-bold">BioMA11 IoT</h2>
            </div>

            <nav className="flex-grow mt-6">
                <ul>
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center px-6 py-3 text-base font-medium transition-colors duration-200 ease-in-out
                                        ${
                                            pathname === item.href
                                                ? "bg-blue-700 text-white"
                                                : "hover:bg-blue-700"
                                        }`}
                                >
                                    <IconComponent className="mr-4 text-xl" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            {/* Container ini sekarang berada di luar nav dan akan didorong ke bawah */}
            <div className="p-6 bg-blue-800 border-t border-blue-700 mt-auto">
                <div className="flex items-center mb-4">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3 border-2 border-blue-400"
                    />
                    <div>
                        <p className="font-semibold text-lg">Admin User</p>
                        <p className="text-sm text-blue-200">admin@bioma11-iot.id</p>
                    </div>
                </div>
                <Link
                    href="/"
                    className="flex items-center text-red-300 hover:text-red-100 transition-colors duration-200 ease-in-out"
                >
                    <FaSignOutAlt className="mr-3 text-xl" />
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;