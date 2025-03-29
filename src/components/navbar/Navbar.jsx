import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/blog") {
      return location.pathname.startsWith("/blog");
    }
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Mi Blog</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`hover:underline ${isActive("/") ? "text-yellow-400 underline" : ""}`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`hover:underline ${isActive("/blog") ? "text-yellow-400 underline" : ""}`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:underline ${isActive("/about") ? "text-yellow-400 underline" : ""}`}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`hover:underline ${isActive("/login") ? "text-yellow-400 underline" : ""}`}
            >
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
