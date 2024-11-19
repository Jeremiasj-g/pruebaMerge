"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../types/product";
import Loader from "../loaders/Loader";
import Link from "next/link";

const ExclusiveOffers = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExclusiveOffers = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) throw new Error("Error fetching products");

                const data: Product[] = await response.json();

                // Filtrar productos menores a 100 USD
                const affordableProducts = data.filter(product => product.price < 100);

                // Seleccionar 4 productos aleatorios
                const randomProducts = affordableProducts
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 4);

                setProducts(randomProducts);
            } catch (error) {
                console.error("Error fetching exclusive offers:", error);
                setError("Error loading offers");
            } finally {
                setLoading(false);
            }
        };

        fetchExclusiveOffers();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">{error}</div>;
    }

    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
                Precios imperdibles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {products.map(product => (
                    <div
                        key={product.id}
                        className="flex flex-col justify-between p-5 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
                    >
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={400}
                            height={250}
                            className="w-full h-64 object-contain"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Precio: ${product.price.toFixed(2)}
                            </p>
                            <Link href="products" className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
                                Ver más
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ExclusiveOffers;
