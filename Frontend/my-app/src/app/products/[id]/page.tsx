import Product from "./product";

async function fetchProduct(id: string) {
  try {
    const result = await fetch(`https://fakestoreapi.com/products/${id}`);
    console.log(`https://fakestoreapi.com/products/${id}`)
    if (!result.ok) throw new Error("Failed to fetch product");
    const product = await result.json();
    return product;
  } catch (error) {
    console.error(error);
    return null; 
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchProduct(id as string);

  return (
    <div className="w-[1200px] flex flex-col items-center">
      {product ? <Product product={product} /> : <p>Product not found</p>}
    </div>
  );
}
