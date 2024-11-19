import React from 'react';
import Link from "next/link";

const navItems = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Products',
        route: '/products'
    },
    {
        label: 'Contact',
        route: '/contact'
    }
];

export default function Navegation() {
    return (
        <div className="flex justify-center items-center w-full h-14 bg-black">
        <nav className="flex gap-24">
        {navItems.map((item) => {
          return (
            <Link key={item.label} href={item.route} className="text-white hover:text-gray-300 hover:underline relative z-10">
              {item.label}
            </Link>
          );
        })}

      </nav>
      </div>
        );
}