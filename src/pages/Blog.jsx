import { useState } from "react";
import { DialogBackdrop, Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon } from '@heroicons/react/20/solid'

const categories = [
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
    const [selectedCategory,setSelectedCategory] = useState("All");

    return (
    <div className="bg-white">
        <div>
            

            <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pt-8 pb-6">
                    <h1 className="text-2xl font-bold tracking-tight">Publicaciones</h1>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Blog