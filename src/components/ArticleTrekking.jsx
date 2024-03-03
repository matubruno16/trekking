import time from "/iconTime.png"
import senderista from "/senderismo.png"


export const ArticleTrekking = ({ onClick , className, titulo, dificultad, background, tiempo }) => {
  return (
    <article
      onClick={onClick}
      className={`${className} " " ${background}`}>
      <div className="flex w-full items-end absolute bottom-0 left-0 h-1/2 bg-gradient-to-b from-transparent to-black px-4 pb-4 text-gray-200">
        <div className="flex flex-col w-3/4">
          <h3 className="text-pretty">{titulo}</h3>
          <div className="flex gap-3 ">
            <div className="flex gap-1 pt-1">
              <img
                width={24}
                height={24}
                src={time}
                alt="Icono tiempo" />
              <span>{tiempo}hs</span>
            </div>
            <div className="flex gap-1 pt-1">
              <img
                width={22}
                height={22}
                src={senderista}
                alt="Deficuktad sendero" />
              <span>{dificultad}
              </span>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};

