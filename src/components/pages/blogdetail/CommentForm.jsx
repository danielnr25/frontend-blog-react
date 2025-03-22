
const CommentForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900">Deja tu comentario</h3>
        <p className="text-gray-600 text-sm">Comparte tu opinión sobre el artículo</p>
        <div className="mt-4">
            <textarea
                name="message"
                id="message"
                rows="4"
                className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Escribe tu comentario aquí..."
            ></textarea>
        </div>
        <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition duration-300">
            Publicar
        </button>
    </div>
  )
}

export default CommentForm