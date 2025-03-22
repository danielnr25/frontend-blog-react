import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/posts`;

export const getPosts = async() =>{
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.log('Error al mostrar los posts',error)
    }
}

export const getLatestPosts = async() =>{
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
