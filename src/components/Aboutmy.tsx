import { BsFillPersonCheckFill } from "react-icons/bs";

export default function Aboutmy() {
    return (
        <div className="my-6 p-6">
        <h1 className="font-bold text-4xl mb-6 w-full border-b border-white/10 flex items-center gap-3">
            <BsFillPersonCheckFill size={26} />
            Sobre mí
        </h1>

        <div className="px-6 max-w-4xl">
            <p className="mb-4 text-lg leading-relaxed">
            Soy <span className="font-bold">Franklin David Gómez García</span>, ingeniero mecatrónico con enfoque en 
            <span className="font-semibold"> desarrollo web Full Stack</span>. Combino pensamiento lógico, 
            resolución de problemas y tecnología para crear soluciones digitales funcionales y escalables.
            </p>

            <p className="mb-4 text-lg leading-relaxed">
            Desarrollo aplicaciones web modernas desde la interfaz de usuario hasta la lógica del servidor,
            cuidando el rendimiento, la usabilidad y la experiencia del usuario.
            </p>

            <p className="text-lg leading-relaxed">
            Trabajo con tecnologías como <span className="font-semibold">HTML, CSS, JavaScript, React, Next.js, 
            Node.js, Express</span> y bases de datos <span className="font-semibold">MongoDB y PostgreSQL</span>, 
            aplicando buenas prácticas y buscando siempre la solución más eficiente para cada proyecto.
            </p>
        </div>
        </div>
    )
}
