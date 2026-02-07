import { FaPhp } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { JSX } from "react";
import { SiTypescript } from "react-icons/si";

type Tech = { name: string; icon: JSX.Element };
type Project = {
    id: string;
    title: string;
    href?: string;
    img: string;
    alt: string;
    description: string;
    tech: Tech[];
};

const projects: Project[] = [
    {
        id: "tienda",
        title: "Tienda Next.js",
        href: "https://tienda-nextjs-8co3.vercel.app/products",
        img: "/img/ProductTiendaPc.png",
        alt: "Vista de la tienda Next.js",
        description:
            "Desarrollé una aplicación utilizando React que permite a los usuarios crear productos mediante un formulario y visualizarlos en una lista dinámica. Incluye búsqueda de productos.",
        tech: [
            { name: "React", icon: <FaReact size={20} /> },
            { name: "Next.js", icon: <RiNextjsLine size={20} /> },
        ],
    },
    {
        id: "bienes",
        title: "Bienes Raíces (MERN)",
        href: "https://bienes-raices-mern.vercel.app/",
        img: "/img/BienesRaices.png",
        alt: "Listado de propiedades",
        description:
            "Proyecto con landing page para mostrar viviendas y una sección de administrador para agregar, editar o eliminar propiedades.",
        tech: [
            { name: "React", icon: <FaReact size={20} /> },
            { name: "Express", icon: <SiExpress size={20} /> },
            { name: "API Rest", icon: <AiFillApi size={20} /> },
        ],
    },
    {
        id: "MangaApp",
        title: "Manga App",
        href: "https://manga-app-kappa.vercel.app/",
        img: "/img/MangaApp.jpg",
        alt: "Vista de la aplicación de manga",
        description:
            "Aplicación web de manga para explorar títulos y leer capítulos de forma rápida, simple y organizada.",
        tech: [
            { name: "TypeScript", icon: <SiTypescript size={20} /> },
            { name: "DiFirebase", icon: <FaPhp size={20} /> },
            { name: "Express", icon: <SiExpress size={20} /> },

        ],
    },
];

export default function Proyects() {
    return (
        <div className="my-2 p-4">
            <h1 className="font-bold text-4xl mb-4 w-full border-b-2 border-white flex items-center gap-2">
                <span>
                    <FaCode />
                </span>
                Proyectos
            </h1>

            {/* Carrusel con los proyectos en forma de cards */}
            <div className="flex flex-col md:flex-row md:justify-around items-center gap-6">
                {projects.map((p) => (
                    <article
                        key={p.id}
                        className="border rounded-xl border-black flex flex-col max-w-xs bg-white shadow-2xl shadow-black h-[460px] overflow-hidden"
                        aria-labelledby={`project-${p.id}`}
                    >
                        
                        <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${p.title}`}>
                            <img src={p.img} alt={p.alt} className="rounded-t-xl w-full h-[149px] object-cover" />
                            <div className="flex flex-col gap-5 px-5 mb-5">
                                <div id={`project-${p.id}`} className="h-36 overflow-y-auto mt-4">
                                    <p className="text-lg">{p.description}</p>
                                </div>
                                <div>
                                    <h4 className="mb-2 font-bold">Tecnologías</h4>
                                    <div className="flex justify-around">
                                        {p.tech.map((t) => (
                                            <p key={t.name} className="flex justify-center items-center gap-0.5">
                                                <span>{t.icon}</span>
                                                {t.name}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-center font-bold bg-gray-200 p-4 hover:bg-gray-400 uppercase text-lg">Ver Proyecto</p>
                        </a>
                        
                    </article>
                ))}
            </div>
        </div>
    );
}
