import ProductList from "@/app/components/ProductList";
import { Suspense } from "react";

export async function generateMetadata ({params, searchParams}, parent) {
    const {categoria} = await params;

    return {
        title:categoria.toUpperCase().replaceAll("-", " ") + " | McDonalds Argentina"
    }
}

export async function generateStaticParams() {
    return [
        {categoria:"hamburguesas"},
        {categoria:"pollo"},
        {categoria:"papas"},
        {categoria:"bebidas"}
    ]
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