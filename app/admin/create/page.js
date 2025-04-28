"use client";
import { useState } from "react"
import { db, storage } from "@/app/firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function CreateProductPage() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [idProduct, setIdProduct] = useState("");
    const [values, setValues] = useState({});
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct(values, file);
    }

    const createProduct = async (values, file) => {
        const productsRef = collection(db, "productos");
        const productos = await getDocs(productsRef);
        const slug = productos.size + 1;

        // Agregar un Archivo a Storage
        const storageRef = ref(storage, "gs://coderhouse-72015.firebasestorage.app");        
        const fileSnapShot = await uploadBytes(storageRef, file);
        const fileUrl = await getDownloadURL(fileSnapShot.ref);
        console.log(fileUrl);

        // Agregar un Documento a FireStore
        values = {slug:slug, nombre, descripcion, precio, imagen:fileUrl, categoria};
        const response = await addDoc(productsRef, values);
        setIdProduct(response.id);
    }

    return (
        <div className="container m-auto flex flex-col my-20">
            <h1 className="text-4xl font-bold mb-5 dark:text-white text-center">Agregar Producto</h1>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={nombre} onInput={(e) => {setNombre(e.target.value)}} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                    <textarea type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={descripcion} onInput={(e) => {setDescripcion(e.target.value)}} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={precio} onInput={(e) => {setPrecio(e.target.value)}} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen</label>
                    <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={file} onInput={(e) => {setFile(e.target.value)}} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoría</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={categoria} onInput={(e) => {setCategoria(e.target.value)}} required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={createProduct}>Enviar</button>
            </form>
            {idProduct ? <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">Producto creado!</span> El producto se creo correctamente! ID #: <b>{idProduct}</b></div> : ""}
        </div>
    )
}