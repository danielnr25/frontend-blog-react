import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { saveCategory } from "@/services/categoryService";

const Modal = ({ setIsOpen, category, fetchCategories }) => {

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");

   useEffect(() => {
      if (category) {
         setName(category.name)
         setDescription(category.description);
      } else {
         setName("")
         setDescription("");
      }
   }, [category]);

   //  const handleSubmit = async (e) =>{
   //      e.preventDefault();

   //      const url = category  ? `http://localhost:3000/api/categories/${category.id}` 
   //      : "http://localhost:3000/api/categories";

   //      const method = category ? 'PUT' : 'POST';

   //      try {
   //          const response = await fetch(url,{
   //              method,
   //              headers: { "Content-Type": "application/json" },
   //              body: JSON.stringify({name,description}),
   //          })

   //          if(!response.ok){
   //              const {message} = await response.json();
   //              toast.error(message,{autoClose:1500})
   //              return
   //          }

   //          const { message } = await response.json();
   //          toast.success(message);
   //          fetchCategories();
   //          setIsOpen(false)
   //      } catch (error) {
   //          const { message } = error.response.data;
   //          toast.error(message,{autoClose:1500})
   //      }


   //  }

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const data = await saveCategory({ name, description, id: category?.id });
         toast.success(data.message);
         fetchCategories();
         setIsOpen(false);
      } catch (error) {
         toast.error(error.response?.data?.message || "Error al guardar categoría", { autoClose: 1500 });
      }
   };


   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black opacity-95">
         <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
               {category ? "Editar Categoria" : "Nueva Categoria"}</h2>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  className="w-full p-2 border rounded mb-4"
                  placeholder="Nombre de la categoría"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
               />
               <textarea
                  placeholder="Descripción de la categoría"
                  className="w-full p-4 border rounded mb-4"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
               ></textarea>
               <div className="flex justify-end space-x-2">
                  <button
                     type="button"
                     onClick={() => setIsOpen(false)}
                     className="bg-gray-400 cursor-pointer text-black py-2 px-4 rounded"
                  >
                     Cancelar
                  </button>
                  <button
                     type="submit"
                     className="bg-blue-800 cursor-pointer text-white py-2 px-4 rounded"
                  >
                     Guardar
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Modal