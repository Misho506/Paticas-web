import { useBlog } from "../../context/BlogContext";

import "./Blog.css";
import BlogsCarrousel from "../../components/BlogsCarrousel/BlogsCarrousel";

const Blogs = () => {
  const { selectedBlog } = useBlog();
  const { title, listOfTexts, images, picture } = selectedBlog;
  return (
    <section className="max-w-4xl my-4 mx-auto flex flex-col justify-self-center">
      <h2 className="text-4xl pb-3 mx-2 text-center">{title}</h2>
      <img alt="Principal" className="h-96 object-cover rounded-xl w-full" src={picture} />
      <article className={'py-11 w-full max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
        < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
          {listOfTexts[0]}
        </p>
      </article >
      <section className="grid grid-flow-col grid-rows-2 gap-3">
        {images.slice(0, 6).map((image) =>
          <img alt="Principal" className="object-cover rounded-xl" src={image} />
        )}
      </section>
      <article className={'py-11 w-full max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
        < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
          {listOfTexts[1]}
        </p>
      </article >
      <section className="grid grid-cols-2 gap-3 mx-auto">
        <img alt="Principal" className="sm:h-96 object-cover rounded-xl" src={images[6]} />
        <img alt="Principal" className="sm:h-96 object-cover rounded-xl" src={images[7]} />
      </section>

      <article className={'py-11 max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
        < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
          {listOfTexts[2]}
        </p>
      </article >
      <img alt="Principal" className="h-96 object-cover rounded-xl mx-auto" src={images[8]} />

      <article className={'py-11 max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
        < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
          {listOfTexts[3]}
        </p>
      </article >
      <section className="flex flex-row images-container gap-3 mx-auto">
        <img alt="Principal" className="h-full w-7/12 object-cover rounded-xl" src={images[10]} />
        <div className="flex flex-col h-full gap-3">
          <img alt="Principal" className="height-2-images object-cover rounded-xl" src={images[9]} />
          <img alt="Principal" className="height-2-images object-cover rounded-xl" src={images[11]} />
        </div>
      </section>

      <article className={'py-11 max-w-4xl px-3 mx-auto flex flex-col justify-self-center'}>
        < p className="text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
          {listOfTexts[4]}
        </p>
      </article >
      <BlogsCarrousel />
    </section>
  );
}

export default Blogs;
