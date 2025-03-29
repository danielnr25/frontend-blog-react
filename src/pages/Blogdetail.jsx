import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "@/services/postService";
import CommentsSection from "@/components/pages/blogdetail/CommentsSection";
import CommentForm from "@/components/pages/blogdetail/CommentForm";
import PostContent from "@/components/pages/blogdetail/PostContent";
const Blogdetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [comments,setComments] = useState([]);
    
    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPostBySlug(slug);
            setPost(data);
        };

        fetchPost();
    }, [slug]);

    if (!post) {
        return <h2 className="text-center text-xl font-bold mt-10">Post no encontrado</h2>;
    }


    return (
        <div className="bg-gray-50 py-14 sm:py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <PostContent post={post} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
                <CommentForm postId={post.id} setComments={setComments} />
            </div>

            <CommentsSection postId={post.id} setComments={setComments} comments={comments}  />
        </div>
    );
};

export default Blogdetail;
