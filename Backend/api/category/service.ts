import categoryDao from "./dao";

const { getCategories, createCategory, updateCategory, deleteCategory } =
  categoryDao;

class CaterogySercice {
  async getCategories() {
    try {
      const categories = await getCategories()
      return categories;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createCategory(category: string) {
    try {
      const newCategory = await createCategory(category)
      return newCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async updateCategory(id: string, category: string) {
    try {
      const editCategory = await updateCategory(id, category)
      return editCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCategory(id: string) {
    try {
      const deletedCategory = await deleteCategory(id)
      return deletedCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

const categoryService = new CaterogySercice();

export default categoryService;
