import { ArticleTrekking } from "./ArticleTrekking";

const contenido = [
  {
    href: "#",
    className: "relative md:col-span-2 md:row-span-3 lg:row-span-2 md:col-start-1 md:row-start-4 bg-humahuaca bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer",
    titulo: "Trekking  la Quebrada de Humahuaca",
    dificultad: "Media",
  },
  {
    href: "#",
    className: "relative md:row-span-3 md:col-start-1 md:row-start-7 lg:row-start-3 bg-fitzRoy bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer",
    titulo: "Trekking al Monte Fitz Roy",
    dificultad: "Alta",
  },
  {
    href: "#",
    className: "relative md:row-span-3 md:col-start-1 lg:col-start-2 row-start-1 lg:row-start-3 bg-glaciares bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer",
    titulo: "Trekking Parque Nacional Los Glaciares",
    dificultad: "Baja",
  },
  {
    href: "#",
    className: "relative md:row-span-3 md:col-start-2 lg:col-start-3 md:row-start-1 bg-lagunaNegra bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer",
    titulo: "Trekking Laguna Negra",
    dificultad: "Media",
  },
  {
    href: "#",
    className: "relative md:row-span-3 md:row-start-7 lg:row-span-2 lg:col-start-3 lg:row-start-4 bg-tierraDelFuego bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer",
    titulo: "Trekking el Parque Nacional Tierra del Fuego",
    dificultad: "Alta",
  }
];

export const SeccionTreking = () => {
  return (
    <section className="w-full py-16 bg-[#101216] overflow-hidden">
      <h2 className="w-full flex text-center justify-center mx-auto text-5xl text-gray-50">Los mejores trekking de Argentina</h2>
      <div className="grid grid-cols-1 grid-row-5 md:grid-cols-2 lg:grid-cols-3 md:grid-row-9 lg:grid-rows-5 gap-4 w-[90%] md:w-[80%] min-w-[300px] max-w-[450px] md:max-w-full mx-auto h-[80vh] py-10">

      {contenido.map((item, index) => (
        <ArticleTrekking key={index} {...item} />
      ))}

      </div>

    </section>
  )
}
