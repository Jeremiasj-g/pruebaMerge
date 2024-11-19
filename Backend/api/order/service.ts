import orderDao from "./dao";
import { productDao } from "../product/dao";
import { IProduct } from "../../types";
import { IOrder, IOrderProduct } from "./types";

const { createOrder, getOrderById, getOrdersByUserId } = orderDao;
const { editProduct, getProductById } = productDao;

class OrderService {
  async getOrdersByUserId(userId: string) {
    try {
      const orderHistory = await getOrdersByUserId(userId);
      return orderHistory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getOrderById(id: string) {
    try {
      const order = await getOrderById(id);
      return order;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createOrder(order: IOrder) {
    const { products } = order;
    try {
      const newOrder = await createOrder(order);

      products.forEach(async (product: IOrderProduct) => {
        const productData = await getProductById(product.product_id);
        if (!productData) {
          throw Error("Product not found");
        }
        await editProduct(product.product_id!, {
          stock: productData.stock! - product.quantity!,
        });
      });

      return newOrder;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

const orderService = new OrderService();

export default orderService;
