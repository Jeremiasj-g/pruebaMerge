"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartSummary() {
    const { cart, removeFromCart, clearCart, addToCart, substractOneFromCart } = useCart();

    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePayment = async () => {
        const items = cart.map(item => ({
          title: item.title,
          quantity: item.quantity,
          unit_price: item.price, // mapeo de price a unit_price
        }));
    
        try {
          const response = await fetch("/api/mercadopago", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items }),
          });
    
          const data = await response.json();
          if (data.url) {
            window.location.href = data.url; // Redirige al URL de pago
          } else {
            console.error("No se recibió una URL de pago válida.");
          }
        } catch (error) {
          console.error("Error al generar el pago:", error);
        }
      };
    

    return (
        <div className="p-4 w-[1200]  bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Carrito de Compras</h2>
            {cart.length > 0 ? (
                <div className="w-[900px] space-y-4">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex  items-center border-b border-gray-200 py-4"
                        >
                            <div className="flex mr-4">
                                <Image
                                    src={item.image} 
                                    alt={item.title}
                                    width={120}
                                    height={120}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <div className="flex items-center mt-2">
                                    <button
                                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                                        onClick={() => substractOneFromCart(item)}
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button
                                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                                        onClick={() => addToCart({ ...item, quantity: 1 })}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-lg font-semibold">${item.price * item.quantity}</p>
                                <button
                                    className="text-red-500 text-sm mt-1"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
                        <h3 className="text-xl font-bold">Monto Total:</h3>
                        <p className="text-xl font-bold">${calculateTotalAmount()}</p>
                    </div>
                    <div className="flex justify-start">
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={clearCart}
                        >
                            Vaciar carrito
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={handlePayment}
                        >
                            Generar Pago
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">Tu carrito está vacío.</p>
            )}
        </div>
    );
}
