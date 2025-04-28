"use client";

import Button from "@/app/components/Button";
import { useEffect } from "react";

export default function Error({error, reset}) {
    useEffect(() => {
        console.log("Error:");
        console.error(error);
    }, [error])

    return (
        <div className="container m-auto my-40 text-center">
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <h1 className="text-4xl font-bold mb-5 dark:text-red text-center">Error</h1>
                <span className="font-medium">Error!</span> Hubo un error en cargar la página!
            </div>
            <div>
                <Button onClick={reset}>Volver</Button>
            </div>
        </div>
    )
}