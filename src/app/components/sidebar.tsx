/* eslint-disable @next/next/no-img-element */
'use client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import {
    FaHome,
    FaLaptop,
    FaChartBar, 
    FaInfoCircle, 
    FaCog,
    FaSignOutAlt,
    FaHashtag
} from 'react-icons/fa';

interface NavItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

const navItems: NavItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: FaHome },
    { name: 'Device Management', href: '/device-management', icon: FaLaptop },
    { name: 'Data Analytics', href: '/analytics', icon: FaChartBar },
    { name: 'Alerts', href: '/alerts', icon: FaInfoCircle }, 
    { name: 'Settings', href: '/settings', icon: FaCog },
];

const Sidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="w-64 bg-blue-800 text-white flex flex-col h-screen shadow-lg">
            {/* Logo/Nama Dashboard */}
            <div className="flex items-center p-6 bg-blue-900 border-b border-blue-700">
                <FaHashtag className="text-3xl text-blue-300 mr-3" /> 
                <h2 className="text-xl font-bold">BioMA11 IoT</h2>
            </div>

            {/* Item Navigasi Utama */}
            <nav className="flex-grow mt-6">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className={`flex items-center px-6 py-3 text-base font-medium transition-colors duration-200 ease-in-out
                ${pathname === item.href ? 'bg-blue-700 text-white' : 'hover:bg-blue-700'}`}
                            >
                                <item.icon className="mr-4 text-xl" /> 
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-6 bg-blue-800 border border-blue-700">
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
                <Link href="/logout" className="flex items-center text-red-300 hover:text-red-100 transition-colors duration-200 ease-in-out">
                    <FaSignOutAlt className="mr-3 text-xl" />
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;