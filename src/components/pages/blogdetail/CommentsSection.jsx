

const CommentsSection = ({comments}) => {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16">
    <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Lo que dicen nuestros clientes</h2>
        <p className="mt-4 text-lg text-gray-600">Opiniones reales de personas que confían en nuestro producto.</p>
    </div>

    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <img
                    src={comment.image}
                    alt={comment.author}
                    className="w-20 h-20 rounded-full border-4 border-indigo-500 shadow-md"
                />
                <blockquote className="mt-4 text-lg text-gray-800 font-medium italic">“{comment.text}”</blockquote>
                <figcaption className="mt-4">
                    <h4 className="text-indigo-600 font-semibold">{comment.author}</h4>
                    <p className="text-gray-500 text-sm">{comment.role}</p>
                </figcaption>
            </div>
        ))}
    </div>
</section>
  )
}

export default CommentsSection