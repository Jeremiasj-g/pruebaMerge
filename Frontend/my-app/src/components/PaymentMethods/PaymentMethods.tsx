import React from 'react'
import { MarqueeDemo } from '../MarqueeDemo/MarqueeDemo'

const PaymentMethods = () => {
    return (
        <section className="bg-white py-16 mt-20">
            <div className="container max-w-[800px] mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Medios de Pago Disponibles</h2>

                <MarqueeDemo />
            </div>
        </section>
    )
}

export default PaymentMethods