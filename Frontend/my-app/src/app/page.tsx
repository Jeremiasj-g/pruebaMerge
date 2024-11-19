import React from 'react' 
import ProductCart from '../components/ProductCard'


export default function HomePage() {
    return (
        <main className='py-5'>
            <section className='flex justify-center pb-4 border-b border-slate-200'>
            </section>
            <section className='flex justify-center gap-3'>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </section>
        </main>
    )
}
