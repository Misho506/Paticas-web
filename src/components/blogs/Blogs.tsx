import { BlogsType } from "../../utils/types";
import blogTicosAndTicas from "../../utils/hardCodedData/blogs";

const Blogs = () => {
  const blogs: Array<BlogsType> = [blogTicosAndTicas];

  return (
    <>
      {blogs.map((blog, index) => (
        <div key={index}>
          <article className="aspect-[16/10] relative flex justify-center">
            <img
              src={blog.picture}
              alt="Woman with sunflower"
              className="w-full h-full object-cover rounded-2xl"
            />
          </article>
          <section className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {blog.title}
            </h2>
            <p className="text-sm">
              {blog.date} / {blog.readingTime}
            </p>
            <article className="flex items-start justify-between">
              <p className="text-gray-600 italic ml-2">
                {blog.description}
              </p>
              <button className="px-2 py-2 w-50 rounded-full text-black text-sm border-black border">
                Explorar más
              </button>
            </article>
          </section>
        </div>
      )
      )}
    </>
  )
}

export default Blogs;
