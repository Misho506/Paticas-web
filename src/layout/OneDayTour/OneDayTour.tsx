import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

import ToursCards from "../../components/tourCard/ToursCard";
import createSectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import { useTranslation } from "react-i18next";
import { allOneDayTours } from "../../utils/hardCodedData/categories/oneDayTours";

const OneDayTour = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="mt-2">
      {createSectionWithTitle({ title: i18n.t("oneDayTour.title"), body: i18n.t("oneDayTour.description"), bgColor: "bg-white" })}
      {allOneDayTours(i18n.t) &&
        <ToursCards redirectTo="/one-day-tours" tours={allOneDayTours(i18n.t)} />
      }
      <button
        onClick={() => navigate('/')}
        className="si18n.how-all-button flex justify-self-center mx-auto items-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        <IoMdArrowBack />
        {i18n.t("goBack")}
      </button>
    </div>
  )
};

export default OneDayTour;