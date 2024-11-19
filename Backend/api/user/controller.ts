import { Request, Response } from "express";
import { userService } from "./service";

const {
  getUser,
  getUsers,
  getUserByMail,
  createUser,
  loginUser,
  editUser,
  deleteUser,
  changeRole,
} = userService;

class UserController {
  async getUsers(req: Request, res: Response) {
    const email = req.query.email as string;
    if (email) {
      try {
        const user = await getUserByMail(email);
        return res.status(200).json(user);
      } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
      }
    } else {
      try {
        const users = await getUsers();
        return res.status(200).json(users);
      } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
      }
    }
  }
  async getUser(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await getUser(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async createUser(req: Request, res: Response) {
    try {
      const userBody = req.body;
      const file = req.file; // El archivo cargado
  
      if (!file) {
        res.status(400).json({ message: 'No file uploaded' });
        return;
      }
  
      // Delegar al servicio
      const user = await createUser(userBody, file.path);
      res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Server error', error: (error as Error).message });
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const { token, userPayload } = await loginUser(req.body);

      return res.status(200).json(userPayload);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  
  async deleteUser(req: Request, res: Response) {
    try {
      const user = await deleteUser(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async editUser(req: Request, res: Response) {
    const userId = req.params.id;
    try {
      const user = await editUser(userId, req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async changeRole(req: Request, res: Response) {
    const userId = req.params.id;
    const { role } = req.body;
    try {
      const user = await changeRole(userId, role);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export const userController = new UserController();
