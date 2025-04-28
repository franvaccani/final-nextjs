"use client";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (item, quantity) => {        
        let product = cart.find(itemCart => itemCart.slug == item.slug);

        if (product) {
            product.quantity += quantity;
            setCart([...cart]);
        } else {
            product = {...item, cantidad:quantity};
            setCart([...cart, product]);
        }

        console.log("Se agregó el Producto #" + item.slug + "!");   
    }

    const deleteProductFromCart = (id) => {
        let cartUpdated = cart.filter(item => item.slug != id);
        setCart([...cartUpdated]);
        console.log("Se eliminó el Producto #" + id + "!");
    }

    const emptyCart = () => {
        setCart([]);
        console.log("Se vació el Carrito!");
    }

    const totalProducts = () => {
        return cart.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumProducts = () => {
        return cart.reduce((acum, item) => acum += item.precio * item.cantidad, 0);
    }

    const generateOrder = async (nombre, email, telefono) => {
        const items = cart.map(item => ({id:item.slug, nombre:item.nombre, precio:item.precio, cantidad:item.cantidad}));
        const user = {nombre, email, telefono}
        const fechaActual = new Date();
        const fecha = `${fechaActual.getDate()}-${fechaActual.getMonth()+1}-${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`;
        const total = sumProducts();
        const order = {items, user, fecha, total};        
        const pedidosCollection = collection(db, "pedidos");
        const docSnapShot = await addDoc(pedidosCollection, order);

        return docSnapShot.id;
    }

    return <CartContext.Provider value={{cart, addProductToCart, deleteProductFromCart, emptyCart, totalProducts, sumProducts, generateOrder}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider