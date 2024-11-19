import express from "express";
import categoryController from "./controller";
import { adminRoutes } from "../../middlewares/adminRoutes";

const { getCategories, createCategory, updateCategory, deleteCategory } =
  categoryController;

const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);

categoryRouter.use(adminRoutes);
categoryRouter.post("/createCategory", createCategory);
categoryRouter.put("/updateCategory/:id", updateCategory);
categoryRouter.delete("/deleteCategory/:id", deleteCategory);

export default categoryRouter;
