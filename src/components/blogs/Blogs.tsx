import { BlogsType } from "../../utils/types";
import { useTranslation } from "react-i18next";

const Blogs = ({ picture, title, date, readingTime, description }: BlogsType) => {
  const { i18n } = useTranslation();

  return (
    <>
      <article className="aspect-[16/10] relative flex justify-center">
        <img
          src={picture}
          alt="Woman with sunflower"
          className="w-full h-full object-cover rounded-2xl"
        />
      </article>
      <section className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-sm">
          {date} / {readingTime}
        </p>
        <article className="flex items-start justify-between">
          <p className="text-gray-600 italic ml-2">
            {description}
          </p>
          <button className="px-2 py-2 w-50 rounded-full text-black text-sm border-black border">
            {i18n.t("exploreMore")}
          </button>
        </article>
      </section>
    </>
  )
}

export default Blogs;
