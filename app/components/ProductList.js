"use client";

import useFireStore from "../firebase/useFireStore";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data: items, loading } = useFireStore(); // Notar que no se pasa slug aquí

  if (loading) return <div>Cargando productos...</div>;

  return (
    <section className="container m-auto flex justify-center my-20">
      {items.map(item => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </section>
  );
};

export default ProductList;