/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import ButtonInput from "@/components/buttons/input/ButtonInput";
import AddToCartButton from "@/components/buttons/add-cart-button/AddToCartButton";
import Loader from "@/components/loaders/Loader";

async function fetchProductById(id: string) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const mockFetchRatingAndComments = async (productId: string) => {
  return {
    rating: 4.2,
    comments: [
      "Excelente producto, muy recomendado!",
      "Cumple con lo prometido.",
      "Podría mejorar la calidad, pero en general bien.",
    ],
  };
};

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cantidad, setCantidad] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const getProductData = async () => {
      const productData = await fetchProductById(id);
      if (productData) {
        setProduct(productData);
        const { rating, comments } = await mockFetchRatingAndComments(id);
        setRating(rating);
        setComments(comments);
      } else {
        setError("Producto no encontrado.");
      }
      setLoading(false);
    };

    getProductData();
  }, [id]);

  const handleDecrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setCantidad(prev => prev + 1);
  const openModal = (image: string) => { setSelectedImage(image); setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); setSelectedImage(null); };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <>
      <div className="max-w-7xl min-h-[700px] mx-auto my-auto py-10 text-slate-900 flex flex-col md:flex-row">
        <div className="p-4 md:p-10 flex flex-col flex-1 gap-4 md:gap-10">
          <figure
            className="border border-gray-300 w-full h-60 md:h-[500px] p-4 md:p-6 rounded-3xl overflow-hidden cursor-pointer"
            onClick={() => openModal(product.image)}
          >
            <img
              src={product.image}
              alt={`imagen del producto ${product.title}`}
              className="w-full h-full object-contain transition-all hover:scale-110"
            />
          </figure>
        </div>

        <div className="p-4 md:p-10 flex-1 flex flex-col justify-center">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-10">{product.title}</h1>
          <p className="text-gray-500 mb-4 md:mb-10">{product.description}</p>
          <p className="font-bold text-xl md:text-2xl mb-4 md:mb-10">Precio: ${product.price}</p>

          <div className="flex items-center space-x-2 md:space-x-4 mt-4 md:mt-6">
            <ButtonInput onClick={handleDecrease}>-</ButtonInput>
            <input
              type="number"
              className="w-12 md:w-16 h-8 md:h-10 text-center border-2 border-gray-300 bg-gray-200 rounded-lg"
              value={cantidad}
              readOnly
            />
            <ButtonInput onClick={handleIncrease}>+</ButtonInput>
            <AddToCartButton />
          </div>

          <div className="mt-6 md:mt-10">
            <p className="font-semibold mb-2">Puntuación:</p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-lg md:text-2xl ${star <= Math.round(rating) ? "text-yellow-500" : "text-gray-300"
                    }`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-gray-500 text-sm md:text-base">({rating.toFixed(1)})</span>
            </div>
          </div>


          <div className="mt-6 md:mt-10">
            <p className="font-semibold mb-2">Comentarios:</p>
            <div className="mb-4">
              {comments.map((comment, index) => (
                <p key={index} className="text-gray-700 text-sm md:text-base mb-2">
                  - {comment}
                </p>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Agregar un comentario"
                className="w-full md:flex-1 border border-gray-300 rounded-lg p-2"
              />
              <button
                onClick={handleCommentSubmit}
                className="px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-600 w-full md:w-auto"
              >
                Comentar
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative animate-zoomIn">
            <button
              className="absolute top-2 right-2 text-black text-6xl transition-all hover:opacity-50 hover:scale-125"
              onClick={closeModal}
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt="Zoomed product"
              className="max-w-4xl max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
