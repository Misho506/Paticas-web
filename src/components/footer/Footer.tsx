import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

import "./Footer.css";

const Footer = () => {
  const { i18n } = useTranslation();
  return (
    <footer>

      <section className="bg-dark-green px-8 pb-8 pt-2">
        <article className="flex justify-between ">
          <label className="text-white">{i18n.t("policies&Conditions")}</label>
          <MdExpandMore className="h-6 w-6 text-white" />
        </article>
        <hr className="border-1 border-white mb-3 mt-1 opacity-75" />
        <article className="space-y-4">
          <h2 className="text-white text-xl font-medium">{i18n.t("subscribe")}</h2>
          <p className="text-white text-sm">
            {i18n.t("newsletter.description")}
          </p>
          <button className="bg-white text-dark-green rounded-full py-3 px-6 inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
            <span>{i18n.t("newsletter.subscribe")}</span>
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
          <p className="text-gray-400 Italic mt-3">{i18n.t("followUs")}</p>
        </article>
      </section >
      <article className="flex h-20 items-center justify-center rights-text text-white italic">
        <FaRegCopyright className="text- italic text-2xl pr-2 pb-1" />{new Date().getFullYear()}, {i18n.t("rightsReserved")}
      </article>
    </footer >
  )
};

export default Footer;
