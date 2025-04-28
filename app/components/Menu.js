"use client"
import { useState } from "react"
import MenuList from "./MenuList";

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="#292929" className="mx-auto">
                    <path d="M0 2.25C0 1.42157 0.671573 0.75 1.5 0.75H28V1.75C28 2.57843 27.3284 3.25 26.5 3.25L0 3.25V2.25Z"></path><path d="M28 11.25C28 10.4216 27.3284 9.75 26.5 9.75L0 9.75V10.75C0 11.5784 0.671573 12.25 1.5 12.25L28 12.25V11.25Z"></path><path d="M1.5 18.75C0.671573 18.75 0 19.4216 0 20.25V21.25H26.5C27.3284 21.25 28 20.5784 28 19.75V18.75H1.5Z"></path>
                </svg>
            </div>
            <MenuList open={open} handleClose={handleClose} />
        </>
    )
}

export default Menu