import ProductList from "@/app/components/ProductList";
import { Suspense } from "react";

export async function generateMetadata ({params, searchParams}, parent) {
    return {
        title:"Productos | McDonalds Argentina"
    }
}

export default async function Productos({params}) {
    const {categoria} = await params;

    return (
        <section className="container m-auto flex justify-center my-20">
            <Suspense fallback={<h1 className="text-4xl font-extrabold dark:text-white">Cargando...</h1>}>
                <ProductList categoria={categoria} />
            </Suspense>
        </section>
    )
}