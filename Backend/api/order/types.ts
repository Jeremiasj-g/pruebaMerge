export interface IOrderProduct {
  product_id: string;
  quantity: number;
}

export interface IOrder {
  _id?: string;
  userId: string;
  products: IOrderProduct[];
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
