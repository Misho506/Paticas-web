import "./SectionWithTitle.css";
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";

const SectionWithTitle = ({ title, body, bgColor, img }: { title?: string | ReactNode; body: string | ReactNode; bgColor?: string, img?: string }) => {
  const { i18n } = useTranslation();
  const insertStars = typeof body === 'string' && body.includes('*STARS*');
  const secondString =
    <span className="flex items-baseline justify-center">
      {i18n.t("sectionReviews.numberOf")}
    </span>
  return (
    <article className={`section-container py-11 max-w-4xl px-3 mx-auto flex flex-col justify-self-center ${bgColor}`}>
      {typeof title === 'string' ?
        <h2 className="text-4xl pb-3 text-center">{title}</h2>
        : title
      }
      {img && <img src={img} alt={title as string} className="w-full section-img pb-32" />}
      <p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
        {insertStars ? body.split('*STARS*') : body}
        {insertStars && secondString}
      </p>
    </article>
  )
};

export default SectionWithTitle;