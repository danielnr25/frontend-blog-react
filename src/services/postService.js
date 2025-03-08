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