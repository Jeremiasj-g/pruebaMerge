import express from "express";
import { cartController } from "./controller";

import { authRoutes } from "../../middlewares/authRoutes";

const {  addCart, getCarts, getCart, updateCart, deleteCart } = cartController;
const cartRouter = express.Router();

cartRouter.use(authRoutes);

cartRouter.get("/getCarts", getCarts);
cartRouter.get("/getCart/:id", getCart);
cartRouter.post("/addCart", addCart);
//cartRouter.post("/confirmCart", (req, res) => {});
cartRouter.put("/updateCart/:id", updateCart); // es x si no expiro poder seguir add product al cart
cartRouter.delete("/deleteCart/:id", deleteCart);

export default cartRouter;
