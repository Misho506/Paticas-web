import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { TourCardProps } from "../../utils/types";

import "./TourCard.css";
import { useNavigate } from "react-router";
import { useTour } from "../../context/TourContext";

const TourCard = ({ tour, showDescription }: { tour: TourCardProps, showDescription: boolean }) => {
  const { img, title, places, daysAndNights, description } = tour;
  const { setSelectedTour } = useTour();
  const navigate = useNavigate();

  const goToDetailedTour = () => {
    setSelectedTour(tour);
    window.scrollTo(0, 0);
    navigate("/tour/detailed");
  }

  return (
    <section className="flex-1 sm=basis-1/2 rounded-lg border-1 border-black card-width m-3">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md" />
      <article className="p-4">
        <article className="flex justify-between">
          <h3 className="text-lg text-gray-800 whitespace-pre-wrap">
            {title}
          </h3>
          <button onClick={goToDetailedTour} className="next-button rounded-full flex p-1 ml-2 mt-2 h-fit text-2xl">
            <IoIosArrowRoundForward />
          </button>
        </article>
        <section className="flex flex-col">
          {places.map((place, index) => (
            <article key={index} className="flex items-center text-sm text-gray-500 mt-2">
              <CiLocationOn className="yellow-icon text-xl" />
              <span className="whitespace-pre-wrap italic ml-1">{place}</span>
            </article>
          ))}
          <hr />
          <article className="flex items-center text-sm text-gray-500 mt-2">
            <FaRegCalendarCheck className="yellow-icon text-xl" />
            <span className="whitespace-pre-wrap italic ml-1">{daysAndNights}</span>
          </article>
        </section>
      </article>
    </section>
  )
}

export default TourCard;
