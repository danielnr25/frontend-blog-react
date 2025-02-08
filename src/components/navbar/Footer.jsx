import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Mi Blog</h2>
          <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>

        <nav>
          <ul className="flex space-x-6 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
