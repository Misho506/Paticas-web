import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import CircularContainerWithInfo from "../../components/circularContainerWithInfo/CircularContainerWithInfo";
import SectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import { sectionContact } from "../../utils/hardCodedData/sections";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const { i18n } = useTranslation();

  return (
    <section className="bg-neutral-300 py-4">
      <SectionWithTitle title={sectionContact(i18n.t).title} body={sectionContact(i18n.t).body} bgColor={sectionContact(i18n.t).bgColor} />
      <div className="flex items-center justify-center gap-8 px-6 pb-6 max-sm:flex-col">
        {CircularContainerWithInfo(
          <FaWhatsapp className="text-black text-xl" />,
          <>
            <h5 className="font-light text-md">Whatsapp</h5>
            <a
              href={`https://api.whatsapp.com/send?phone=+50687758884&text=${i18n.t("whatsappMessage")}`}

              className="text-gray-600 text-xs hover:text-gray-800 transition-colors"
            >
              +506 8775 8884
            </a>
          </>
        )}
        <div className="h-14 w-px bg-neutral-900 mx-2 max-sm:hidden" />
        {CircularContainerWithInfo(
          <MdOutlineEmail className="text-black text-xl" />,
          <>
            <h5 className="font-light text-md">E-mail</h5>
            <a
              href={`mailto:info@paticascr.com?subject=${encodeURIComponent(i18n.t("generalEmail.subject"))}&body=${encodeURIComponent(i18n.t("generalEmail.body"))}`}
              className="text-gray-600 text-xs hover:text-gray-800 transition-colors"
            >
              info@paticascr.com
            </a>
          </>
        )}
      </div>
    </section>
  )
};

export default Contact;
