import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
   // required: true,
    required: false,
  },
  subCategotyID:{
    type: Schema.Types.ObjectId,
    ref: "Category",
   // required: true,
    required: false,
  },
  salers_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required: true,
    required: false,
  },
  image: {
   type: [String],
    // type: String,
    required: true,
  },
});

const Product = model("Product", productSchema);

export default Product;
