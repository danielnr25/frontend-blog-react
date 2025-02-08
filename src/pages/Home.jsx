import CategoryCard from "../components/pages/home/CategoryCard";
import PostCard from "../components/pages/home/PostCard";

const categories = [
  { name: "Tecnología", description: "Últimas tendencias y avances." },
  { name: "Desarrollo Web", description: "Tutoriales y guías sobre desarrollo." },
  { name: "Negocios", description: "Consejos y estrategias empresariales." },
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

const Home = () => {
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
