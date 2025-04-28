import Link from "next/link";

const MenuList = ({open, handleClose}) => {
    return (
        <div className={`${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
            <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-500`}>
                <div onClick={handleClose} className="text-white text-center p-5">
                    [ X ]
                </div>
                <nav className="flex flex-col gap-5 px-5">
                    <Link href="/" className="text-white p-2">Inicio</Link>
                    <Link href="/productos" className="text-white p-2">Productos</Link>
                    <Link href="/nosotros" className="text-white p-2">Nosotros</Link>
                    <Link href="/admin" className="text-white p-2">Administrador</Link>
                    <Link href="/carrito" className="text-white p-2">Carrito</Link>
                    <Link href="/contacto" className="text-white p-2">Contacto</Link>
                </nav>
            </aside>
        </div>
    )
}

export default MenuList