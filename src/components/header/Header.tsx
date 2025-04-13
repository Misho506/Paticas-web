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
        <img alt="icon background green" src={IconWithName} className="h-16 pl-4" />
      </section>
      <section className="hidden sm:flex navbar-links justify-around">
        {navButtons.map((navButton, index) => <button key={index} className="text-white p-3 hover:rounded" onClick={() => navigate(navButton.link)}>{navButton.name}</button>)}
      </section>
      <section className="pr-4  text-white mb-1 flex">
        <MdOutlineShoppingCart
          onClick={() => setOpenModal(true)}
          style={{ fontSize: 40 }}
          className="p-1"
        />
        <IoIosMenu onClick={() => setOpenModal(true)} style={{ fontSize: 40 }} className="p-1 menu-icon sm:hidden" />
      </section>
    </header>
  )
}

export default Header;
