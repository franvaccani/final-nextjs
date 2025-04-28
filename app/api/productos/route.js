import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";

// Consumir todos los Documentos de una Colección
export async function GET() {
    const productsRef = collection(db, "productos");
    const querySnapshot = await getDocs(productsRef);
    const docs = querySnapshot.docs.map(item => (item.data()));

    return NextResponse.json(docs);
}

// Subir todos los Productos de nuestro JSON a nuestra Colección
/* export async function GET() {
    const productsRef = collection(db, "productos");
    
    for (const item of mockData) {
        await addDoc(productsRef, item);
    }

    return NextResponse.json("Fin del proceso!");
} */