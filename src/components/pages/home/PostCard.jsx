
const PostCard = ({post}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
        <img src={post.image} alt={post.title} className="w-full h-44 object-cover rounded-md" />
        <h3 className="text-lg font-bold mt-2">{post.title}</h3>
        <p className="text-sm text-gray-800 font-semibold">{post.category}</p>
        <p className="text-sm mt-2">{post.excerpt}</p>
    </div>
  )
}

export default PostCard