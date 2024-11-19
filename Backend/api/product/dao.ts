import Product from "./model";
import { IProduct } from "../../types";

class ProductDao {
  async getAllProducts(
    categoryId: string | undefined,
    salersId: string | undefined,
    priceStart: number | undefined,
    priceEnd: number | undefined,
    sort: -1 | 1 | undefined,
    page: string,
    limit: string,
    keyword: string | undefined
  ) {
    try {
      const skip = (Number(page) - 1) * Number(limit);
      const products = await Product.find({
        stock: { $gt: 0 },
        ...(categoryId ? { categoryId } : {}),
        ...(salersId ? { salersId } : {}),
        ...(priceStart && priceEnd
          ? { price: { $gte: priceStart, $lte: priceEnd } }
          : {}),
        ...(keyword ? { name: { $regex: keyword, $options: "i" } } : {}),
      })
        .sort(sort && { price: sort })
        .skip(skip)
        .limit(Number(limit));
      return products;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getProductById(productId: string) {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createProduct(product: IProduct) {
    console.log("Product input to save DAO:", product); // Debug
    try {
      const newProduct = await Product.create(product);
      console.log("Product created DAO:", newProduct);
      return newProduct;
    } catch (error) {
      console.error('Error in DAO:', error);
      throw Error((error as Error).message);
    }
  }
  async editProduct(productId: string, product: IProduct) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        product,
        { new: true }
      );
      return updatedProduct;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteProduct(productId: string) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      return deletedProduct;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const productDao = new ProductDao();
