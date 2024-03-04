import Mountain from "/mountain.svg"
import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="absolute z-50 w-full px-10 pt-6 flex justify-between items-center ">
      <a href="/">
        <img
          className="bg-cover aspect-video overflow-hidden w-24"
          src={Mountain}
          alt="Logo Montaña"
          loading="lazy"
        />
      </a>
      <NavBar />
    </header>
  )
}
