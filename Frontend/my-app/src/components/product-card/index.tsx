import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer flex flex-col justify-between"
    >
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{truncateText(product.description, 60)}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-900 font-bold text-lg">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;