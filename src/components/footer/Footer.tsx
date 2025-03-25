import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

import "./Footer.css";
import Modal from "../modal/Modal";
import { useState } from "react";

const Footer = () => {
  const { i18n } = useTranslation();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleDownloadTerms = (e: React.MouseEvent) => {
    // Optional: You could add tracking or logging here
    try {
      // Trigger download
      const link = document.createElement('a');
      link.href = `/terms&Conditions/${i18n.language === "en" ? "Terms & Conditions.pdf" : "Términos y Condiciones.pdf"}`;
      link.download = i18n.language === "en" ? "Terms & Conditions.pdf" : "Términos y Condiciones.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed", error);
      // Optional: Show user-friendly error message
    }
  };

  return (
    <footer>
      <Modal open={openModal} onClose={setOpenModal} message={i18n.t("notAvailableNewsLetter.message")} title={i18n.t("notAvailableCard.title")} />
      <section className="bg-dark-green px-8 pb-8 pt-2">
        <article className="flex justify-between">
          <button
            className="bg-green-darker"
            onClick={handleDownloadTerms}
          >
            <label className="text-white cursor-pointer">{i18n.t("terms&Conditions")}</label>
          </button>
        </article>
        <hr className="border-1 border-white mb-3 mt-1 opacity-75" />
        <article className="space-y-4">
          <h2 className="text-white text-xl font-medium">{i18n.t("subscribe")}</h2>
          <p className="text-white text-sm">
            {i18n.t("newsletter.description")}
          </p>
          <button onClick={() => setOpenModal(true)} className="bg-white text-dark-green rounded-full py-3 px-6 inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
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
