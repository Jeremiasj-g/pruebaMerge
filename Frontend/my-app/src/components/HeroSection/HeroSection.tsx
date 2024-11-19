import React from 'react'

const HeroSection = () => {
    return (
        <section className="flex items-center h-[52rem] px-0 py-10 relative bg-gradient-to-r from-indigo-600 to-purple-500 text-white">

            <div className="flex items-center container h-full mx-auto">
                <div className="flex-1 mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Bienvenido a E-commerce G2
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Las mejores ofertas, envíos rápidos y todas las facilidades de pago.
                    </p>
                    <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200">
                        Encuentra lo que buscas
                    </button>
                </div>

                <div className="flex-1 h-3/4 relative">
                    <img src="/heroPurple.svg" alt="" className="h-full w-full" />
                </div>
            </div>

        </section>
    )
}

export default HeroSection