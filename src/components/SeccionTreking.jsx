import { useState } from "react";
import { ArticleTrekking } from "./ArticleTrekking";
import { TarjetaFlotante } from "./TarjetaFlotante";

const contenido = [
  {
    href: "#",
    className: "relative md:col-span-2 md:row-span-3 lg:row-span-2 md:col-start-1 md:row-start-4 bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer",
    titulo: "Trekking  la Quebrada de Humahuaca",
    dificultad: "Media",
    background: "bg-humahuaca",
    descripcion: "El trekking en la Quebrada de Humahuaca ofrece paisajes impresionantes y una rica historia cultural. La dificultad puede variar según la ruta, pero generalmente se recomienda tener buena condición física. Se puede dedicar varios días para explorar la zona y disfrutar de pueblos pintorescos, ruinas arqueológicas y paisajes naturales.",
    tiempo:"4",
  },
  {
    href: "#",
    className: "relative md:row-span-3 md:col-start-1 md:row-start-7 lg:row-start-3 bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer",
    titulo: "Trekking al Monte Fitz Roy",
    dificultad: "Alta",
    background: "bg-fitzRoy",
    descripcion:"El Monte Fitz Roy, también conocido como Cerro Fitz Roy, es una impresionante montaña ubicada en el Parque Nacional Los Glaciares, en la Patagonia argentina. Es un destino popular para los amantes del trekking debido a su imponente belleza y desafiante terreno. El trekking hasta la base del Monte Fitz Roy es considerado de dificultad media a alta, con senderos rocosos y empinados que requieren una buena condición física y experiencia en caminatas largas. El tiempo estimado para completar la caminata hasta la base y regresar suele ser de aproximadamente 8 a 10 horas, dependiendo del ritmo y las condiciones climáticas. Los paisajes espectaculares, los glaciares y las lagunas de color turquesa son algunos de los aspectos más destacados de esta increíble aventura en la naturaleza patagónica.",
    tiempo:"10",

  },
  {
    href: "#",
    className: "relative md:row-span-3 md:col-start-1 lg:col-start-2 row-start-1 lg:row-start-3 bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer",
    titulo: "Trekking Perito Moreno",
    dificultad: "Moderada",
    background: "bg-peritomoreno",
    descripcion:"El trekking al Glaciar Perito Moreno es de dificultad moderada y lleva aproximadamente 6 horas completarla, ida y vuelta. Durante el recorrido, los visitantes pueden disfrutar de vistas panorámicas espectaculares del glaciar y su entorno natural único. Es importante llevar ropa adecuada para el clima cambiante y estar preparado para caminar en terreno irregular.",
    tiempo:"6",

  },
  {
    href: "#",
    className: "relative md:row-span-3 md:col-start-2 lg:col-start-3 md:row-start-1 bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer",
    titulo: "Trekking Laguna Negra",
    dificultad: "Alta",
    background: "bg-lagunaNegra",
    descripcion:"El sendero para llegar a la laguna comienza en la base del Cerro Catedral y se extiende a lo largo de aproximadamente 11 kilómetros de ida y vuelta. La dificultad del trekking es moderada, con algunas pendientes pronunciadas pero accesibles para la mayoría de los excursionistas. El tiempo estimado para completar la caminata es de aproximadamente 6 a 7 horas, dependiendo del ritmo y las paradas para descansar o disfrutar de las vistas panorámicas de los picos nevados y los bosques de lengas. Se recomienda llevar agua, protector solar, ropa adecuada para la montaña.",
    tiempo:"7",

  },
  {
    href: "#",
    className: "relative md:row-span-3 md:row-start-7 lg:row-span-2 lg:col-start-3 lg:row-start-4 bg-cover bg-no-repeat rounded-lg bg-center overflow-hidden cursor-pointer ",
    titulo: "Trekking Lago Roca",
    dificultad: "Moderada",
    background: "bg-tierraDelFuego",
    descripcion:"Mirador del Lago Roca, que ofrece vistas impresionantes de los lagos y montañas circundantes. La dificultad de este trekking es moderada, ya que no presenta terrenos extremadamente difíciles ni pendientes pronunciadas. Por lo general, lleva alrededor de 3 a 4 horas completar la caminata de ida y vuelta, dependiendo del ritmo y las paradas que se hagan en el camino. Es importante llevar ropa adecuada para el clima cambiante y agua suficiente, ya que el clima en Tierra del Fuego puede ser impredecible. También se recomienda informarse sobre las condiciones del sendero antes de emprender la caminata, ya que pueden haber cierres temporales debido a condiciones climáticas adversas o mantenimiento del parque.",
    tiempo:"4",

  }
];

export const SeccionTreking = () => {
  const [tarjetaVisible, setTarjetaVisible] = useState(false);
  const [articuloSeleccionado, setArticuloSeleccionado] = useState(null);

  const abrirTarjeta = (index) => {
    setArticuloSeleccionado(index);
    setTarjetaVisible(true);
  };

  const cerrarTarjeta = () => {
    setArticuloSeleccionado(null);
    setTarjetaVisible(false);
  };

  return (
    <section id="trekking" className="w-full py-16 bg-[#101216] overflow-hidden">
      <h2 className="w-full flex text-center justify-center mx-auto text-5xl text-gray-50">Los mejores trekking de Argentina</h2>
      <div className="grid grid-cols-1 grid-row-5 md:grid-cols-2 lg:grid-cols-3 md:grid-row-9 lg:grid-rows-5 gap-4 w-[90%] md:w-[80%] min-w-[300px] max-w-[450px] md:max-w-full mx-auto h-[80vh] py-10">
        {contenido.map((item, index) => (
          <ArticleTrekking key={index} {...item} onClick={() => abrirTarjeta(index)} />
        ))}
      </div>

      {/* Tarjeta flotante */}
      <TarjetaFlotante
        contenido={contenido && contenido[articuloSeleccionado]}
        visible={tarjetaVisible}
        onClose={cerrarTarjeta}
      />
    </section>
  );
};