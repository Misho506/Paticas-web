import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router";
import Modal from "../modal/Modal";
import { useTranslation } from "react-i18next";
import IconWithName from "../../assets/icons/Fondo Verde Oscuro@2x.png";
import "./Header.css";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    }
  ]

  const GoTo = (route: string, nameRoute: string) => {
    navigate(route);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsToursOpen(false);
        setIsOpen(false);
      }
    };

    if (isToursOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isToursOpen]);

  const toursMenu = (key: number) => (
    <div key={key} className="relative text-center content-center" ref={menuRef}>
      <button className="p-3 text-white hover:rounded" onClick={() => setIsToursOpen((prev) => !prev)}>{i18n.t('toursLabel')}</button>
      {isToursOpen && (
        <div className="absolute flex flex-col text-justify-left left-0 text-white mt-2 mobile-links w-max rounded-md z-50 border-1 border-black">
          <button className="text-left p-2 rounded-md" onClick={() => { GoTo(i18n.t('headers.0.link'), i18n.t('headers.0.name')); setIsOpen(false); setIsToursOpen(false); }}>{i18n.t('multiDayTourTitle')}</button>
          <button className="text-left p-2 rounded-md" onClick={() => { GoTo(i18n.t('headers.4.link'), i18n.t('headers.4.name')); setIsOpen(false); setIsToursOpen(false); }}>{i18n.t('headers.4.name')}</button>
        </div>
      )}
    </div>
  );

  return (
    <header className="w-full z-10 flex flex-col header-container">
      <div className="flex h-20 shadow-md flex-row items-center justify-between">
        <Modal open={openModal} onClose={setOpenModal} message={i18n.t("notAvailableCard.message")} title={i18n.t("notAvailableCard.title")} />
        <section className="flex flex-row items-center" onClick={() => navigate('/')}>
          <img alt="icon background green" src={IconWithName} className="h-16 pl-4 sm:pl-16" />
        </section>
        {/* Navbar Web Links */}
        <section className="hidden sm:flex navbar-links justify-around">
          {navButtons.map((navButton, index) => (
            index === 0 ? (
              toursMenu(index) // Pass the index to the function
            ) : (
              <button key={index} className="text-white p-3 hover:rounded" onClick={() => GoTo(navButton.link, navButton.name)}>{navButton.name}</button>
            )
          ))}
        </section>
        <section className="pr-4 sm:pr-16 text-white mb-1 flex">
          <IoIosMenu onClick={() => setIsOpen(true)} style={{ fontSize: 40 }} className="p-1 menu-icon sm:hidden" />
        </section>

        {/* Menu that slides from top to bottom */}
        <section className={`mobile-links absolute top-0 left-0 w-full h-full shadow-lg transform transition-transform duration-500 z-30 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col w-full">
            <article className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-900 rounded-lg text-xl font-light w-8 h-8 flex items-center justify-center"
                aria-label="Close menu"
              >
                ✕
              </button>
            </article>
            <article className="flex flex-col">
              <button className="py-3 text-white" onClick={() => { navigate(i18n.t('headers.0.link')); setIsOpen(false); setIsToursOpen(false); }}>{i18n.t('headers.0.name')}</button>
              <button className="py-3 text-white" onClick={() => { navigate(i18n.t('headers.4.link')); setIsOpen(false); setIsToursOpen(false); }}>{i18n.t('headers.4.name')}</button>
              {navButtons.map((navButton, index) => (
                index > 0 && <button key={"nav-buttons" + index} className="py-3 text-white" onClick={() => { GoTo(navButton.link, navButton.name); setIsOpen(false) }}>{navButton.name}</button>
              ))}
            </article>
          </div>
        </section>
      </div>
    </header>
  )
}
export default Header;