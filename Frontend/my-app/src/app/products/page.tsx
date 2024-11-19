"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product } from '../../types/product';
import ProductCard from '../../components/product-card';

export default function ProductsPage() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const baseUrl = `https://fakestoreapi.com/products`;
                const url = searchQuery ? `${baseUrl}?search=${encodeURIComponent(searchQuery)}` : baseUrl;
                
                const response = await fetch(url);
                console.log("el url es", url);

                if (!response.ok) throw new Error("Error fetching products");

                const data = await response.json();
                const formattedData = data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    category: item.category,
                    description: item.description,
                    image: item.image,
                    quantity: 1,
                }));

                setProducts(formattedData);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Error fetching products");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [searchQuery]); 

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
