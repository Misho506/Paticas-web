import { useTranslation } from "react-i18next";

import TourCard from "./TourCard";
import { TourType } from "../../utils/types";
import "./TourCard.css";
import { useNavigate } from "react-router";

type ToursCardsProps =
  {
    tours: Array<TourType>;
    showActionButton?: boolean;
    redirectTo?: string;
  }

const ToursCards = ({ tours, showActionButton = false, redirectTo = "/categories" }: ToursCardsProps) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-wrap mx-10 justify-center">
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            tour={tour}
          />
        ))}
      </section>
      {showActionButton &&
        <button
          onClick={() => navigate(redirectTo)}
          className="show-all-button flex justify-self-center my-5 px-3 py-2 text-xl mx-auto rounded-full border-1 border-black"
        >
          {i18n.t("allTours")}
        </button>}
    </>
  )
}

export default ToursCards;
