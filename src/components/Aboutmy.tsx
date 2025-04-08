import { BsFillPersonCheckFill } from "react-icons/bs";

export default function Aboutmy() {
    return (
        <div className="my-2 p-4">
            <h1 className="font-bold text-4xl mb-4 w-full border-b-2 border-white flex items-center gap-2"><span><BsFillPersonCheckFill size={24} /></span>Sobre mi</h1>
            
            <div className="px-12">
                <p className="mb-2 text-xl">
                    Me llamo <span className="font-bold"> Franklin David Gomez Garcia. </span>  soy ingeniero mecatronico gradudado del 2013. siempre me ha apasionado
                    la tecnologia  despues temprana edad con los videojuegos.
                </p>

                <p className="mb-2 text-xl">            
                    Actualmente adentrandome en el mismo de desarrollo web aprendiendo tecnologias para cubrir el campo completo de front a back
                    aprendiendo lo basico en cada una de estas tecnologias
                </p>

                <p className="mb-2 text-xl">
                    me adentre en aprender html,css,JavaScript,tailwindcss y react con respecto al front, y continuando con Express.js , Node.js y MongoDB o PostgreSQL. todo esto aprendido de forma autodidacta y buscando siempre mejorar e ir encontrando las soluciones mas faciles y mas optimas para un proyecto.
                </p>

            </div>

        </div>
    )
}
