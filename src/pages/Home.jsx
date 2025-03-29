import { useEffect, useState } from "react";
import CategoryCard from "@/components/pages/home/CategoryCard";
import PostCard from "@/components/pages/home/PostCard";
import { getCategories } from "@/services/categoryService";
import {getLatestPosts} from '@/services/postService';

const Home = () => {

    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetchCategories();
        fetchLatestsPosts();
    },[])




    const fetchCategories = async() =>{
        try {
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.error("Error al obtener categorias", error);
        }
    }

    const fetchLatestsPosts = async() =>{
        try {
            const data = await getLatestPosts();
            console.log(data)
            setPosts(data);
        } catch (error) {
            console.error("Error al obtener las publicaciones",error);
        }
    }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Categorías Principales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Últimas Publicaciones</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
