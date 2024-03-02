import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-200%", "1500%"]);

  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.h1
        style={{ y: textY, translateX: (0), }}
        className="font-bold text-gray-300 text-6xl md:text-7xl 2xl:text-9xl relative z-10 uppercase"
      >
        Trekking
      </motion.h1>

      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(completa.webp)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div> 
      <div
        className="absolute inset-0 z-20 mountain"
        style={{
          backgroundImage: "url(subtract.webp)",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></div>


    </div>
  );
};
