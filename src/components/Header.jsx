import Mountain from "/montanas.png"
import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="absolute z-50 w-full px-10 py-6 flex justify-between items-center ">
      <a href="/">
        <img
          className="bg-cover aspect-square overflow-hidden w-10"
          src={Mountain}
          alt="Logo Montaña"
          loading="lazy"
        />
      </a>
      <NavBar />
    </header>
  )
}
