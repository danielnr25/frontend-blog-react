const comments = [
    {
        id: 1,
        author: "Judith Black",
        role: "CEO of Workcation",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas "
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
const Blogdetail = () => {
    const post = {
        title: "React vs Vue: ¿Cuál elegir?",
        category: "Desarrollo Web",
        image: "https://www.mindinventory.com/blog/wp-content/uploads/2023/11/react-vs-vue.webp",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione id ullam ipsum dolores. Quis, odit nemo! Quia dignissimos laboriosam mollitia iure sed, maxime dolor rerum asperiores nesciunt pariatur autem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione id ullam ipsum dolores. Quis, odit nemo! Quia dignissimos laboriosam mollitia iure sed, maxime dolor rerum asperiores nesciunt pariatur autem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione id ullam ipsum dolores. Quis, odit nemo! Quia dignissimos laboriosam mollitia iure sed, maxime dolor rerum asperiores nesciunt pariatur autem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione id ullam ipsum dolores. Quis, odit nemo! Quia dignissimos laboriosam mollitia iure sed, maxime dolor rerum asperiores nesciunt pariatur autem!",
    };

    return (
        <div className="overflow-hidden bg-white py-14 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-indigo-600">{post.category}</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                {post.title}
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600 text-justify">
                                {post.excerpt}
                            </p>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            alt={post.title}
                            src={post.image}
                            className="w-full max-w-lg h-auto rounded-xl ring-1 shadow-xl"
                        />

                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
                <div className="sm:col-span-2">
                    <label className="block text-sm/6 font-semibold text-gray-900">Comentarios</label>
                    <div className="mt-2.5">
                        <textarea name="message" id="message" rows="4" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
                    </div>
                    <button className="bg-blue-900 text-white px-2 py-2 rounded-md float-right mt-5">
                        Publicar
                    </button>
                </div>

                <section className="py-16 px-6 sm:px-10 lg:px-16">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Lo que dicen nuestros clientes</h2>
                        <p className="mt-4 text-lg text-gray-600">Opiniones reales de personas que confían en nuestro producto.</p>
                    </div>

                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {comments.map((comment) => (
                            <div key={comment.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                                <img
                                    src={comment.image}
                                    alt={comment.author}
                                    className="w-20 h-20 rounded-full border-4 border-indigo-500 shadow-md"
                                />
                                <blockquote className="mt-4 text-lg text-gray-800 font-medium">“{comment.text}”</blockquote>
                                <figcaption className="mt-4">
                                    <h4 className="text-indigo-600 font-semibold">{comment.author}</h4>
                                    <p className="text-gray-500 text-sm">{comment.role}</p>
                                </figcaption>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Blogdetail