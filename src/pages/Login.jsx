import { useState } from "react";
import { login } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({ username, password });
            localStorage.setItem('token',data.token)
            //alert('Login exitoso');
            navigate("/admin");
        } catch (error) {
            //console.log(error.response.data.message);
            const message = error.response.data.message;
            toast.error(message,{autoClose:2000});
        }

    }

  return (
    <div className="flex justify-center items-center mt-20">
        <form className="bg-white p-10 shadow-lg rounded-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-5 text-blue-900 font-bold text-center uppercase ">Iniciar sesión</h2>
            <input type="text" placeholder="Usuario" className="border p-2 w-full mb-4 text-xl rounded-sm focus:border-2 focus:border-blue-800" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" className="border p-2 w-full mb-4 text-xl rounded-sm focus:border-2 focus:border-blue-800" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="bg-black text-white uppercase p-2 w-full rounded-sm cursor-pointer">Entrar</button>
        
            <div className="mt-4 text-center text-sm">
                ¿No tienes cuenta?<a href="/register" className="text-blue-800 text-base font-semibold"> Regístrate</a>
            </div>
        </form>
    </div>
  )
}

export default Login