import { useState } from "react";
import { useTranslation } from "react-i18next";

import TourCard from "./TourCard";
import { TourType } from "../../utils/types";
import "./TourCard.css";

const ToursCards = ({ tours, showActionButton = false }: { tours: Array<TourType>; showActionButton?: boolean }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const { i18n } = useTranslation();
  return (
    <>
      <section className="flex flex-wrap mx-10 justify-center">
        {
          (showAll ? tours : tours.slice(0, 4)).map((tour, index) => {
            return (
              <TourCard
                key={index}
                tour={tour}
              />
            )
          })
        }
      </section>
      {showActionButton &&
        <button
          onClick={() => setShowAll(!showAll)}
          className="show-all-button flex justify-self-center my-5 px-3 py-2 text-xl mx-auto rounded-full border-1 border-black"
        >
          {showAll ? i18n.t("showLess") : i18n.t("allTours")}
        </button>}
    </>
  )
}

export default ToursCards;
