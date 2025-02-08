import { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Loginnn.....')

    }

  return (
    <div className="flex justify-center items-center mt-20">
        <form className="bg-white p-10 shadow-lg rounded-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-5 text-blue-900 font-bold text-center uppercase ">Iniciar sesión</h2>
            <input type="email" placeholder="Email" className="border p-2 w-full mb-4 text-xl rounded-sm focus:border-2 focus:border-blue-800" onChange={(e) => setEmail(e.target.value)} />
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