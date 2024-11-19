import Link from 'next/link'
import React from 'react'

export default function ProductCart() {
    return (
        <Link className='hover:opacity-75' href={"/products/1"}>
            <div className='p-2 rounded shadow bg-white-100'>
                <div className='w-[250px] h-[200px] relative'>
                    <img className='w-full h-full rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnjU4L7Wh-OlfvHDPkZFPR6saF5KOzAKlanQ&s'/>
                </div>
                <h3 className='font-semibold'>SSD WD GREEN 240GB</h3>
                <p>$50000</p>
            </div>
        </Link>
    )
}
