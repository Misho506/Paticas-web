import { useState } from "react";
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import BlogPost from "../blogPost/BlogsPost"
import { useTranslation } from "react-i18next";
import allBlogs from "../../utils/hardCodedData/blogs";

import "./BlogsCarrousel.css";

const BlogsCarrousel = () => {
  const [activeReview, setActiveReview] = useState<number>(0);
  const { i18n } = useTranslation();

  return (
    <div className="max-w-2xl my-auto mx-auto relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${activeReview * 100}%)` }}>
          {allBlogs(i18n.t).map((blog, index) =>
            <BlogPost
              key={index}
              blog={blog}
            />)}
        </div>
      </div>
      <button
        disabled={activeReview === 0}
        onClick={() => setActiveReview(activeReview - 1)}
        className={`absolute top-[13rem] left-[15px] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 border-1 border-black ${activeReview === 0 && 'hidden'}`}
      >
        <IoChevronBack className="text-xl" />
      </button>
      <button
        disabled={activeReview === allBlogs(i18n.t).length - 1}
        onClick={() => setActiveReview(activeReview + 1)}
        className={`absolute top-[13rem] right-[15px] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 border-1 border-black ${activeReview === allBlogs(i18n.t).length - 1 && 'hidden'} `}
      >
        <IoChevronForward className="text-xl" />
      </button>
    </div>
  )
}

export default BlogsCarrousel;
