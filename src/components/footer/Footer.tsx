import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

import "./Footer.css";

const Footer = () => (
  <footer>
    <section>
      <article className="flex flex-col justify-content-center items-center my-6">
        <section className="flex gap-4">
          <article className="w-14 h-14 rounded-full bg-yellow-icon flex items-center justify-content-center">
            <FaInstagram className="text-3xl text-black" />
          </article>
          <article className="w-14 h-14 rounded-full bg-yellow-icon flex items-center justify-content-center">
            <FaFacebookF className="text-4xl text-black" />
          </article>
          <article className="w-14 h-14 rounded-full bg-yellow-icon flex items-center justify-content-center">
            <FaTiktok className="text-3xl text-black" />
          </article>
        </section>
        <p className="text-gray-400 Italic mt-3">¡Siganos en nuestras redes sociales!</p>
      </article>
    </section >
    <section className="flex h-20 items-center justify-center rights-text text-white italic">
      <FaRegCopyright className="text- italic text-2xl pr-2 pb-1" />{new Date().getFullYear()}, Paticas paque las quier. Todos los derechos reservados.
    </section>
  </footer >
)

export default Footer;
