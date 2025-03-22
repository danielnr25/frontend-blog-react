const comments = [
    {
        id: 1,
        author: "Judith Black",
        role: "CEO of Workcation",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas."
    },
    {
        id: 2,
        author: "Michael Scott",
        role: "Regional Manager",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        text: "That's what she said! Amazing platform for business growth. Highly recommend it."
    },
    {
        id: 3,
        author: "Pam Beesly",
        role: "Designer",
        image: "https://randomuser.me/api/portraits/women/75.jpg",
        text: "Simple, elegant, and easy to use. The UI is fantastic, and the support team is very responsive."
    }
];

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../services/postService";
import CommentsSection from "../components/pages/blogdetail/CommentsSection";
import CommentForm from "../components/pages/blogdetail/CommentForm";
import PostContent from "../components/pages/blogdetail/PostContent";
const Blogdetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    
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
                <CommentForm />
            </div>

            <CommentsSection comments = {comments} />
        </div>
    );
};

export default Blogdetail;
