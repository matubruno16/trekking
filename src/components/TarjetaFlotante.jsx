import time from "/iconTime.png"
import senderista from "/senderismo.png"
import close from "/icon-cerrar-ventana.png"

export const TarjetaFlotante = ({ contenido, onClose, visible }) => {
  const handleBackgroundCLoseClick = (event) => {
    if (event.target.classList.contains('fixed')) {
      onClose();
    }
  };
  return (
    <div 
      onClick={handleBackgroundCLoseClick}
      className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-60 flex justify-center items-center transition-opacity backdrop-blur-sm cursor-zoom-out ${visible ? '' : 'opacity-0 pointer-events-none'}`}>
      {contenido && (
        <div className={`relative rounded-lg overflow-hidden shadow-lg p-6 mx-auto my-8 w-[90%] h-[70%] md:w-2/3 md:h-2/3 ${contenido.background} bg-no-repeat bg-cover bg-center inset-0 transform cursor-default transition-transform shadow-gray-400 shadow-sm ${visible ? 'scale-100' : 'scale-0'}`}>
          <img
            src={close}
            width={60}
            alt="cerrar ventana"
            onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800 focus:outline-none cursor-pointer" />
          <div className="absolute flex flex-col w-full bottom-0 left-0 h-2/3 bg-gradient-to-b justify-end  from-transparent to-black px-4 pb-4 text-gray-200">
            <h2 className="text-2xl text-gray-100 font-semibold mb-2">{contenido.titulo}</h2>
            <p className="text-gray-300 text-pretty ">{contenido.descripcion}</p>
            <div className="flex items-center gap-1 pt-2">
              <img src={time} alt="Icono tiempo" className="w-6 h-6" />
              <span>{contenido.tiempo} hs</span>
              <img src={senderista} alt="Dificultad sendero" className="w-6 h-6 ml-10" />
              <span>Dificultad {contenido.dificultad}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
