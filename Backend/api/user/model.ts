import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    requied: true,
  },
  role: {
    type: String,
    enum: ["admin", "comprador", "vendedor" ],
    default: "comprador",
  },
  image: {
    type: String,
    default: "",
  },
});

userSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password ?? "", 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.error(error);
  }
});

const User = model("User", userSchema);

export default User;
