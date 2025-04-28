"use client";

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Image from "next/image";

export default function Checkout() {
    const {cart, totalProducts, sumProducts, emptyCart, generateOrder} = useContext(CartContext);
    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const goToHome = () => {
        router.replace("/");
    }

    const sendForm = async () => {
        setOrderId(await generateOrder(nombre, email, telefono));
        emptyCart();
    }

    if (totalProducts() == 0 && orderId) {
        return (
            <div className="container m-auto my-40 text-center">
                <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <h1 className="text-4xl font-bold mb-5 dark:text-green text-center">Gracias por tu Compra!</h1>
                    <span className="font-medium">Tu número de Compra es: <b>{orderId}</b></span>
                </div>
            </div>
        )
    }

    if (totalProducts() == 0) {
        return (
            <div className="container m-auto my-40 text-center">
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <h1 className="text-4xl font-bold mb-5 dark:text-red text-center">Error</h1>
                    <span className="font-medium">Error!</span> No se encontraron Productos en el Carrito!
                </div>
                <div>
                    <Button onClick={goToHome}>Volver</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="container m-auto my-40 text-center">
            <div className="w-1/2 flex flex-col">
                <form className="max-w-md mx-auto">
                    <h1 className="text-3xl font-bold dark:text-white">Generar Orden</h1>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={email} onInput={(e) => {setEmail(e.target.value)}} />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={telefono} onInput={(e) => {setTelefono(e.target.value)}} />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono</label>
                    </div>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={sendForm}>Enviar</button>
                </form>
            </div>
            <div className="w-1/2 flex flex-col">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        {
                            cart.map(item => (
                                <tr key={item.slug} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td><Image src={item.imagen} alt={item.nombre} width={80} height={40} /></td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.nombre}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.precio}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">x{item.cantidad}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.precio * item.cantidad}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={4} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Total a Pagar</td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${sumProducts()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}