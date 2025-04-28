import { Router } from "next/navigation";
import Boton from "./components/Button";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-8xl uppercase">Error 404!</h1>
                <h3 className="text-3xl">La página que estás buscando no existe!</h3>
                <div className="my-5">
                    <Boton>Volver a la Página Principal</Boton>
                </div>
            </div>
        </div>
    )
}