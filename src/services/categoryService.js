import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/categories`;

export const getCategories = async() =>{
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.log('Error al mostrar las categorias',error)
    }
}