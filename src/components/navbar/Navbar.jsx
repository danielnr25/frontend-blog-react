import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Mi Blog</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:underline">Blog</Link>
          </li>
          <li>
            <Link to="/blogdetail" className="hover:underline">Blog Detalle</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
