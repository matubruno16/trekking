import linkedIn from "/linkedin.svg"
import gitHub from "/github.svg"
import logoMatias from "/logoMatias.png"

export const Footer = () => {
  return (
    <footer className="bg-gray-800 w-[90%] min-w-[300px] mx-auto rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl py-4 px-4 md:px-10 flex items-center justify-between">
        <span className="text-base md:text-lg text-gray-500 text-center dark:text-gray-400">© 2024 <a href="/" className="">Trekking</a>
        </span>
        <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400 ">
        <a href="https://matiasbrunodev.vercel.app/" className="">
            <img
            width={28}
              src={logoMatias}
              alt="Link portfolio https://matiasbrunodev.vercel.app/" />
          </a>
          <a href="https://www.linkedin.com/in/matiasbruno19/" className="">
            <img
              width={28}
              src={linkedIn}
              alt="Link Linkedin /matubruno19" />
          </a>
          
          <a href="https://github.com/matubruno16/" className="">
            <img
              width={28}
              src={gitHub}
              alt="Link GitHub /matubruno16" />
          </a>
        </ul>
      </div>
    </footer>
  )
}
