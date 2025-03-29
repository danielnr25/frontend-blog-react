import { useEffect, useState } from "react";
import { getCategories } from "@/services/categoryService"
import { savePost } from "@/services/postService";
import { toast } from "react-toastify";

const Modal = ({ setIsOpen, post, fetchPosts }) => {
   const [categories, setCategories] = useState([]);
   const [users, setUsers] = useState([]);
   const [imageFile, setImageFile] = useState(null);
   const [formData, setFormData] = useState({
      title: "",
      content: "",
      user_id: "",
      category_id: "",
      slug: ""
   })

   useEffect(() => {
      if (post) {
         setFormData({
            title: post.title || "",
            content: post.content || "",
            user_id: post.user_id || "",
            category_id: post.category_id || "",
            slug: post.slug || "",
         })
      } else {
         setFormData({
            title: "",
            content: "",
            user_id: "",
            category_id: "",
            slug: ""
         })
      }
   }, [post])


   useEffect(() => {
      fetchCategories();
      fetchUsers();
   }, [])

   const fetchCategories = async () => {
      const data = await getCategories();
      if (data) {
         setCategories(data)
      }
   }

   const fetchUsers = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
         setUsers([user])
      }
   }

   const generateSlug = (title) => {
      return title
         .toLowerCase()
         .normalize("NFD") // Normaliza caracteres con tilde
         .replace(/[\u0300-\u036f]/g, "") // Elimina tildes
         .replace(/[^a-z0-9\s-]/g, "") // Quita caracteres especiales
         .replace(/\s+/g, "-") // Reemplaza espacios por guiones
         .replace(/-+/g, "-") // Reemplaza múltiples guiones por uno solo
         .trim(); // Elimina espacios al inicio y final
   }

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
         slug: name === "title" ? generateSlug(value) : prevData.slug, // Genera slug si cambia el título
      }));
   }

   const handleImageChange = (e) => {
      setImageFile(e.target.files[0])
   }

   // const handleSubmit = async (e) => {
   //    e.preventDefault();
   //    const url = post ? `http://localhost:3000/api/posts/${post.id}` : "http://localhost:3000/api/posts";

   //    const method = post ? "PUT" : "POST";
   //    const formDataToSend = new FormData();
   //    formDataToSend.append("title", formData.title);
   //    formDataToSend.append("content", formData.content);
   //    formDataToSend.append("user_id", formData.user_id);
   //    formDataToSend.append("category_id", formData.category_id);
   //    formDataToSend.append("slug", formData.slug);


   //    if (imageFile) {
   //       formDataToSend.append("image", imageFile);
   //    } else {
   //       formDataToSend.append("image", "")
   //    }
   //    try {

   //       const response = await fetch(url, {
   //          method,
   //          body: formDataToSend,
   //       })

   //       const data = await response.json();
   //       if (!response.ok) throw new Error(data.message || "Error en la solicitud");
   //       toast.success(data.message);
   //       fetchPosts();
   //       setIsOpen(false);
   //    } catch (error) {
   //       console.log("error al guardar post", error);
   //       toast.error(error.message);
   //    }
   // }
   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const data = await savePost(formData, imageFile, post);
         toast.success(data.message);
         fetchPosts();
         setIsOpen(false);
      } catch (error) {
         console.error("Error al guardar post", error);
         toast.error(error.message);
      }
   };


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

               <input
                  type="text"
                  name="slug"
                  placeholder="Slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  readOnly
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
                  {users.map((user) => (
                     <option key={user.id} value={user.id}>{user.username}</option>
                  ))}
               </select>

               <select
                  onChange={handleChange}
                  value={formData.category_id} name="category_id" className="w-full p-2 border rounded">
                  <option value="">Seleccione una Categoria</option>
                  {categories.map((category) => (
                     <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
               </select>

               <div className="flex justify-end space-x-2">
                  <button
                     onClick={() => setIsOpen(false)}
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