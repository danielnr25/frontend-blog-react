


import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/posts`;

export const getPosts = async () => {
   try {
      const response = await axios.get(API_URL)
      return response.data
   } catch (error) {
      console.log('Error al mostrar los posts', error)
   }
}

export const getLatestPosts = async () => {
   try {
      const response = await axios.get(`${API_URL}/latestpost`);
      return response.data
   } catch (error) {
      console.log('Error al mostrar los posts', error)
   }
}


export const getPostBySlug = async (slug) => {
   try {
      const response = await axios.get(`${API_URL}/slug/${slug}`);
      return response.data;
   } catch (error) {
      console.error(`Error al obtener el post con slug: ${slug}`, error);
      return null;
   }
};


export const savePost = async (formData, imageFile, post = null) => {
   try {
      const url = post ? `${API_URL}/${post.id}` : API_URL;
      const method = post ? 'PUT' : 'POST';

      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('user_id', formData.user_id);
      formDataToSend.append('category_id', formData.category_id);
      formDataToSend.append('slug', formData.slug);

      if (imageFile) {
         formDataToSend.append('image', imageFile);
      }

      const response = await axios({
         method,
         url,
         data: formDataToSend,
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });

      return response.data;
   } catch (error) {
      console.error('Error al guardar post', error);
      throw error;
   }
};



