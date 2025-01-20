import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";


import "./Footer.css";

const Footer = () => (
  <footer>

    <section className="bg-dark-green px-8 pb-8 pt-2">
      <article className="flex justify-between ">
        <label className="text-white">Políticas y condiciones</label>
        <MdExpandMore className="h-6 w-6 text-white" />
      </article>
      <hr className="border-1 border-white mb-3 mt-1 opacity-75" />
      <article className="space-y-4">
        <h2 className="text-white text-xl font-medium">Suscríbase</h2>
        <p className="text-white text-sm">
          Si le gustaría estar al día con opciones de giras, tips de viajes y más no dude en suscribirse.
        </p>
        <button className="bg-white text-dark-green rounded-full py-3 px-6 inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
          <span>Suscríbase a nuestro newsletter</span>
          <IoIosArrowRoundForward className="h-5 w-5" />
        </button>
      </article>
    </section>
    <section>
      <article className="flex flex-col justify-content-center items-center my-6">
        <div className="flex gap-4">
          <div onClick={() => window.open('https://www.instagram.com/paticas_paque_las_quierocr/')} className="w-14 h-14 rounded-full bg-yellow-icon flex items-center justify-content-center">
            <FaInstagram className="text-3xl text-black" />
          </div>
          <div onClick={() => window.open('https://www.facebook.com/Paticaspaquelasquiero')} className="w-14 h-14 rounded-full bg-yellow-icon flex items-center justify-content-center">
            <FaFacebookF className="text-4xl text-black" />
          </div>
          <div onClick={() => window.open('https://www.tiktok.com/@paticaspaquelasquiero')} className="w-14 h-14 rounded-full bg-yellow-icon flex items-center justify-content-center">
            <FaTiktok className="text-3xl text-black" />
          </div>
        </div>
        <p className="text-gray-400 Italic mt-3">!Síganos en nuestras redes sociales!</p>
      </article>
    </section >
    <article className="flex h-20 items-center justify-center rights-text text-white italic">
      <FaRegCopyright className="text- italic text-2xl pr-2 pb-1" />{new Date().getFullYear()}, Paticas paque las quiero. Todos los derechos reservados.
    </article>
  </footer >
)

export default Footer;
