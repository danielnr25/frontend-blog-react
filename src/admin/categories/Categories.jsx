import { useEffect, useState } from "react";

const Categories = () => {

    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetchCategories();
       
    },[]) // solo ejecutame una sola vez

    const fetchCategories = async() =>{
        try{
            const response = await fetch("http://localhost:3000/api/categories");
            const data = await response.json();
            setCategories(data);
        }catch (error){
            console.error("Error al obtener categorias", error)
        }
    }

    
  return (
    <div className="p-6">
        <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold mb-4">Categorías</h1>
            <button  className="bg-blue-800 text-white py-2 px-4 rounded mb-4">
                Agregar Categoria
            </button>
        </div>
        <table className="min-w-full bg-white border rounded shadow-md">
            <thead>
                <tr className="bg-blue-200">
                    <th className="py-2 px-4 border">ID</th>
                    <th className="py-2 px-4 border">Nombre</th>
                    <th className="py-2 px-4 border">Descripción</th>
                    <th className="py-2 px-4 border">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category)=>(
                    <tr key={category.id} className="text-center border">
                        <td className="py-2 px-4">{category.id}</td>
                        <td className="py-2 px-4">{category.name}</td>
                        <td className="py-2 px-4">{category.description}</td>
                        <td className="py-2 px-4">
                            <button className="bg-yellow-500 cursor-pointer text-white py-1 px-3 rounded mr-2">Editar</button>
                            <button className="bg-red-500 cursor-pointer text-white py-1 px-3 rounded mr-2">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default Categories