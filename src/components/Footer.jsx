import linkedIn from "/linkedin.svg"
import gitHub from "/github.svg"
import logoMatias from "/logoMatias.png"

export const Footer = () => {
  return (
    <footer className="bg-gray-800 w-[80%] min-w-[300px] mx-auto rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl py-4 px-4 md:px-10 flex items-center justify-between">
        <span className="text-base md:text-lg text-gray-300 text-center ">© 2024 -
          <a href="/"> Trekking</a>
        </span>
        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400 ">
          <a
            href="https://matiasbrunodev.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to Matias Website"
          >
            <img
              width={28}
              height={28}
              src={logoMatias}
              alt="Link portfolio https://matiasbrunodev.vercel.app/"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/matiasbruno19/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to Matias Website"
          >
            <img
              width={28}
              height={28}
              src={linkedIn}
              alt="Link Linkedin /matubruno19"
              loading="lazy"
            />
          </a>

          <a
            href="https://github.com/matubruno16/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to Matias Website"
          >
            <img
              width={28}
              height={28}
              src={gitHub}
              alt="Link GitHub /matubruno16"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
