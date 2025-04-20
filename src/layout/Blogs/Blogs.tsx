import { useBlog } from "../../context/BlogContext";
import BlogPost from "../../components/blogPost/BlogsPost";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { i18n } = useTranslation();
  const { blogs, setSelectedBlog } = useBlog();
  const navigate = useNavigate();

  const goToFirstBlog = () => {
    setSelectedBlog(blogs[0]);
    navigate(`/blog/${blogs[0].title}`);
  }

  return (
    <section className="mb-4 mx-auto flex flex-col justify-self-center">
      <section style={{ position: 'relative', textAlign: 'left', color: '#fff' }}>
        <img
          src={blogs[0].picture}
          alt={blogs[0].title}
          className="banner brightness-75 w-100 object-center w-full"
        />
        <section
          className="max-w-4xl"
          style={{
            position: 'absolute',
            top: '13rem',
            left: '10%',
            transform: 'translateY(-50%)',
          }}
        >
          <h1 style={{ fontSize: '2.5rem' }} className='bold max-w-lg'>
            {blogs[0].title}
          </h1>
          <hr className='separator w-50' />
          <p className='italic max-w-lg text-xl my-4'>
            {blogs[0].shortDescription}
          </p>
          <button onClick={goToFirstBlog} className='explore-button'>
            {i18n.t("exploreMore")} →
          </button>
        </section>
      </section>
      <h2 className="text-4xl mt-6 pb-3 mx-2 text-center">{i18n.t("recentBlogs")}</h2>
      <article className="max-w-4xl mx-auto flex flex-col justify-self-center">
        {blogs.map((blog, index) => index > 0 &&
          <>
            <BlogPost
              key={index}
              blog={blog}
            />
            {index < (blogs.length - 1) && <hr className="mx-3" />}
          </>
        )}
      </article>
    </section >
  );
}

export default Blogs;