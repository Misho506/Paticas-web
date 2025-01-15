import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";

import "./SubCategorieCard.css";

type SubCategorieCardProps = {
  img: string;
  title: string;
  place: string;
  link: string;
  itinerary: string;
  desciption: string;
  showExtraInfo?: boolean;
}

const SubCategorieCard = ({ img, title, place, link, itinerary, desciption, showExtraInfo = false }: SubCategorieCardProps) => (
  <section className="flex-1 sm=basis-1/2 rounded-lg border-1 border-black card-width m-3">
    <img src={img} alt={title} className="w-full h-48 object-cover rounded-md" />
    <article className="p-4">
      <article className="flex justify-between">
        <h3 className="text-lg text-gray-800 whitespace-pre-wrap">
          {title}
        </h3>
        <button onClick={() => alert(link)} className="next-button rounded-full flex p-1 ml-2 mt-2 h-fit text-2xl">
          <IoIosArrowRoundForward />
        </button>
      </article>
      <section className="flex flex-col">
        <article className="flex items-center text-sm text-gray-500 mt-2">
          <CiLocationOn className="yellow-icon text-xl" />
          <span className="whitespace-pre-wrap italic ml-1">{place}</span>
        </article>

        {showExtraInfo &&
          <article className="flex items-center text-sm text-gray-500 mt-2">
            <FaRegCalendarCheck className="yellow-icon text-xl" />
            <span className="whitespace-pre-wrap italic ml-1">{itinerary}</span>
          </article>
        }
      </section>
      {showExtraInfo &&
        <p>{desciption}</p>
      }
    </article>
  </section>
)

export default SubCategorieCard;
