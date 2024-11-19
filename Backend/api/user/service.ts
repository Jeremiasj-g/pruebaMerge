import { IUser, UserRole } from "../../types";
import { userDao } from "./dao";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "dotenv";
import fs from "fs";
import cloudinary from "../../config/cloudinary";

config();

const {
  getAllUsers,
  getUserById,
  getUserByMail,
  createUser,
  editUser,
  deleteUser,
  changeRole,
} = userDao;

class UserService {
  async getUser(id: string) {
    try {
      const user = await getUserById(id);
      return user;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getUsers() {
    try {
      const users = await getAllUsers();
      return users;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getUserByMail(email: string) {
    try {
      const user = await getUserByMail(email);
      return user;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createUser(userData: IUser, filePath: string) {
    try {
      // Subir la imagen a Cloudinary
      const uploadResult = await cloudinary.uploader.upload(filePath, {
        folder: 'users',
      });

      // Eliminar el archivo temporal después de subirlo
      fs.unlinkSync(filePath);

      // Preparar los datos del usuario
      const user = {
        ...userData,
        image: uploadResult.secure_url, // Agregar la URL de la imagen
      };

      console.log('User input to save service:', user);

      // Guardar en la base de datos
      return await createUser(user);
    } catch (error) {
      console.error('Error in service:', error);
      throw new Error((error as Error).message);
    }
  }
  async loginUser(user: { email: string; password: string }) {
    try {
      const { email, password } = user;
      const existingUser = await getUserByMail(email);
      if (!existingUser) {
        throw new Error("Invalid email");
      }
      const isPasswordValid = await compare(password, existingUser.password!);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      const userPayload = {
        id: existingUser._id,
        name: existingUser.username,
        email: existingUser.email,
      };
      const token = sign(userPayload, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      return { userPayload, token };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async editUser(id: string, user: IUser) {
    const { firts_name, last_name, user_name, email, image } = user;
    const dbPayload = {
      ...(firts_name ? { firts_name } : {}),
      ...(last_name ? { last_name } : {}),
      ...(user_name ? { user_name } : {}),
      ...(email ? { email } : {}),
      ...(image ? { image } : {}),
    };
    try {
      const editedUser = await editUser(id, dbPayload);
      return editedUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteUser(id: string) {
    try {
      const deletedUser = await deleteUser(id);
      return deletedUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async changeRole(id: string, role: UserRole) {
    try {
      console.log(id, role);
      const updatedUser = await changeRole(id, role);
      return updatedUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const userService = new UserService();
