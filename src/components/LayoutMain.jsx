import { Outlet, Link,useNavigate } from "react-router-dom";

const LayoutMain = () => {
    const navigate = useNavigate();
    const closeSession = () =>{
        localStorage.removeItem("token");
        navigate("/login");
    }
  return (
    <div className="flex h-screen bg-gray-100">
            <div className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="p-5">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                    <p className="mt-1 text-sm">Gestiona tu contenido</p>
                </div>
                <nav className="mt-8 flex-grow">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/admin" className="block px-6 py-2 text-lg hover:bg-blue-700 rounded-md">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/categories" className="block px-6 py-2 text-lg hover:bg-blue-700 rounded-md">
                                Categorias
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/users" className="block px-6 py-2 text-lg hover:bg-blue-700 rounded-md">
                                Usuarios
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/posts" className="block px-6 py-2 text-lg hover:bg-blue-700 rounded-md">
                                Publicaciones
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/settings" className="block px-6 py-2 text-lg hover:bg-blue-700 rounded-md">
                                Configuraciones
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>


            <div className="flex-1 p-6">
   
                <header className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold text-gray-900">Dashboard</h2>
                    <button onClick={closeSession}  className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-md">Cerrar sesión</button>
                </header>

            
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Outlet /> 
                </div>
            </div>
        </div>
  )
}

export default LayoutMain