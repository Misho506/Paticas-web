import { useNavigate } from "react-router";
import { BlogType } from "../../utils/types";
import { useTranslation } from "react-i18next";
import { useBlog } from "../../context/BlogContext";

type BlogtypeProps = {
  blog: BlogType
}

const BlogPost = ({ blog }: BlogtypeProps) => {
  const { picture, title, date, readingTime, shortDescription } = blog;
  const { i18n } = useTranslation();
  const { setSelectedBlog } = useBlog();
  const navigate = useNavigate();

  const goToBlogs = () => {
    setSelectedBlog(blog);
    navigate(`/blog/:${title}`);
  };

  return (
    <section className="w-full content-center flex-shrink-0">
      <article className="flex flex-col justify-between mx-2 p-4">
        <article className="h-96 relative flex justify-center">
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
              {shortDescription}
            </p>
            <button onClick={goToBlogs} className="px-2 py-2 w-50 rounded-full text-black text-sm border-black border">
              {i18n.t("exploreMore")}
            </button>
          </article>
        </section>
      </article>
    </section>
  )
}

export default BlogPost;
