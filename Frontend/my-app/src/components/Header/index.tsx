import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='grid grid-cols-6 px-6 py-4 bg-white-100 shadow'>
        <h1 className='text-lg font-semibold'>E-commerce</h1>

        <nav className='flex justify-center col-span-4 gap-4'>
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Productos</Link>
            <Link href={"/about"}>Nosotros</Link>
        </nav>
    </header>
  )
}
