import { NextResponse } from "next/server";

const usuarios = [
    {id:1, nombre:"Victoria Mondino", email:"vickymondino@gmail.com"},
    {id:2, nombre:"Dario Venecia", email:"dariovene@gmail.com"},
    {id:3, nombre:"Pablo Ochoa", email:"pablo8a@gmail.com"},
]

export async function GET(request, {params}) {
    return NextResponse.json(usuarios)
}

export async function POST(request) {
    const {nombre, email} = await request.json();
    console.log(nombre);
    console.log(email);
    usuarios.push({id:(usuarios.length+1), nombre:nombre, email:email})

    return NextResponse.json(usuarios)
}