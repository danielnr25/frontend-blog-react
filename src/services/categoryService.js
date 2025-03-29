import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/categories`;

export const getCategories = async () => {
   try {
      const response = await axios.get(API_URL)
      return response.data
   } catch (error) {
      console.log('Error al mostrar las categorias', error)
   }
}


export const saveCategory = async (category) => {
   try {
      const url = category?.id ? `${API_URL}/${category.id}` : API_URL;
      const method = category?.id ? 'PUT' : 'POST';

      const response = await axios({
         method,
         url,
         data: { name: category.name, description: category.description },
         headers: { "Content-Type": "application/json" }
      });

      return response.data;
   } catch (error) {
      console.error('Error al guardar categoría', error);
      throw error;
   }
};


export const deleteCategory = async (id) => {
   try {
      const response = await axios.delete(`${API_URL}/${id}`, {
         headers: { "Content-Type": "application/json" }
      });

      return response.data;
   } catch (error) {
      console.error('Error al eliminar categoría', error);
      throw error;
   }
};