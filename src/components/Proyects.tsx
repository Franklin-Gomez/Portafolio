import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

export default function Proyects() {
    return (
        <div className="my-2 p-4">
            
            <h1 className="font-bold text-4xl mb-4 w-full border-b-2 border-white flex items-center gap-2"><span><FaCode /></span>Proyectos</h1>

            {/*Currusel con los proyecto en formas de card */}
            <div className="flex flex-col md:flex-row  md:justify-around items-center"> 
                {/*card*/}
                <div className="border rounded-xl border-white flex flex-col gap-5 max-w-xs ">

                    <img src="/img/AgenciaDeViajes.jpg" className="w-full rounded-t-xl"/>
                    <div className="flex flex-col gap-5 px-5 mb-5">
                        <p>
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

                <div className="border rounded-xl border-white flex flex-col gap-5 max-w-xs ">

                    <img src="/img/AgenciaDeViajes.jpg" className="w-full rounded-t-xl"/>
                    <div className="flex flex-col gap-5 px-5 mb-5">
                        <p>
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
                <div className="border rounded-xl border-white flex flex-col gap-5 max-w-xs ">

                    <img src="/img/AgenciaDeViajes.jpg" className="w-full rounded-t-xl"/>
                    <div className="flex flex-col gap-5 px-5 mb-5">
                        <p>
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
