import IconWithName from "../../assets/icons/Fondo Verde Oscuro@2x.png";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

import "./Header.css";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex h-20 flex-row items-center justify-between header-container">
      <section className="flex flex-row items-center" onClick={() => navigate('/')}>
        <img alt="icon background green" src={IconWithName} className="h-16 pl-4" />
      </section>
      <section className="pr-4 text-white mb-1 flex">
        <MdOutlineShoppingCart style={{ fontSize: 40 }} className="p-1" />
        <IoIosMenu style={{ fontSize: 40 }} className="p-1 menu-icon" />
      </section>
    </header>
  )
}

export default Header;
