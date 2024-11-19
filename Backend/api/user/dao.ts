import User from "./model";
import { IUser, UserRole } from "../../types";
import { IEditUserPayload } from "./types";

class UserDao {
  async getAllUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getUserById(userId: string) {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getUserByMail(email: string) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createUser(user: IUser) {
    console.log("User input to save DAO:", user); // Debug
    try {
      const newUser = await User.create(user);
      console.log("User created DAO:", newUser);
      return newUser;
    } catch (error) {
      console.error('Error in DAO:', error);
      throw Error((error as Error).message);
    }
  }
  async editUser(userId: string, user: IEditUserPayload) {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, user, {
        new: true,
      });
      return updatedUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteUser(userId: string) {
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      return deletedUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async changeRole(userId: string, role: UserRole) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { role },
        { new: true }
      );
      return updatedUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const userDao = new UserDao();
