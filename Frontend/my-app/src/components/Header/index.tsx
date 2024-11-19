import Link from 'next/link';
import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <header className='header-nav flex py-2 justify-center w-full fixed top-0 z-10'>
      <div className="container mx-auto grid grid-cols-6 items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold col-span-1">
          <Link className="hover:text-gray-400 transition-colors" href="/">
            E-commerce
          </Link>
        </h1>

        {/* Navigation */}
        <nav className="flex justify-center col-span-4 gap-6 font-bold">
          <Link className="hover:text-gray-400 transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-400 transition-colors" href="/products">
            Productos
          </Link>
          <Link className="hover:text-gray-400 transition-colors" href="/about">
            Nosotros
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex justify-end gap-4 col-span-1">
          <Link className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md shadow hover:bg-gray-100 transition-all" href="/login">

            Iniciar Sesión

          </Link>
          <Link className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md shadow hover:bg-gray-600 transition-all" href="/register">

            Registrarse

          </Link>
        </div>
      </div>
    </header>
  );
}
