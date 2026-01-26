import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

export default function Proyects() {
    return (
        <div className="my-2 p-4">
            
            <h1 className="font-bold text-4xl mb-4 w-full border-b-2 border-white flex items-center gap-2"><span><FaCode /></span>Proyectos</h1>

            {/*Currusel con los proyecto en formas de card */}
            <div className="flex flex-col md:flex-row  md:justify-around items-center"> 
                {/*card*/}
                <div className="border rounded-xl border-black flex flex-col max-w-xs  bg-white shadow-2xl shadow-black h-[430px] overflow-hidden">
                    
                    <a  href="https://tienda-nextjs-8co3.vercel.app/products" target="_blank" rel="noopener noreferrer">
                        <img src="/img/ProductTiendaPc.png" className="rounded-t-xl w-full h-[149px]"/>
                        <div className="flex flex-col gap-5 px-5 mb-5">
                            <p className="text-lg max-h-[300px] overflow-y-auto block mt-4">
                                Desarrollé una aplicación utilizando React que permite a los usuarios crear productos mediante un formulario y visualizarlos en una lista dinámica. 
                                asi como tambien un input para buscar los productos 
                            </p>
                            <div>
                                <h4 className="mb-2 font-bold">Tecnologias</h4>

                                <div className="flex justify-around">

                                    <p className="flex justify-center items-center gap-0.5 "><span ><FaReact  size={24}/> </span>React</p>
                                    <p className="flex justify-center items-center gap-0.5 "><span ><RiNextjsLine size={24}/> </span> NextJs </p>
                                                        
                                </div>
                            </div>

                        </div>

                        <p className="text-center font-bold bg-gray-200 p-4 hover:bg-gray-400 uppercase text-lg"> Ver Proyecto</p>

                   </a>
                </div>

                <div className="border rounded-xl border-black flex flex-col max-w-xs  bg-white shadow-2xl shadow-black h-[430px] overflow-hidden">
                    
                    <a  href="https://bienes-raices-mern.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/img/BienesRaices.png" className="rounded-t-xl w-full h-[149px]"/>
                        <div className="flex flex-col gap-5 px-5 mb-5">
                            <p className="text-lg max-h-[300px] overflow-y-auto block mt-4">
                                Proyecto que cuenta con una landing page para mostrar las viviendas a vender, 
                                asi como tambien una pagina de administrador para agregar o quitar mas viviendas, al igual que editar

                            </p>
                            <div>
                                <h4 className="mb-2 font-bold">Tecnologias</h4>

                                <div className="flex justify-around">

                                    <p className="flex justify-center items-center gap-0.5 "><span ><FaReact  size={24}/> </span>React</p>
                                    <p className="flex justify-center items-center gap-0.5 "><span ><SiExpress size={24}/> </span> Express </p>
                                    <p className="flex justify-center items-center gap-0.5 "><span ><AiFillApi size={24}/> </span> API Rest </p>
                                                        
                                </div>
                            </div>

                        </div>

                        <p className="text-center font-bold bg-gray-200 p-4 hover:bg-gray-400 uppercase text-lg"> Ver Proyecto</p>

                   </a>
                </div>

                <div className="border rounded-xl border-white flex flex-col gap-5 max-w-xs ">

                    <img src="/img/AgenciaDeViajes.jpg" className="w-full rounded-t-xl"/>
                    <div className="flex flex-col gap-5 px-5 mb-5">
                        <p className="text-lg">
                            Proyecto en la cual mostramos nuestras vivienda para vender y
                            cargar nuevas propiedades que se quieran vender
                        </p>
                        <div>
                            <h4 className="mb-1 font-bold">Tecnologias</h4>

                            <div className="flex justify-around">
                                <p className="flex justify-center items-center gap-1 "><span ><IoLogoJavascript size={24}/></span>JavaScript</p>
                                <p className="flex justify-center items-center gap-1 "><span ><FaPhp size={24}/></span>PHP</p>                                                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
