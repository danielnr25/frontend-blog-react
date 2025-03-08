import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Íconos de menú

const LayoutMain = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeSession = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className={`w-64 bg-gray-900 min-h-screen text-white flex flex-col fixed lg:relative lg:block ${isMenuOpen ? "block" : "hidden"} lg:w-64 lg:flex`}>
                <div className="p-5 flex justify-between items-center lg:block">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                    {/* Botón para cerrar el menú en móvil */}
                    <button onClick={toggleMenu} className="lg:hidden text-white text-2xl">
                        <FiX />
                    </button>
                </div>
                <nav className="mt-8 flex-grow">
                    <ul className="space-y-4">
                        {[
                            { path: "/admin", label: "Dashboard" },
                            { path: "/admin/categories", label: "Categorías" },
                            { path: "/admin/users", label: "Usuarios" },
                            { path: "/admin/posts", label: "Publicaciones" },
                            { path: "/admin/comments", label: "Comentarios" }
                        ].map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`block px-6 py-2 text-lg rounded-md transition ${
                                        location.pathname === item.path
                                            ? "bg-blue-700"
                                            : "hover:bg-blue-700"
                                    }`}
                                    onClick={() => setIsMenuOpen(false)} // Cerrar menú en móvil al hacer clic
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="flex-1 p-6">
                <button onClick={toggleMenu} className="lg:hidden text-gray-900 text-2xl mb-4">
                    <FiMenu />
                </button>

                <header className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold text-gray-900">Dashboard</h2>
                    <button onClick={closeSession} className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-md">
                        Cerrar sesión
                    </button>
                </header>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default LayoutMain;
