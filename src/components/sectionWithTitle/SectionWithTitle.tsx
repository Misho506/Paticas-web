import { IoIosStar } from "react-icons/io";
import "./SectionWithTitle.css";
import { useTranslation } from "react-i18next";

const SectionWithTitle = ({ title, body, bgColor }: { title: string; body: string; bgColor?: string }) => {
  const { i18n } = useTranslation();
  const insertStars = body.includes('*STARS*');
  const secondString =
    <span className="flex items-baseline justify-center">
      <br />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow mr-1" />
      {i18n.t("sectionReviews.numberOf")}
    </span>
  return (
    <article className={`section-container py-11 max-w-4xl px-3 mx-auto flex flex-col justify-self-center ${bgColor}`}>
      <h2 className="text-4xl pb-3 text-center">{title}</h2>
      <p className="text-gray-500 italic text-lg text-center">
        {insertStars ? body.split('*STARS*') : body}
        {insertStars && secondString}
      </p>
    </article>
  )
};

export default SectionWithTitle;