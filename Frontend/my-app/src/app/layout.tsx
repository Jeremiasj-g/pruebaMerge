import React from 'react'
import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from "next/font/google"
import Header from '../components/Header'
import Footer from '../components/Footer'

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Proyecto final del grupo 2",
};

export default function Layout({children} : {children: React.ReactNode}) {
    return (
        <html lang='en' className={`${montserrat.variable}`}>
            <body className='flex flex-col min-h-screen bg-white-200 font-montserrat'>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}
