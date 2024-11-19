import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import AddToCartButton from "../buttons/add-cart-button/AddToCartButton";

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
    <div onClick={handleClick} className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer flex flex-col justify-between">

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 p-4 object-contain bg-white transition-all hover:scale-110"
        />
      </div>

      <div className="flex flex-col p-6 gap-6">
        <div>
          <p className="font-bold text-xl mb-2">{product.title}</p>
          <p className="text-gray-700 text-base">{truncateText(product.description, 60)}</p>
        </div>

        <div className="">
          <span className="text-gray-900 font-bold text-lg">Price ${product.price}</span>
        </div>

        <div>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;