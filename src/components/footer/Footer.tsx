import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTiktok, FaTripadvisor } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

// import Pyme from "../../assets/PYME.webp";
// import TripAdvisorIMG from "../../assets/tripadvisor.png";
import Modal from "../modal/Modal";
import { useState } from "react";

const Footer = () => {
  const { i18n } = useTranslation();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <footer className="text-white">
      <Modal
        open={openModal}
        onClose={setOpenModal}
        message={i18n.t("footer.notAvailableNewsLetter.message")}
        title={i18n.t("footer.notAvailableCard.title")}
      />

      {/* Top Section */}
      <section className="bg-[#2a4328] py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <article>
            <h2 className="text-xl font-bold">{i18n.t("footer.company.title")}</h2>
            <p className="mt-2 text-sm italic">{i18n.t("footer.company.description")}</p>
          </article>

          {/* Explore */}
          <nav aria-label="explore">
            <h3 className="font-semibold text-lg">{i18n.t("footer.explore.title")}</h3>
            <ul className="mt-2 space-y-2 text-sm text-left italic pl-0">
              <li><a href="" className="text-white">{i18n.t("footer.explore.tours")}</a></li>
              <li><a href="/blogs" className="text-white">{i18n.t("footer.explore.blog")}</a></li>
              <li><a href="/about-us" className="text-white">{i18n.t("footer.explore.about")}</a></li>
              <li><a href="/contact" className="text-white">{i18n.t("footer.explore.contact")}</a></li>
              <li><a href="/faqs" className="text-white">{i18n.t("footer.explore.faqs")}</a></li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="support">
            <h3 className="font-semibold text-lg">{i18n.t("footer.support.title")}</h3>
            <ul className="mt-2 space-y-2 text-sm text-left italic pl-0">
              <li><a href={`/terms&conditions/`} className="text-white">{i18n.t("footer.support.terms")}</a></li>
              <li><a href={`/privacy/${i18n.language}`} className="text-white">{i18n.t("footer.support.privacy")}</a></li>
              <li><a href={`/cancel/`} className="text-white">{i18n.t("footer.support.cancel")}</a></li>
              <li><a href={`/payment/`} className="text-white">{i18n.t("footer.support.payment")}</a></li>
              <li><a href={`/community/`} className="text-white">{i18n.t("footer.support.community")}</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <section aria-label={i18n.t("footer.contact.title")}>
            <h3 className="font-semibold text-lg">{i18n.t("footer.contact.title")}</h3>
            <p className="mt-2 italic text-sm">
              {i18n.t("footer.contact.location")}
            </p>
            <p className="mt-1 italic text-sm">{i18n.t("footer.contact.email")}</p>
            <p className="mt-1 italic text-sm">{i18n.t("footer.contact.phone")}</p>
            <div className="flex gap-4 mt-3 ">
              <div onClick={() => window.open('https://www.instagram.com/paticas_paque_las_quierocr/')} className="w-8 h-8 rounded-full bg-[#F0B500] flex items-center justify-content-center cursor-pointer">
                <FaInstagram className="text-xl text-black" />
              </div>
              <div onClick={() => window.open('https://www.facebook.com/Paticaspaquelasquiero')} className="w-8 h-8 rounded-full bg-[#F0B500] flex items-center justify-content-center cursor-pointer">
                <FaFacebookF className="text-xl text-black" />
              </div>
              <div onClick={() => window.open('https://www.tiktok.com/@paticastravelcr?_t=ZM-8zBhcPJlWKL&_r=1')} className="w-8 h-8 rounded-full bg-[#F0B500] flex items-center justify-content-center cursor-pointer">
                <FaTiktok className="text-xl text-black" />
              </div>
              <div onClick={() => window.open('https://www.tripadvisor.com/Attraction_Review-g309293-d33097180-Reviews-Paticas_Travel-San_Jose_San_Jose_Metro_Province_of_San_Jose.html')} className="w-8 h-8 rounded-full bg-[#F0B500] flex items-center justify-content-center cursor-pointer">
                <FaTripadvisor className="text-xl text-black" />
              </div>
            </div>
          </section>
        </div>

        {/* Certifications */}
        <section className="text-black py-8 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center md:text-left">
            <article className="p-4 bg-white shadow rounded-lg">{i18n.t("footer.certifications.tripadvisor")}</article>
            <article className="p-4 bg-white shadow rounded-lg">{i18n.t("footer.certifications.ict")}</article>
            <article className="p-4 bg-white shadow rounded-lg">{i18n.t("footer.certifications.nta")}</article>
            <article className="p-4 bg-white shadow rounded-lg">{i18n.t("footer.certifications.essential")}</article>
          </div>
        </section>
      </section>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-4 items-center text-center md:text-left">
        <article className="p-4 text-black text-left md:col-span-2">
          {i18n.t("footer.newsletter.text")}
        </article>
        <div className="md:col-span-1">
          <input
            type="email"
            placeholder={i18n.t("footer.newsletter.placeholder")}
            className="mt-2 p-2 border border-gray-300 rounded w-11/12"
          />
        </div>
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <button
            onClick={() => setOpenModal(true)}
            className="my-2 bg-[#2A4328] text-white px-4 py-2 rounded flex items-center"
          >
            {i18n.t("footer.newsletter.subscribe")} <IoIosArrowRoundForward className="ml-2 text-xl" />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <section className="bg-[#65a603] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <p>{i18n.t("footer.bottom.rights")}</p>
          <p className="mt-2 md:mt-0">{i18n.t("footer.bottom.motto")}</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
