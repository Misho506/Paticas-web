import { useState } from "react";
import { FaRegCalendarCheck, FaRegMoneyBillAlt } from "react-icons/fa";
import { CiCircleInfo, CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router";

import "./TourCard.css";
import { TourType } from "../../utils/types";
import { useTour } from "../../context/TourContext";
import { useTranslation } from "react-i18next";

const TourCard = ({ tour }: { tour: TourType }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { img, title, places, daysAndNights, prices } = tour;
  const { i18n } = useTranslation();
  const { setSelectedTour } = useTour();
  const navigate = useNavigate();

  const goToDetailedTour = () => {
    setSelectedTour(tour);
    window.scrollTo(0, 0);
    navigate("/tour/detailed");
  }

  return (
    <section className="relative shadow-[0px_0px_10px_0_#2B462A] flex-1 rounded-lg border-1 border-black card-width m-3 cursor-pointer" onClick={goToDetailedTour}>
      <button className="absolute top-1 p-1 right-1 rounded-md hover:bg-[#F0B500]" onClick={goToDetailedTour}>
        <CiCircleInfo
          className="bg-gray-500 text-white rounded-full"
          size={32}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />
      </button>
      {showTooltip &&
        <div className="absolute mb-2 grid right-3 -top-8 -translate-y-1/2 bg-white text-gray-800 text-sm rounded-lg shadow-md border border-gray-200 p-2 z-10">
          {prices && prices.map((price, index) => (
            <span className="w-full" key={index}>{i18n.t("moreThan")} {price.numberOfPeople} {i18n.t("people")} ${price.price}</span>
          ))}
        </div>
      }
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md" />
      <article className="p-4">
        <h3 className="text-lg text-gray-800 ">
          {title}
        </h3>
        <section className="flex flex-col relative">
          {places && places.length > 0 && places.map((place, index) => (
            <div key={index}>
              <hr />
              <article key={index} className="flex items-center text-sm text-gray-500 mt-2">
                <CiLocationOn className="yellow-icon text-xl" />
                <span className="italic ml-1">{place}</span>
              </article>
            </div>
          ))}
          {daysAndNights ?
            <article className="flex items-center text-sm text-gray-500 mt-2">
              <FaRegCalendarCheck className="yellow-icon text-xl" />
              <span className="italic ml-1">{daysAndNights}</span>
            </article>
            :
            <article className="flex items-center text-sm text-gray-500 mt-2">
              <FaRegMoneyBillAlt className="yellow-icon text-xl" />
              <span className="italic ml-1"> ${prices[0].price}</span>
            </article>
          }
        </section>
      </article >
    </section >
  )
}

export default TourCard;
