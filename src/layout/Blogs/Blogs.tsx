import { useBlog } from "../../context/BlogContext";
import BlogPost from "../../components/blogPost/BlogsPost";

const Blogs = () => {
  const { blogs } = useBlog();
  return (
    <section className="blogs">
      {blogs.map((blog, index) =>
        <BlogPost
          key={index}
          blog={blog}
        />
      )}
    </section>
  );
}

export default Blogs;