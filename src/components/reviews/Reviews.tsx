import { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import ReviewsHardCoded from "../../utils/hardCodedData/review"
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import "./Reviews.css";

const Reviews = () => {
  const [activeReview, setActiveReview] = useState<number>(0);

  return (
    <div className="max-w-2xl h-60 my-auto mx-auto relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${activeReview * 100}%)` }}>
          {ReviewsHardCoded.map((review, index) => (
            <div key={index} className="w-full  content-center flex-shrink-0">
              <article className="flex h-full justify-between mx-2 p-4 rounded-2xl border-2 border-black">
                <label className="p-3 text-5xl h-16 w-16 flex items-center justify-center text-white bg-green rounded-full">{review.userName[0]}</label>
                <article className="w-3/4">
                  <h4 className="m-0">{review.userName}</h4>
                  <label className="italic pb-2">a year ago</label>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <IoIosStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p>{review.details}</p>
                </article>
                <FcGoogle className="h-11 w-11" />
              </article>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={activeReview === 0}
        onClick={() => setActiveReview(activeReview - 1)}
        className="absolute top-[45%] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 border-1 border-black"
      >
        <IoChevronBack className="text-xl" />
      </button>
      <button
        disabled={activeReview === ReviewsHardCoded.length - 1}
        onClick={() => setActiveReview(activeReview + 1)}
        className="absolute right-0 top-[45%] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 border-1 border-black"
      >
        <IoChevronForward className="text-xl" />
      </button>
    </div>
  )
}

export default Reviews;
