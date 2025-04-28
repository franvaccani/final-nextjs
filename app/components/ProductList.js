"use client";

import { useEffect, useState } from "react";
import useFireStore from "../firebase/useFireStore";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await useFireStore();
      setItems(data);
    };

    fetchData();
  }, []);

  if (items.length === 0) return <div>Cargando productos...</div>;

  return (
    <section className="container m-auto flex justify-center my-20">
      {items.map(item => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </section>
  );
};

export default ProductList;