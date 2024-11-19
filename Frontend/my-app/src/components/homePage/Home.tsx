"use client"
import Image from "next/image"
import ExclusiveOffers from "../ExclusiveOffers/ExclusiveOffers"
import PaymentMethods from "../PaymentMethods/PaymentMethods"
import HeroSection from "../HeroSection/HeroSection"

const Home = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <HeroSection />

            <ExclusiveOffers />

            {/* Features Section */}
            <section className=" py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">¿Por qué elegirnos?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="flex flex-col justify-center items-center bg-white shadow-md p-6 rounded-lg">
                            <Image
                                src="/camionetaEnvio.png"
                                alt="Visa"
                                width={200}
                                height={200}
                                className="grayscale hover:grayscale-0 transition"
                            />
                            <h3 className="text-xl font-semibold mb-3">Envíos a Todo el País</h3>
                            <p className="text-sm text-gray-600">
                                Recibe tus compras rápidamente en cualquier rincón del país.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex flex-col justify-center items-center bg-white shadow-md p-6 rounded-lg">
                            <Image
                                src="/pagar.png"
                                alt="Visa"
                                width={200}
                                height={200}
                                className="grayscale hover:grayscale-0 transition"
                            />
                            <h3 className="text-xl font-semibold mb-3">Múltiples Medios de Pago</h3>
                            <p className="text-sm text-gray-600">
                                Paga con tarjeta de crédito, débito, efectivo o mercado pago.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex flex-col justify-center items-center bg-white shadow-md p-6 rounded-lg">

                            <Image
                                src="/oferta.png"
                                alt="Visa"
                                width={200}
                                height={200}
                                className="grayscale hover:grayscale-0 transition"
                            />
                            <h3 className="text-xl font-semibold mb-3">Ofertas Diarias</h3>
                            <p className="text-sm text-gray-600">
                                Descubre descuentos nuevos todos los días en nuestras categorías.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payment Methods */}
            <PaymentMethods />

        </div>
    )
}

export default Home
