import IconBKGreen from "../../assets/icons/Ícono Sobre Verde Oscuro@3x.png";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

import "./Header.css";

const Header = () => (
  <header className="flex h-28 flex-row items-center justify-between header-container">
    <section className="flex flex-row items-center">
      <img alt="icon background green" src={IconBKGreen} className="h-16 pl-4" />
      <article className="text-white pl-1">
        <h1 className="text-2xl">Paticas</h1>
        <p className="text-sm">pa"que las quiero</p>
      </article>
    </section>
    <section className="pr-4 text-white mb-3 flex ">
      <MdOutlineShoppingCart style={{ fontSize: 40 }} className="p-1" />
      <IoIosMenu style={{ fontSize: 40 }} className="p-1 menu-icon" />
    </section>
  </header>
)

export default Header;
