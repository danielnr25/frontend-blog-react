import { useState } from "react";
import { DialogBackdrop, Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon } from '@heroicons/react/20/solid'

const categories = [
    {name:"Todos"},
    { name: "Tecnología", description: "Últimas tendencias y avances." },
    { name: "Desarrollo Web", description: "Tutoriales y guías sobre desarrollo." },
    { name: "Negocios", description: "Consejos y estrategias empresariales." },
];

const posts = [
    {
        title: "React vs Vue: ¿Cuál elegir?",
        category: "Desarrollo Web",
        image: "https://www.mindinventory.com/blog/wp-content/uploads/2023/11/react-vs-vue.webp",
        excerpt: "Comparación entre React y Vue para desarrollo frontend...",
    },
    {
        title: "Tendencias en IA 2025",
        category: "Tecnología",
        image: "https://images.theconversation.com/files/639088/original/file-20241217-15-leuwp4.jpg?ixlib=rb-4.1.0&rect=0%2C862%2C5829%2C2910&q=45&auto=format&w=1356&h=668&fit=crop",
        excerpt: "Descubre cómo la IA está transformando industrias...",
    },
    {
        title: "Cómo iniciar un negocio online",
        category: "Negocios",
        image: "https://static.whataform.com/contents/repository/picture_9e96fc8114fb52f_ac237a82d897b03942f901c5f30f397eb8f30539.png",
        excerpt: "Guía para emprender con éxito en el mundo digital...",
    },
    {
        title: "Tendencias en IA 2025",
        category: "Tecnología",
        image: "https://images.theconversation.com/files/639088/original/file-20241217-15-leuwp4.jpg?ixlib=rb-4.1.0&rect=0%2C862%2C5829%2C2910&q=45&auto=format&w=1356&h=668&fit=crop",
        excerpt: "Descubre cómo la IA está transformando industrias...",
    },
    {
        title: "Cómo iniciar un negocio online",
        category: "Negocios",
        image: "https://static.whataform.com/contents/repository/picture_9e96fc8114fb52f_ac237a82d897b03942f901c5f30f397eb8f30539.png",
        excerpt: "Guía para emprender con éxito en el mundo digital...",
    },
];


const Blog = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredPosts = selectedCategory === "Todos" ? posts : posts.filter((post) => post.category === selectedCategory)

    return (
        <div className="bg-white">
            <div>
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop className="fixed inset-0 bg-black/25" />
                        <div className="fixed inset-0 z-40 flex">
                            <DialogPanel className="relative ml-auto flex w-full max-w-xs flex-col bg-white py-4 pb-12 shadow-xl">
                            <div className="flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium text-gray-900">Categorias</h2>
                            <button
                            type="button"
                            onClick={() => setMobileFiltersOpen(false)}
                            className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="size-6" />
                            </button>
                        </div>

                        <form className="mt-4 border-t border-gray-200">
                            <ul className="px-2 py-3 font-medium text-gray-900">
                                {categories.map((category) => (
                                    <li key={category.name}>
                                        <button 
                                            type="button"
                                            onClick={()=>{
                                                setSelectedCategory(category.name)
                                                setMobileFiltersOpen(false)
                                            }}
                                            className={`block w-full text-left px-2 py-2 rounded-md ${selectedCategory === category.name ? "bg-gray-200" : ""
                                            }`}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </form> 

                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-8 pb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Publicaciones</h1>

                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <FunnelIcon className="size-5" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">Posts</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            <div className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul className="text-gray-900 pb-6">
                                    {categories.map((category) => (
                                         <li key={category.name}>
                                         <button
                                            type="button"
                                            onClick={() => setSelectedCategory(category.name)}
                                            className={`block text-left px-2 py-2 rounded-md ${selectedCategory === category.name ? "bg-gray-200" : ""
                                               }`}
                                         >
                                            {category.name}
                                         </button>
                                      </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:col-span-3">
                                {filteredPosts.length > 0 ? 
                                    ( <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredPosts.map((post, index) => (
                                           <li key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                                              <h3 className="text-xl font-semibold">{post.title}</h3>
                                              <p className="text-gray-600">{post.category}</p>
                                           </li>
                                        ))}
                                     </ul>

                                    ):(
                                        <p className="text-gray-500">No hay publicaciones</p>
                                    )

                                }
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Blog