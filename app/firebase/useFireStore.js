import { useState, useEffect } from 'react';

const useFireStore = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
        const baseUrl = isLocalhost
          ? "http://localhost:3000/"
          : process.env.NEXT_PUBLIC_URL_BASE;

        const url = baseUrl + "api/" + (id ? "producto/" + id : "productos");

        const response = await fetch(url, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`Error en la respuesta del servidor: ${response.status}`);
        }

        const items = await response.json();

        // Usar imágenes locales
        const updatedItems = items.map(item => ({
          ...item,
          imagen: "/images/" + item.imagen // Asegúrate de que 'imagen' sea el nombre del archivo en Firestore
        }));

        setData(updatedItems);
      } catch (error) {
        console.error('Error cargando datos:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading };
};

export default useFireStore;