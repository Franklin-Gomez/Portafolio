import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

export default function Introduction() {
    return (
        <div className="flex justify-center items-center text-2xl">
            <div className="flex flex-col w-1/2 gap-4 my-5">
                <div className="flex justify-center items-center gap-4 ">
                    <img src="/img/sho.jpg" className=" h-18 rounded-full"/>
                    <a className="border border-white rounded-2xl shadow shadow-black py-2 px-4 hover:font-bold"> Disponible para Trabajar </a>
                </div>

                <h1>Hola , Soy Franklin. </h1>   

                <p> 
                    <span className="font-bold">Ingeniero Mecatronico y Amante de la tecnologia </span> de Cartagena-Colombia.
                    Autodidacta particularmente en el ambito de desarrollo web  tanto en Front-end como en Back-end 
                </p>

                <nav className=" flex gap-6">
                    <a href="mailto:franklin_043097@hotmail.com" className="flex items-center justify-center gap-1 border border-white rounded-2xl shadow shadow-black py-2 px-4 hover:font-bold"> <BsFillPersonCheckFill size={24} /> Contactame </a>
                    <a href="https://www.linkedin.com/in/franklin-gomez1" className="flex items-center justify-center gap-1 border border-white rounded-2xl shadow shadow-black py-2 px-4 hover:font-bold"> <FaLinkedin /> Linkedin  </a>
                    <a href="/download/Cv.pdf" className="flex items-center justify-center gap-1 border border-white rounded-2xl shadow shadow-black py-2 px-4 hover:font-bold" download="FranklinGomez_CV"> <FaFileDownload />
                    CV  </a>
                </nav>
            </div>

        </div>

    )
}
