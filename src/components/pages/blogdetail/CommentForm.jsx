import { useState } from "react"
import { toast } from "react-toastify";
import { saveComment, getCommentsByPost } from "@/services/commentService";

const CommentForm = ({ postId, setComments }) => {
   const [author, setAuthor] = useState("");
   const [content, setContent] = useState("");
   const [errorMessage, setErrorMessage] = useState("");
   //  const handleSubmit = async(e) =>{
   //      e.preventDefault();
   //      if(!author ){
   //         setErrorMessage("Debe ingresar su nombre");
   //         setTimeout(()=>setErrorMessage(""),3000);
   //         return
   //      }

   //      if(!content ){
   //          setErrorMessage("Debe ingresar el contenido del comentario");
   //          setTimeout(()=>setErrorMessage(""),3000);
   //          return
   //      }

   //      try {

   //          const response = await fetch("http://localhost:3000/api/comments",{
   //              method: "POST",
   //              headers:{"Content-type":"application/json"},
   //              body: JSON.stringify({content,author,post_id:postId})
   //          })

   //          const data = await response.json();
   //          if(response.ok){
   //              toast.success(data.message,{autoClose:1500});
   //              setAuthor("");
   //              setContent("");
   //              const res = await fetch(`http://localhost:3000/api/comments/${postId}`);
   //              const newComments = await res.json();
   //              setComments(newComments);

   //          }else{
   //              toast.error(data.message);
   //          }

   //      } catch (error) {
   //          toast.error(error.message);
   //      }
   //  }

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!author) {
         setErrorMessage("Debe ingresar su nombre");
         setTimeout(() => setErrorMessage(""), 3000);
         return;
      }

      if (!content) {
         setErrorMessage("Debe ingresar el contenido del comentario");
         setTimeout(() => setErrorMessage(""), 3000);
         return;
      }

      try {
         // Guardar el comentario usando el servicio
         const data = await saveComment({ content, author, post_id: postId });

         toast.success(data.message, { autoClose: 1500 });
         setAuthor("");
         setContent("");

         // Obtener los comentarios actualizados
         const newComments = await getCommentsByPost(postId);
         setComments(newComments);

      } catch (error) {
         toast.error(error.response?.data?.message || "Error al guardar el comentario");
      }
   };

   return (
      <div className="bg-white p-6 rounded-lg shadow-md">
         <h3 className="text-2xl font-semibold text-gray-900">Deja tu comentario</h3>
         <p className="text-gray-600 text-sm">Comparte tu opinión sobre el artículo</p>
         <form onSubmit={handleSubmit}>
            <div className="mt-4">
               <input
                  type="text"
                  placeholder="Tu nombre"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
               />
            </div>
            <div className="mt-4">
               <textarea
                  rows="4"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Escribe tu comentario aquí..."
               ></textarea>
            </div>
            <button className="mt-4 w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition duration-300">
               Publicar
            </button>
         </form>

         {errorMessage && (
            <p className="bg-red-600 rounded-md p-2 mt-4 text-white text-lg text-center">
               {errorMessage}
            </p>
         )}


      </div>
   )
}

export default CommentForm