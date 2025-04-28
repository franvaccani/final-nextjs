import Logo from "./Logo"
import Menu from "./Menu"

const NavBar = () => {
    return (
        <header className="w-full">
            <div className="container m-auto p-5 flex flex-row justify-between">
                <Logo />
                <Menu />
            </div>
        </header>
    )
}

export default NavBar