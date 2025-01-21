import { useState } from "react";

import TourCard from "./TourCard";
import { TourType } from "../../utils/types";
import "./TourCard.css";

const ToursCards = ({ tours, showDescription }: { tours: Array<TourType>; showDescription?: boolean }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <>
      <section className={`flex flex-wrap mx-10 justify-center ${showDescription && 'mb-9'}`}>
        {
          (showDescription || showAll ? tours : tours.slice(0, 4)).map((tour, index) => {
            return (
              <TourCard
                key={index}
                tour={tour}
              />
            )
          })
        }
      </section>
      {!showDescription &&
        <button
          onClick={() => setShowAll(!showAll)}
          className="show-all-button flex justify-self-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
        >
          {showAll ? "Ver menos" : "Ver todas las giras"}
        </button>}
    </>
  )
}

export default ToursCards;
