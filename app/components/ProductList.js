import useFireStore from "../firebase/useFireStore";
import ProductCard from "./ProductCard";

const ProductList = async () => {
    const items = await useFireStore();    

    return (
        <section className="container m-auto flex justify-center my-20">
            {
                items.map(item => (
                    <ProductCard key={item.slug} item={item} />
                ))
            }
        </section>
    )
}

export default ProductList