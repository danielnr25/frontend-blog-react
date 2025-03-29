import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/comments`;


export const saveComment = async (comment) => {
   try {
       const response = await axios.post(API_URL, comment, {
           headers: { "Content-Type": "application/json" }
       });
       return response.data;
   } catch (error) {
       console.error('Error al guardar comentario', error);
       throw error;
   }
};

export const getCommentsByPost = async (postId) => {
   try {
       const response = await axios.get(`${API_URL}/${postId}`);
       return response.data;
   } catch (error) {
       console.error('Error al obtener comentarios', error);
       throw error;
   }
};
