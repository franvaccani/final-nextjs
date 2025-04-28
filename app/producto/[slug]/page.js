import ProductDetail from "@/app/components/ProductDetail";

export async function generateMetadata({ params }) {
  const urlBase = process.env.URL_BASE + "/api/";
  const url = urlBase + "producto/" + params.slug;
  const response = await fetch(url, { cache: "no-store" });
  const item = await response.json();

  return {
    title: item.nombre + " | McDonalds Argentina"
  };
}

export default async function Producto({params}) {
    const {slug} = await params;    

    return (
        <div className="flex">
            <ProductDetail slug={slug} />
        </div>
    )
}