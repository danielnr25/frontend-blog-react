import { useEffect } from "react";
import { useState } from "react"


const CommentsSection = ({ postId, comments,setComments }) => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchComments = async () =>{
            try {
                const response = await fetch(`http://localhost:3000/api/comments/${postId}`);
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error("Error al obtener comentarios: ",error);
            } finally {
                setLoading(false)
            }
        }

        if(postId){
            fetchComments();
        }

    },[postId,setComments])

    const formDate = (date) =>{
        return new Date(date).toLocaleString("es-Es",{
            day:'numeric',
            month:'long',
            year:'numeric',
            hour:"2-digit",
            minute:"2-digit"
        });
    }
  
  
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16">
    <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Lo que dicen nuestros clientes</h2>
        <p className="mt-4 text-lg text-gray-600">Opiniones reales de personas que confían en nuestro producto.</p>
    </div>

    {
        loading ? (
            <p>Cargando comentarios ...</p>
        ) : comments.length === 0 ? (
            <p>No hay comentarios aún.</p>
        ):(
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {comments.map((comment) => (
                    <div key={comment.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                        <blockquote className="mt-4 text-lg text-gray-800 font-medium italic uppercase">“{comment.content}”</blockquote>
                        <figcaption className="mt-4">
                            <h4 className="text-indigo-600 font-semibold uppercase">{comment.username}</h4>
                            <p className="text-sm text-gray-500">
                                {comment.created_at ? formDate(comment.created_at) : "Fecha desconocida"}
                            </p>
                        </figcaption>
                    </div>
                ))}
        </div>
        )
    }


   
</section>
  )
}

export default CommentsSection