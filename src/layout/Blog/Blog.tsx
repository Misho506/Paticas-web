import { useBlog } from "../../context/BlogContext";
import { useTranslation } from "react-i18next";

import "./Blog.css";
import BlogsCarrousel from "../../components/BlogsCarrousel/BlogsCarrousel";

const Blogs = () => {
  const { i18n } = useTranslation();
  const { selectedBlog } = useBlog();
  const { title, listOfTexts, images, picture } = selectedBlog;
  const isTucanBlog = title === i18n.t("blogs.3.title");
  return (
    <section className="mx-3">
      <section className="max-w-4xl my-4 mx-auto flex flex-col justify-self-center">
        <h2 className="text-4xl pb-3 mx-2 text-center">{title}</h2>
        <img alt="Principal" className={`h-96 object-cover rounded-xl w-full ${isTucanBlog && 'object-top'}`} src={picture} />
        <article className={'py-11 w-full max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
          < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
            {listOfTexts[0]}
          </p>
        </article >
        <section className="grid grid-flow-col grid-rows-2 images-container gap-3">
          {images.slice(0, 6).map((image, index) =>
            <img key={index} alt="Principal" className="object-cover h-full w-full rounded-xl" src={image} />
          )}
        </section>
        <article className={'py-11 w-full max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
          < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
            {listOfTexts[1]}
          </p>
        </article >
        <section className="grid grid-flow-col grid-rows-1 images-container gap-3 mx-auto">
          <img alt="Principal" className="object-cover h-full w-full rounded-xl" src={images[6]} />
          <img alt="Principal" className="object-cover h-full w-full rounded-xl" src={images[7]} />
        </section>

        <article className={'py-11 max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
          < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
            {listOfTexts[2]}
          </p>
        </article >

        <section className="grid grid-flow-col grid-rows-1 images-container gap-3 mx-auto">
          <img alt="Principal" className="h-full w-full object-cover rounded-xl" src={images[8]} />
        </section>

        <article className={'py-11 max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
          < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
            {listOfTexts[3]}
          </p>
        </article >
        <section className="flex flex-row images-container gap-3 mx-auto">
          <img alt="Principal" className="h-auto custom-width object-cover rounded-xl" src={images[10]} />
          <div className="flex flex-col h-auto gap-3">
            <img alt="Principal" className="height-2-images object-cover rounded-xl" src={images[9]} />
            <img alt="Principal" className="height-2-images object-cover rounded-xl" src={images[11]} />
          </div>
        </section>

        <article className={'py-11 max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
          < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
            {listOfTexts[4]}
          </p>
        </article >
      </section>
      <BlogsCarrousel />
    </section>
  );
}

export default Blogs;
