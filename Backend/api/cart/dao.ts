import Cart from "./model";
import { ICart } from "../../types";

class CartDao {
  async getCart(id: string) {
    try {
      const cart = await Cart.findById(id);
      return cart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getCarts() {
    try {
      const carts = await Cart.find();
      return carts;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async addCart(cart: ICart) {
    try {
      const newCart = await Cart.create(cart);
      return newCart;
    } catch (error) {
      console.log(error);
      throw Error((error as Error).message);
    }
  }
  async updateCart(id: string, cart: ICart) {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(id, cart, {
        new: true,
      });
      return updatedCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCart(id: string) {
    try {
      const deletedCart = await Cart.findByIdAndDelete(id);
      return deletedCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const cartDao = new CartDao();
