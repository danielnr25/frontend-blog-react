
const PostContent = ({post}) => {
  return (
    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pt-4 lg:pr-8">
            <h2 className="text-base font-semibold text-indigo-600">{post.category}</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{post.title}</p>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">{post.content}</p>
        </div>
        <div className="flex justify-center">
            <img
                alt={post.title}
                src={post.image}
                className="w-full max-w-lg h-auto rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            />
        </div>
    </div>
  )
}

export default PostContent