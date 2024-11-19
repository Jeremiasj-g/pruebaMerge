import Category from "./model";

class CategoryDao {
  async getCategories() {
    try {
      return await Category.find();
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createCategory(category: string) {
    try {
      const newCategory = await Category.create(category);
      return newCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async updateCategory(id: string, category: string) {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { name: category },
        { new: true }
      );
      return updatedCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCategory(id: string) {
    try {
      const deleteCategory = await Category.findByIdAndDelete(id);
      return deleteCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

const categoryDao = new CategoryDao();

export default categoryDao;
