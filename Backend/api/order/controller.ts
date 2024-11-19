import { Request, Response } from "express";
import orderService from "./service";
import { IOrder } from "./types";

const { getOrdersByUserId, createOrder } = orderService;

class OrderController {
  async createOrder(req: Request, res: Response) {
    try {
      const order: IOrder = req.body;
      const newOrder = await createOrder(order);
      res.status(200).json(newOrder);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
  async getOrdersByUserId(req: Request, res: Response) {}
  async getOrderById(req: Request, res: Response) {}
}

const orderController = new OrderController();

export default orderController;
