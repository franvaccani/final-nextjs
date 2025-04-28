import { NextResponse } from "next/server";

const usuarios = [
    {id:1, nombre:"Victoria Mondino", email:"vickymondino@gmail.com"},
    {id:2, nombre:"Dario Venecia", email:"dariovene@gmail.com"},
    {id:3, nombre:"Pablo Ochoa", email:"pablo8a@gmail.com"},
]

export async function GET(request, {params}) {
    const {id} = params;
    const users = usuarios.find(item => item.id == id);

    return NextResponse.json(users)
}