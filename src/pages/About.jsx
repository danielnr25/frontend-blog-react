import TeamMemberCard from "../components/pages/about/TeamMemberCard";

const teamMembers = [
  {
    name: "Daniel Nuñez",
    role: "CEO & Fundador",
    bio: "Apasionado por la tecnología y el desarrollo web.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE09aYGq2TJqrNza3nErPkVkWxxU3PxdjS_A&s",
  },
  {
    name: "María López",
    role: "Desarrolladora Frontend",
    bio: "Especialista en React y UI/UX.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE09aYGq2TJqrNza3nErPkVkWxxU3PxdjS_A&s",
  },
  {
    name: "Carlos Gómez",
    role: "Desarrollador Backend",
    bio: "Experto en Node.js y bases de datos.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE09aYGq2TJqrNza3nErPkVkWxxU3PxdjS_A&s",
  },
];

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Sobre Nosotros</h2>
      <p className="text-center text-gray-700 max-w-2xl mx-auto">
        En <strong>Mi Blog</strong>, creemos en compartir conocimiento y crear una comunidad 
        apasionada por la tecnología, el desarrollo web y los negocios. Nuestro objetivo 
        es brindar contenido de calidad y experiencias enriquecedoras para todos.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
          <h3 className="text-xl font-bold mb-2">Nuestra Misión</h3>
          <p className="text-gray-600">
            Proporcionar contenido educativo y de calidad sobre tecnología, 
            ayudando a profesionales y entusiastas a crecer en sus carreras.
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
          <h3 className="text-xl font-bold mb-2">Nuestra Visión</h3>
          <p className="text-gray-600">
            Convertirnos en el blog líder en tecnología y desarrollo web, 
            impactando positivamente en la comunidad digital.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mt-12 mb-6">Nuestro Equipo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default About;
