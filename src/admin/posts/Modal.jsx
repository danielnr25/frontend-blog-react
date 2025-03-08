import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService"

const Modal = ({setIsOpen, post, fetchPosts}) => {
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        title:"",
        content: "",
        user_id:"",
        category_id:""
    })

    useEffect(()=>{
        if(post){
            setFormData({
                title:post.title || "",
                content:post.content || "",
                user_id: post.user_id || "",
                category_id: post.category_id || "",
            })
        }else{
            setFormData({
                title:"",
                content:"",
                user_id:"",
                category_id:"",
            })
        }
    },[post])


    useEffect(()=>{
        fetchCategories();
        fetchUsers();
    },[])

    const fetchCategories = async() => {
        const data = await getCategories();
        if(data){
            setCategories(data)
        }
    }

    const fetchUsers = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            setUsers([user])
        }
    }

    const handleChange = (e) =>{

    }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black opacity-95">
         <div className="bg-white p-6 rounded-lg w-[550px] shadow-lg">
            <h2 className="text-xl font-bold mb-4">{post ? "Editar Post" : "Crear Nuevo Post"}</h2>
            <form action="" className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={formData.title}
                    className="w-full p-2 border rounded"
                    required
               />

                <textarea
                  name="content"
                  placeholder="Contenido"
                  value={formData.content}
                  className="w-full p-2 border rounded"
                  required
               ></textarea>

                <select 
                 value={formData.user_id}
                 name="user_id" 
                 className="w-full p-2 border rounded"
                >
                    <option value="">Seleccione una Usuario</option>
                    {users.map((user)=>(
                        <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
               </select>

               <select  value={formData.category_id} name="category_id" className="w-full p-2 border rounded">
                    <option value="">Seleccione una Categoria</option>
                    {categories.map((category)=>(
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
               </select>

                <div className="flex justify-end space-x-2">
                    <button 
                        onClick={()=>setIsOpen(false)}
                        type="button"
                        className="bg-gray-400 cursor-pointer text-black py-2 px-4 rounded">
                            Cancelar
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Guardar</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Modal