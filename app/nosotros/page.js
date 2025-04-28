import Image from "next/image";

export default function Nosotros() {
    return (
        <>
            <div className="flex flex-row mt-40">
                <div className="w-1/2 flex flex-col px-40 justify-center">
                    <h1 className="text-7xl font-bold leading-36">Con las familias</h1>
                </div>
                <div className="w-1/2">
                    <Image src="/images/familia.webp" alt="Familia #1" width={600} height={400} style={{ objectFit: "cover" }} />
                </div>
            </div>
            <div className="flex flex-col bg-[#ffbc0d]">
                <div className="container m-auto my-20">
                    <h2 className="text-6xl font-bold mb-5 dark:text-white">Compromiso en Familia</h2>
                    <p className="text-1xl">Cada día, millones de familias visitan nuestros restaurantes y es nuestra responsabilidad actuar respecto a algunos de los asuntos que más les preocupan. La nutrición, la educación y la salud son los tres pilares fundamentales en la vida de las familias y los mismos sobre los que se construye nuestro compromiso diario con ellas. La mayor responsabilidad que tenemos como Compañía es asegurar el bienestar de las miles de familias que nos visitan cada día.</p>
                </div>
            </div>
            <div className="container m-auto flex flex-row my-20">
                <div className="w-1/3">
                    <Image src="/images/familia2.webp" alt="Familia #2" width={600} height={400} style={{ objectFit: "cover" }} />
                </div>
                <div className="w-2/3 flex flex-col justify-center">
                    <h2 className="text-5xl font-bold mb-5 dark:text-white">Cajita Feliz · Libros Pioneros en fomentar la lectura infantil.</h2>
                    <p>Como parte de nuestro compromiso con las familias, lanzamos en 2017 la iniciativa de Libro o Juguete, un programa que tiene como objetivo estimular en los más pequeños la pasión por la lectura. Queremos que los niños se acerquen más a la lectura, desarrollen la imaginación, la creatividad, y esto ayude a fortalecer lazos familiares. Cada vez es más importante incorporar y potenciar la lectura en el día a día de nuestros niños y niñas, no solo a través de la educación, sino facilitando el acceso a la literatura infantil en sus momentos de ocio. Por ello ofrecemos la oportunidad a cada niño para que elija entre un Libro o Juguete al momento de pedir su Cajita Feliz.</p>
                </div>
            </div>
            <div className="container m-auto flex flex-row my-20">
                <div className="w-2/3 flex flex-col justify-center">
                    <h2 className="text-5xl font-bold mb-5 dark:text-white">Compromiso con la Nutrición</h2>
                    <p>La importancia de llevar buenos hábitos alimentarios. Cada día, millones de familias visitan nuestros restaurantes. Como compañía líder y comprometida con la sociedad, somos conscientes de la importancia que tienen aspectos como la calidad nutricional y la seguridad alimentaria de nuestros productos y la necesidad de llevar un estilo de vida equilibrado. Queremos que los padres puedan estar tranquilos cuando ofrezcan una Cajita Feliz a sus hijos y demostrarles que trabajamos de manera continuada para adaptar los productos del menú de Cajita Feliz a las necesidades nutricionales de los niños, y contribuir a que adquieran buenos hábitos alimentarios, sin perder la diversión asociada a la marca. Sabemos que para las familias la nutrición es un tema muy importante, esto nos ha llevado a asumir los siguientes compromisos.</p>
                </div>
                <div className="w-1/3">
                    <Image src="/images/familia3.webp" alt="Familia #3" width={600} height={400} style={{ objectFit: "cover" }} />
                </div>
            </div>
            <div className="container m-auto flex flex-row my-20">
                <div className="w-1/3">
                    <Image src="/images/familia4.webp" alt="Familia #4" width={600} height={400} style={{ objectFit: "cover" }} />
                </div>
                <div className="w-2/3 flex flex-col justify-center">
                    <h2 className="text-5xl font-bold mb-5 dark:text-white">Casa Ronald McDonald’s</h2>
                    <p>Por el bienestar de los niños y sus familias. Nuestra Compañía ha desempeñado un papel importante durante 44 años apoyando a las familias con niños realizando tratamientos médicos, manteniéndolos unidos y cerca de la atención médica que necesitan. Para ello, actúa bajo tres emblemáticos programas: Casas Ronald McDonald, Salas Familiares y Unidades Pediátricas Móviles, que ofrecen bienestar y apoyo a familias con hijos gravemente enfermos, que se deben desplazar para recibir tratamiento médico.</p>
                </div>
            </div>
            <div className="w-full flex flex-row my-20">
                <div className="w-1/2 flex flex-col mx-5 shadow-md rounded-md">
                    <div>
                        <Image src="/images/familia5.webp" alt="Familia #5" width={600} height={400} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="p-5">
                        <h2 className="text-3xl font-bold mb-5 dark:text-white">Cajita Feliz</h2>
                        <p>El menú infantil más divertido.</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col mx-5 shadow-md rounded-md">
                    <div>
                        <Image src="/images/familia6.png" alt="Familia #6" width={600} height={400} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="p-5">
                        <h2 className="text-3xl font-bold mb-5 dark:text-white">McDonald’s Land</h2>
                        <p>Un juego al que se puede acceder a traves de la plataforma Roblox para obtener descuentos y recompensas.</p>
                    </div>
                </div>
            </div>
        </>
    )
}