import ProductDetail from "@/app/components/ProductDetail";
import useFireStore from "@/app/firebase/useFireStore";

export async function generateMetadata ({params, searchParams}, parent) {
    const {slug} = await params;
    const item = await useFireStore(slug);
    
    return {
        title:item.nombre + " | McDonalds Argentina"
    }
}

export default async function Producto({params}) {
    const {slug} = await params;    

    return (
        <div className="flex">
            <ProductDetail slug={slug} />
        </div>
    )
}