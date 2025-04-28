"use client";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Image from "next/image";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function Carrito() {
    const {cart, deleteProductFromCart, emptyCart, totalProducts, sumProducts, generateOrder} = useContext(CartContext);
    const router = useRouter();

    const goToHome = () => {
        router.replace("/");
    }

    const goToCheckout = () => {
        router.replace("/checkout");
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
        <div className="container m-auto flex flex-col my-20">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td colSpan={6} className="px-6 py-4 text-end"><Button onClick={emptyCart} title={"Vaciar Carrito"}>Vaciar Carrito</Button></td>
                        </tr>
                        {
                            cart.map(item => (
                                <tr key={item.slug} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td><Image src={item.imagen} alt={item.nombre} width={80} height={40} /></td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.nombre}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.precio}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">x{item.cantidad}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.precio * item.cantidad}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-end"><Button onClick={() => {deleteProductFromCart(item.slug)}} title={"Eliminar"}>Eliminar</Button></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={4} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Total a Pagar</td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${sumProducts()}</td>
                            <td className="px-6 py-4 text-end"><Button onClick={goToCheckout}>Checkout</Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}