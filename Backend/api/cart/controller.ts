import { Request, Response } from "express";
import { cartService } from "./service";

const { addCart, getCarts, getCart, updateCart, deleteCart} = cartService;

class CartController {
  async getCarts(req: Request, res: Response) {
    try {
      const carts = await getCarts();
      return res.status(200).json(carts);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async getCart(req: Request, res: Response) {
    try {
      const getCartById = await getCart(req.params.id)
      return getCartById
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async addCart(req: Request, res: Response) {
    const cart = req.body;
    try {
      const newCart = await addCart(cart);
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async updateCart(req: Request, res: Response) {
    try{
      const cart = await updateCart(req.params.id, req.body)
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(500).json({ error: "The change is not found" });
    }
  }
  async deleteCart(req: Request, res: Response) {
    try{
      const { id } = req.params
      const deletedCart = await deleteCart(id)
      return deletedCart
    } catch (error) {
      return res.status(500).json({ error: "The change is not found" });
    }
  }
  // async confirmCart(req: Request, res: Response) {
  //   try {
  //     const cart = req.body;
  //     return res.status(200).json(cart);
  //   } catch (error) {
  //     return res.status(500).json({ error });
  //   }
  // }
}

export const cartController = new CartController();
