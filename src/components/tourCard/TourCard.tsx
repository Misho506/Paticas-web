import { useEffect, useRef, useState } from "react";
import { FaRegCalendarCheck, FaRegMoneyBillAlt } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router";
import { IoLocationOutline } from "react-icons/io5";

import "./TourCard.css";
import { TourType } from "../../utils/types";
import { useTour } from "../../context/TourContext";
import { useTranslation } from "react-i18next";
const formatter = new Intl.NumberFormat("en-US"); // puedes usar "es-CR" si prefieres formato de Costa Rica

const TourCard = ({ tour }: { tour: TourType }) => {
  const { img, title, places, daysAndNights, prices, aproxHours } = tour;
  const { i18n } = useTranslation();
  const { setSelectedTour, selectedCategory } = useTour();
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const clickedInTooltip = tooltipRef.current?.contains(target);
      const clickedOnButton = buttonRef.current?.contains(target);

      if (!clickedInTooltip && !clickedOnButton) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const goToDetailedTour = () => {
    setSelectedTour(tour);
    window.scrollTo(0, 0);
    navigate(tour.daysAndNights ? `/categories/${selectedCategory.id}/:${tour.id}` : `/one-day-tours/:${tour.id}`);
  }

  return (
    <section
      className="relative shadow-[0px_0px_10px_0_#2B462A] flex-1 rounded-lg border-1 border-black card-width m-3 cursor-pointer"
      onClick={goToDetailedTour}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={showTooltip}
        aria-controls={`tooltip-${tour.id}`}
        className="absolute top-1 p-1 right-1 rounded-md hover:bg-[#F0B500] z-20"
        onClick={(e) => {
          e.stopPropagation();               // IMPORTANT: prevent parent onClick
          setShowTooltip((s) => !s);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();               // IMPORTANT: prevent parent onClick
          e.preventDefault();                // prevent the native click from also firing
          setShowTooltip((s) => !s);
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <CiCircleInfo
          className="bg-gray-500 text-white rounded-full"
          size={32}
          aria-hidden="true"
        />
      </button>
      {showTooltip &&
        <div
          className="absolute mb-2 grid right-3 -top-8 -translate-y-1/2 bg-white text-gray-800 text-sm rounded-lg shadow-md border border-gray-200 p-2 z-30"
          id={`tooltip-${tour.id}`}
          ref={tooltipRef}
          role="status"
        >
          {prices && prices.map((price, index) => (
            <span className="w-full" key={index}>
              {price.numberOfPeople} pax: ${formatter.format(price.price)}/{i18n.t("perPerson")}
            </span>
          ))}
        </div>
      }
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md" />
      <article className="p-4">
        <h3 className="text-lg text-gray-800 ">
          {title}
        </h3>
        <span className="italic text-sm text-[#6b7785d1]">{i18n.t("disclaimerText")}</span>
        <hr />
        <section className="flex flex-col relative">
          {places && places.length > 0 && places.map((place, index) => (
            <div key={index}>
              <article key={index} className="flex items-center text-sm text-gray-500 mt-2">
                <IoLocationOutline className="yellow-icon text-xl" />
                <span className="italic ml-1">{place}</span>
              </article>
            </div>
          ))}
          {prices && prices.length > 0 &&
            <article className="flex items-center text-sm text-gray-500 mt-2">
              <FaRegMoneyBillAlt className="yellow-icon text-xl" />
              <span className="italic text-xs ml-1">From</span>
              <span className="ml-1"> ${formatter.format(prices[0].price)}</span>
              <span className="italic text-xs ml-1"> per person</span>
            </article>
          }
          {daysAndNights &&
            <article className="flex items-center text-sm text-gray-500 mt-2">
              <FaRegCalendarCheck className="yellow-icon text-xl" />
              <span className="italic ml-1">{daysAndNights}</span>
            </article>
          }
          {aproxHours &&
            <article className="flex items-center text-sm text-gray-500 mt-3">
              <IoMdTime className="yellow-icon text-xl" />
              <span className="italic ml-1">{aproxHours} {i18n.t("hoursAprox")}</span>
            </article>}
        </section>
      </article >
    </section >
  )
}

export default TourCard;
