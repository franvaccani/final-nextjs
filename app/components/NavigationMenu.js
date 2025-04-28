import mockData from "@/app/data/productos.json"
import Link from "next/link";

const NavigationMenu = ({categoria}) => {    
    const categorias = [];

    for (const elemento of mockData) {
        if (elemento.categoria != categoria) {
            if (!categorias.find(item => item == elemento.categoria)) {
                categorias.push(elemento.categoria);
            }
        }
    }

    return (
        <div className="container flex m-auto p-5">
            {
                categorias.map(item => (
                    <Link key={item} href={"/productos/" + item} className="underline mx-2">{item}</Link>
                ))
            }
        </div>
    )
}

export default NavigationMenu