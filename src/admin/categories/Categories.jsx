import { useEffect, useState } from "react";
import Modal from "./Modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";
import { getCategories } from "../../services/categoryService";
const MySwal = withReactContent(Swal);

const Categories = () => {

    const [categories,setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory,setSelectedCategory] = useState(null);

    useEffect(()=>{
        fetchCategories();
       
    },[]) // solo ejecutame una sola vez

    const fetchCategories = async() =>{
        try{
            const data = await getCategories();
            setCategories(data);
        }catch (error){
            console.error("Error al obtener categorias", error)
        }
    }

    const handleAdd = () =>{
        setSelectedCategory(null);
        setIsOpen(true);
    }

    const handleEdit = (category) =>{
        setSelectedCategory(category)
        setIsOpen(true);
    }

    const handleDelete = async (id, name) => {
        
        MySwal.fire({
            html: `¿Estás seguro de eliminar la Categoría <b>${name}</b>?`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
          }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:3000/api/categories/${id}`,{
                        method:"DELETE",
                        headers: { "Content-Type": "application/json" },
                    })

                    if(!response.ok){
                        const {message} = await response.json();
                        toast.error(message)
                        return
                    }
                    const {message} = await response.json();
                    toast.success(message,{autoClose:1500})
                    fetchCategories();
                } catch (error) {
                    const { message } = error.response.data;
                    toast.error(message,{autoClose:1500})
                }
            }
          });
    }

    
  return (
    <div className="p-6">
        <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold mb-4">Categorías</h1>
            <button
                onClick={handleAdd}  
                className="bg-blue-800 cursor-pointer text-white py-2 px-4 rounded mb-4">
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
                            <button 
                                onClick={()=>handleEdit(category)}
                                className="bg-yellow-500 cursor-pointer text-white py-1 px-3 rounded mr-2"
                            >Editar</button>
                            <button
                                onClick={()=>handleDelete(category.id,category.name)} 
                                className="bg-red-500 cursor-pointer text-white py-1 px-3 rounded mr-2"
                            >Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
        {
            isOpen && (
                <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    category={selectedCategory}
                    fetchCategories={fetchCategories}
                />
            )
        }
    </div>
  )
}

export default Categories