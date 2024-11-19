export type UserRole = "admin" | "comprador" | "vendedor";

export interface IUser {
  _id: string | undefined;
  firts_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  role?: UserRole;
  image: string | undefined;
}

export interface IProduct {
  _id?: string;
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  // image?: string;
  image?: string[];
  categoryId: string;
  subCategoryId?: string
}

export interface ICart {
  user_id: string;
  products: { product_id: string; quantity: number }[];
  totalPrice: number;
}

export interface ICategory {
  _id: string | undefined;
  name: string;
  // no todas las categorías tendrán subcategorías, es opcional por eso el '?'
  subCategories?: ICategory[] 
}