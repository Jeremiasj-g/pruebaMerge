import { ICart } from "../../types";
import { cartDao } from "./dao";

const { addCart, getCarts, getCart, updateCart, deleteCart} = cartDao;

class CartService {
  async getCarts() {
    try {
      const carts = await getCarts();
      return carts;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getCart(id: string){
    try {
      const getCartById = await getCart(id)
      return getCartById
    } catch (error) {
      
    }
  }
  async addCart(cart: ICart) {
    try {
      const newCart = await addCart(cart);
      return newCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async updateCart(id: string, cart: ICart) {
    try {
      const updatedCart = await updateCart(id, cart);
      return updatedCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCart(id: string){
    try {
      const deletedCart= await deleteCart(id)
      return deletedCart
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const cartService = new CartService();
