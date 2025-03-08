import { getPosts } from "../../services/postService"
import { useState,useEffect } from "react"
import Modal from "./Modal";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        fetchPosts();
    },[])


    const fetchPosts =  async()=>{
        const data = await getPosts();
        if(data){
            setPosts(data)
        }
        
    }

    const handleAdd = () =>{
        setIsOpen(true);
        setSelectedPost(null);
    }

    const handleEdit = (post) => {
        setIsOpen(true)
        setSelectedPost(post)
    }
   
  return (
    <div className="p-6">
         <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold mb-4">Publicaciones</h1>
            <button
                onClick={handleAdd}  
                className="bg-blue-800 cursor-pointer text-white py-2 px-4 rounded mb-4">
                Agregar Post
            </button>
        </div>

        <table className="min-w-full bg-white border rounded shadow-md">
            <thead>
                <tr className="bg-blue-200">
                    <th className="py-2 px-4 border">ID</th>
                    <th className="py-2 px-4 border">Nombre</th>
                    <th className="py-2 px-4 border">Contenido</th>
                    <th className="py-2 px-4 border">Categoria</th>
                    <th className="py-2 px-4 border">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post)=>(
                    <tr key={post.id} className="text-center border">
                        <td className="py-2 px-4">{post.id}</td>
                        <td className="py-2 px-4">{post.title}</td>
                        <td className="py-2 px-4">{post.content}</td>
                        <td className="py-2 px-4">{post.category}</td>
                        <td className="py-2 px-4">
                            <button 
                                onClick={()=>handleEdit(post)}
                                className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
                            >Editar</button>
                            <button
                                className="bg-red-500 cursor-pointer text-white py-1 px-3 rounded mr-2"
                            >
                                Eliminar
                            </button>
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
                    post ={selectedPost}
                    fetchPosts={fetchPosts}
                />
            )
        }


    </div>
  )
}

export default Posts