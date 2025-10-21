import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="w-full py-4 px-6 flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-400"></div>
            <nav className="space-x-[55px]">
                <Link href="#" className="text-white text-xl">Home</Link>
                <Link href="#" className="text-white text-xl">About Us</Link>
                <Link href="#" className="text-white text-xl">Services</Link>
                <Link href="#" className="text-white text-xl">Contact Us</Link>
            </nav>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                Register
            </button>
        </header>
    )
}

export default Header