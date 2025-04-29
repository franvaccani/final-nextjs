"use client"; // Marcar el archivo como un componente de cliente

import { useState, useEffect } from 'react';

const useFireStore = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    const urlBase = process.env.NEXT_PUBLIC_URL_BASE + "/api/";
      const url = urlBase + (id ? "producto/" + id : "productos");
      const response = await fetch(url, { cache: "no-store" });
      const items = await response.json();
      setData(items);  // Guarda los datos
      setLoading(false); // Actualiza el estado de carga
    };

    fetchData();
  }, [id]); // Dependencia en `id`, se ejecutará cuando cambie

  return { data, loading };  // Retorna tanto los datos como el estado de carga
};

export default useFireStore;