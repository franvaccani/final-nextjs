import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request) {
    const productsRef = collection(db, "productos");
    const querySnapshot = await getDocs(productsRef);
    const docs = querySnapshot.docs.map(item => (item.data()));

    const response = NextResponse.json(docs);

    // Agregamos headers CORS
    response.headers.set('Access-Control-Allow-Origin', '*'); // o poner tu dominio si querés más seguridad
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
}

// Subir todos los Productos de nuestro JSON a nuestra Colección
/* export async function GET() {
    const productsRef = collection(db, "productos");
    
    for (const item of mockData) {
        await addDoc(productsRef, item);
    }

    return NextResponse.json("Fin del proceso!");
} */