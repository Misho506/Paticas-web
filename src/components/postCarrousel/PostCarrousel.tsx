import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { PostCarrouselProps } from "../../utils/types";

import "./PostCarrousel.css"


const PostCarrousel = ({ postList }: PostCarrouselProps) => (
  <section className="max-w-2xl mx-auto relative">
    <button className="absolute top-56 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 border-1 border-black">
      <IoChevronBack className="text-xl" />
    </button>
    <button className="absolute right-0 top-56 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 border-1 border-black">
      <IoChevronForward className="text-xl" />
    </button>
    <section className="rounded-2xl overflow-hidden bg-white ">
      {postList}
    </section>
  </section>
)

export default PostCarrousel;