import { useState } from "react"

const CommentForm = ({postId, setComments}) => {
    const [author,setAuthor] = useState("");
    const [content,setContent] = useState("");
    //const [random, setRandom] = useState("");
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!author || !content ){
            alert("Todos los campos son obligatorios");
            return;
        }

        try {

            const response = await fetch("http://localhost:3000/api/comments",{
                method: "POST",
                headers:{"Content-type":"application/json"},
                body: JSON.stringify({content,author,post_id:postId})
            })

            const data = await response.json();
            if(response.ok){
                alert("Comentario agregado con éxito");
                const res = await fetch(`http://localhost:3000/api/comments/${postId}`);
                const newComments = await res.json();
                setComments(newComments);
                setAuthor("");
                setContent("");

            }else{
                alert(data.message)
            }

        } catch (error) {
            console.error("Error al enviar comentario: ",error);
        }


    }

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
                    onChange={(e) =>setAuthor(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
            </div>
            <div className="mt-4">
                <textarea
                    rows="4"
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Escribe tu comentario aquí..."
                ></textarea>
            </div>
            <button className="mt-4 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition duration-300">
                 Publicar
            </button>
        </form>
     
        
    </div>
  )
}

export default CommentForm