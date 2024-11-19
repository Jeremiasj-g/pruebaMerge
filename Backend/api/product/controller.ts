import { Request, Response } from "express";
import { productService } from "./service";
import { ISearchParams } from "./types";
const { getProduct, getProducts, createProduct, deleteProduct, editProduct } =
  productService;

class ProductController {
  async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
      const product = await getProduct(id);
       
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  async getProducts(req: Request, res: Response) {
    const searchParams: ISearchParams = req.query;

    try {
      const products = await getProducts(searchParams);
      return res.status(200).json(products);

    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  
  async createProduct(req: Request, res: Response) {
    try {
      const productBody = req.body;
      const files = req.files as Express.Multer.File[]; // Los archivos cargados
      if (!files || files.length === 0) {
        res.status(400).json({ message: 'No file uploaded' });
        return;
      }
  
      // Delegar al servicio
      const product = await createProduct(productBody, files);
      console.log('Product created controller:', product);
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  // async createProduct(req: Request, res: Response) {
  //   try {
  //     const productBody = req.body;
  //     const file = req.file; // El archivo cargado
  
  //     if (!file) {
  //       res.status(400).json({ message: 'No file uploaded' });
  //       return;
  //     }
  
  //     // Delegar al servicio
  //     const product = await createProduct(productBody, file.path);
  //     console.log('Product created controller:', product);
  //     res.status(201).json(product);
  //   } catch (error) {
  //     console.error('Error creating product:', error);
  //     res.status(500).json({ message: 'Server error' });
  //   }
  // }

  // async createProduct(req: Request, res: Response) {
  //   const product = req.body;
  //   try {
  //     const newProduct = await createProduct(product);
  //     return res.status(200).json(newProduct);
  //   } catch (error) {
  //     return res.status(500).json({ error });
  //   }
  // }
  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedProduct = await deleteProduct(id);
      return res.status(200).json(deletedProduct);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  async editProduct(req: Request, res: Response) {
    const { id } = req.params;
    const editedProductBody = req.body;
    try {
      const editedProduct = await editProduct(id, editedProductBody);
      return res.status(200).json(editedProduct);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export const productController = new ProductController();
