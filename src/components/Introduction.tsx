import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

export default function Introduction() {
    return (
        // <div className="flex justify-center items-center text-2xl">
        //     <div className="flex flex-col w-1/2 gap-4 my-5">
        //         <div className="flex justify-center items-center gap-4 ">
        //             <img src="/img/sho.jpg" className=" h-18 rounded-full"/>
        //             <a className="border border-white rounded-2xl shadow shadow-black py-2 px-4 hover:font-bold"> Disponible para Trabajar </a>
        //         </div>

        //         <h1>Hola , Soy Franklin. </h1>   

        //         <p> 
        //             <span className="font-bold">Ingeniero Mecatronico y Amante de la tecnologia </span> de Cartagena-Colombia.
        //             Autodidacta particularmente en el ambito de desarrollo web  tanto en Front-end como en Back-end 
        //         </p>

        //         <nav className=" flex gap-6">
        //             <a href="mailto:franklin_043097@hotmail.com" className="flex items-center justify-center gap-1 border border-white rounded-2xl shadow shadow-black py-2 px-4 hover:font-bold"> <BsFillPersonCheckFill size={24} /> Contactame </a>
        //             <a href="https://www.linkedin.com/in/franklin-gomez1" className="flex items-center justify-center gap-1 border border-white rounded-2xl shadow shadow-black py-2 px-4 hover:font-bold"> <FaLinkedin /> Linkedin  </a>
        //             <a href="/download/Cv.pdf" className="flex items-center justify-center gap-1 border border-white rounded-2xl shadow shadow-black py-2 px-4 hover:font-bold" download="FranklinGomez_CV"> <FaFileDownload />
        //             CV  </a>
        //         </nav>
        //     </div>

        // </div>

        <div className="flex justify-center items-center text-lg">
            <div className="flex flex-col w-full max-w-3xl gap-5 my-8 text-center">

            <div className="flex justify-center items-center gap-4">
                <img 
                    src="/img/sho.jpg" 
                    className="h-16 w-16 rounded-full object-cover border border-white/30"
                />

                <span className="border border-green-400/60 text-green-300 rounded-full px-4 py-1 text-sm font-medium">
                    Disponible para proyectos
                </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight">
                Desarrollo soluciones web <span className="text-accent">modernas y funcionales</span>
            </h1>

            <p className="text-lg leading-relaxed">
                Soy <span className="font-semibold">Franklin Gómez</span>, ingeniero mecatrónico y 
                <span className="font-semibold"> desarrollador web Full Stack</span> desde Cartagena, Colombia.  
                Ayudo a negocios y emprendedores a crear aplicaciones web eficientes, escalables y fáciles de usar.
            </p>

            <nav className="flex flex-wrap justify-center gap-4 mt-2">
                <a 
                    href="mailto:franklin_043097@hotmail.com" 
                    className="flex items-center gap-2 rounded-xl border border-black/30 px-5 py-2 hover:bg-black hover:text-white transition shadow-black/30 shadow"
                >
                    <BsFillPersonCheckFill size={20} />
                    Contáctame
                </a>

                <a 
                    href="https://www.linkedin.com/in/franklin-gomez1" 
                    target="_blank"
                    className="flex items-center gap-2 rounded-xl border border-black/30 px-5 py-2 hover:bg-black hover:text-white transition shadow-black/30 shadow"                >
                    <FaLinkedin />
                    LinkedInd
                </a>

                <a 
                    href="/download/Cv.pdf" 
                    download="FranklinGomez_CV"
                    className="flex items-center gap-2 rounded-xl border border-black/30 px-5 py-2 hover:bg-black hover:text-white transition shadow-black/30 shadow"                >
                    <FaFileDownload />
                    Descargar CV
                </a>
            </nav>

            </div>
        </div>

    )
}
