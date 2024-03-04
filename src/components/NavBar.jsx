import HamburgesaMenu from "/menu.png"

export const NavBar = () => {
  return (
    <nav className="z-50">
      <ul className="hidden md:flex items-center justify-between gap-4 text-lg text-gray-400">
        <a
          href="/"
          className=' hover:cursor-pointer hover:border-b hover:border-b-1  border-gray-400  transition-all ease-in-out '>
          Home
        </a>
        <a
          href="#trekking"
          className="hover:cursor-pointer hover:border-b border-gray-400 hover:border-b-1 transition-all ease-in-out hover:drop-shadow-xl " >
          Trekking
        </a>
        <a
          href="https://matiasbrunodev.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 transition-colors hover:shadow-sm hover:shadow-slate-500">
          Contacto
        </a>
      </ul>
      <img
        className="w-10 md:hidden"
        src={HamburgesaMenu}
        alt="Icono menu Hamburguesa"
        loading="lazy"
      />
    </nav>
  )
}
