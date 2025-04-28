"use client";
import { AuthContext } from "@/app/context/AuthContext"
import { useContext, useState } from "react"

export default function LoginForm() {
    const {user, createUser, logInUser} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    /* const registrarUsuario = async () => {
        await createUser(email, pass);
    } */

    const loginUsuario = async () => {
        await logInUser(email, pass);
    }

    return (
        <div className="container m-auto flex flex-col my-20">
            <h1 className="text-4xl font-bold mb-5 dark:text-white text-center">Iniciar Sesión</h1>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su Email" value={email} onInput={(e) => {setEmail(e.target.value)}} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pass} onInput={(e) => {setPass(e.target.value)}} required />
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={loginUsuario}>Enviar</button>
            </form>
        </div>
    )
}