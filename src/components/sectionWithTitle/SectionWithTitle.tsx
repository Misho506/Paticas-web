import { IoIosStar } from "react-icons/io";
import "./SectionWithTitle.css";
import { useTranslation } from "react-i18next";

const SectionWithTitle = ({ title, body, bgColor, img }: { title: string; body: string; bgColor?: string, img?: string }) => {
  const { i18n } = useTranslation();
  const insertStars = body.includes('*STARS*');
  const secondString =
    <span className="flex items-baseline">
      <br />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow mr-1" />
      {i18n.t("sectionReviews.numberOf")}
    </span>
  return (
    <article className={`section-container py-11 max-w-4xl mx-3 flex flex-col justify-self-center ${bgColor}`}>
      <h2 className="text-4xl pb-3 text-center">{title}</h2>
      {img && <img src={img} alt={title} className="w-full section-img pb-32" />}
      <p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
        {insertStars ? body.split('*STARS*') : body}
        {insertStars && secondString}
      </p>
    </article>
  )
};

export default SectionWithTitle;