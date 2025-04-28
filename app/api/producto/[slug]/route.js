import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request, {params}) {
    const {slug} = await params;
    const productsRef = collection(db, "productos");
    const q = query(productsRef, where("slug", "==", parseInt(slug)));
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map(item => (item.data()));

    return NextResponse.json(docs[0]);
}