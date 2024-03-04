import time from "/iconTime.png"
import senderista from "/senderismo.png"

export const ArticleTrekking = ({ onClick, className, titulo, dificultad, background, tiempo }) => {
  return (

    <article
      onClick={onClick}
      className={`${className} " " ${background}`}>
      <div className="flex w-full items-end absolute bottom-0 left-0 h-1/2 bg-gradient-to-b from-transparent to-black px-4 pb-4 text-gray-200">
        <div className="flex flex-col w-3/4">
          <h3 className="text-pretty">{titulo}</h3>
          <div className="flex gap-3 ">
            <div className="flex gap-1 items-center ">
              <img
                className="w-6 h-6"
                width={24}
                height={24}
                src={time}
                alt="Icono tiempo"
                loading="lazy"
              />
              <span>{tiempo}hs</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                className="w-6 h-6"
                width={24}
                height={24}
                src={senderista}
                alt="Dificultad sendero"
                loading="lazy"
              />
              <span>{dificultad}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

