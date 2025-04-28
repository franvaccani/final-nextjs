"use client";

const Button = ({children, className="", ...args}) => {
    return (
        <button className={`focus:outline-none text-dark bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 m-1 p-2 dark:focus:ring-yellow-900 ${className}`} {...args}>
            {children}
        </button>
    )
}

export default Button