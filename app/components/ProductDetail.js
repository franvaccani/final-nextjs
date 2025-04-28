"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import useFireStore from "../firebase/useFireStore";

const ProductDetail = ({ slug }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await useFireStore(slug);
      setItem(data);
    };

    fetchData();
  }, [slug]);

  if (!item) return <div>Cargando...</div>; // Mostramos un loading mientras carga

  return (
    <div className="container m-auto flex flex-row my-20 px-20">
      <div className="w-1/2 flex flex-col items-end">
        <Image src={item.imagen} alt={item.nombre} width={320} height={240} />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold dark:text-white">{item.nombre}</h1>
        <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 my-2">{item.descripcion}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white my-2">${item.precio}</p>
        <Counter item={item} />
      </div>
    </div>
  );
};

export default ProductDetail;