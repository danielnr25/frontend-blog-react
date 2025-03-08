import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService"
import { toast } from "react-toastify";

const Modal = ({setIsOpen, post, fetchPosts}) => {
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const [imageFile,setImageFile] = useState(null);
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
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0])
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const url = post ? `http://localhost:3000/api/posts/${post.id}` : "http://localhost:3000/api/posts";

        const method =post ? "PUT" : "POST";
        const formDataToSend = new FormData();
        formDataToSend.append("title",formData.title);
        formDataToSend.append("content",formData.content);
        formDataToSend.append("user_id", formData.user_id);
        formDataToSend.append("category_id", formData.category_id);

        if(imageFile){
            formDataToSend.append("image",imageFile);
        }

        try {
            const response = await fetch(url,{
                method,
                body:formDataToSend, 
            })

            const data = await response.json();
            if(!response.ok) throw new Error(data.message || "Error en la solicitud");
            toast.success(data.message);
            fetchPosts();
            setIsOpen(false);
        } catch (error) {
            console.log("error al guard post", error);
            toast.error(error.message);
        }


    }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black opacity-95">
         <div className="bg-white p-6 rounded-lg w-[550px] shadow-lg">
            <h2 className="text-xl font-bold mb-4">{post ? "Editar Post" : "Crear Nuevo Post"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
               />

                <textarea
                  name="content"
                  placeholder="Contenido"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
               ></textarea>

               <input 
                type="file" 
                name="image" 
                id="image"
                onChange={handleImageChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 sm:text-sm focus:border-blue-500"
                accept="image/*"
               />

                <select 
                 value={formData.user_id}
                 name="user_id" 
                 onChange={handleChange}
                 className="w-full p-2 border rounded"
                >
                    <option value="">Seleccione una Usuario</option>
                    {users.map((user)=>(
                        <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
               </select>

               <select  
                onChange={handleChange}                
                value={formData.category_id} name="category_id" className="w-full p-2 border rounded">
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