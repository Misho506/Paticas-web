import { IoIosMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router";
import Modal from "../modal/Modal";
import { useTranslation } from "react-i18next";
import IconWithName from "../../assets/icons/Fondo Verde Oscuro@2x.png";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const navButtons = [
    {
      name: i18n.t('headers.0.name'),
      link: i18n.t('headers.0.link')
    },
    {
      name: i18n.t('headers.1.name'),
      link: i18n.t('headers.1.link')
    },
    {
      name: i18n.t('headers.2.name'),
      link: i18n.t('headers.2.link')
    },
    {
      name: i18n.t('headers.3.name'),
      link: i18n.t('headers.3.link')
    },
  ]

  return (
    <header className="flex h-20 flex-row items-center justify-between header-container">
      <Modal open={openModal} onClose={setOpenModal} message={i18n.t("notAvailableCard.message")} title={i18n.t("notAvailableCard.title")} />
      <section className="flex flex-row items-center" onClick={() => navigate('/')}>
        <img alt="icon background green" src={IconWithName} className="h-16 pl-4 sm:pl-16" />
      </section>
      <section className="hidden sm:flex navbar-links justify-around">
        {navButtons.map((navButton, index) => <button key={index} className="text-white p-3 hover:rounded" onClick={() => navigate(navButton.link)}>{navButton.name}</button>)}
      </section>
      <section className="pr-4 sm:pr-16 text-white mb-1 flex">
        <MdOutlineShoppingCart
          onClick={() => setOpenModal(true)}
          style={{ fontSize: 40 }}
          className="p-1"
        />
        <IoIosMenu onClick={() => setIsOpen(true)} style={{ fontSize: 40 }} className="p-1 menu-icon sm:hidden" />
      </section>

      {/* Menu that slides from top to bottom */}
      <section className={`mobile-links absolute top-0 left-0 w-full h-full shadow-lg transform transition-transform duration-500 z-30 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col w-full">
          {/* Close button at the top */}
          <article className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-900 rounded-lg text-xl font-light w-8 h-8 flex items-center justify-center"
              aria-label="Close menu"
            >
              ✕
            </button>
          </article>

          {/* Menu buttons */}
          <article className="flex flex-col">
            {navButtons.map((navButton, index) => <button key={index} className="py-3 text-white" onClick={() => { navigate(navButton.link); setIsOpen(false) }}>{navButton.name}</button>)}

            {/* <button className="py-4 hover:bg-gray-100 text-lg border-b">Home</button>
            <button className="py-4 hover:bg-gray-100 text-lg border-b">About</button>
            <button className="py-4 hover:bg-gray-100 text-lg border-b">Services</button>
            <button className="py-4 hover:bg-gray-100 text-lg">Contact</button> */}
          </article>
        </div>
      </section>

      {/* Overlay that appears when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </header>
  )
}

export default Header;
