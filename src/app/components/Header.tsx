'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {
    const pathname = usePathname();
    return (
        <header className="w-full py-4 px-6 flex justify-between items-center relative z-9999999">
            <div className="text-2xl font-bold text-purple-400"></div>
            <nav className="space-x-[55px]">
                <Link href="#" className={`text-white text-xl ${pathname=='/'? "active-link":""}`}>Home</Link>

                <Link href="#" className="text-white text-xl">About Us</Link>
                <Link href="#" className="text-white text-xl">Services</Link>
                <Link href="#" className="text-white text-xl">Contact Us</Link>
            </nav>
            <button className="register_btn text-white font-bold py-2 px-4 rounded-full">
                Register
            </button>
        </header>
    )
}

export default Header