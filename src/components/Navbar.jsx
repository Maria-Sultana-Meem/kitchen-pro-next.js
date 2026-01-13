'use client';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Items', href: '/items' },
    { name: 'Add Item', href: '/add-item' },
    { name: 'Login', href: '/login' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="bg-[#CE8946] text-gray-100 fixed w-full z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">KitchenPro</div>

          
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-blue-400">
                {link.name}
              </Link>
            ))}
          </div>

          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
