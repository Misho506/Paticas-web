import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

type CardProps = {
  img: string;
  title: string;
  icon: ReactNode;
  description: string;
}

const AboutUsCards = ({ img, title, icon, description }: CardProps) => {
  const { i18n } = useTranslation();
  let [expanded, setExpanded] = useState(false);
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl mt-5">
      < div className="w-full h-64 overflow-hidden" >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover brightness-50"
        />
        < div className="w-54 h-54 absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
          {icon}
        </div >
      </div >
      < article className="bg-white p-6 rounded-b-2xl whitespace-pre-line" >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className={`${!expanded && 'line-clamp-3'} text-gray-600 italic`}>{description}</p>
        <span
          onClick={() => setExpanded(!expanded)}
          className="ml-2 font-bold"
        >
          {expanded ? i18n.t("readLess") : i18n.t("readMore")}
        </span>
      </article >
    </div >)
}

export default AboutUsCards;