import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

import ToursCards from "../../components/tourCard/ToursCard";
import { useTour } from "../../context/TourContext";
import createSectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import { useTranslation } from "react-i18next";

const Tour = () => {
  const { i18n } = useTranslation();
  const { selectedCategory } = useTour();
  const { title, description, tours } = selectedCategory;
  const navigate = useNavigate();

  return (
    <>
      {createSectionWithTitle({ title, body: description, bgColor: "bg-white" })}
      {tours &&
        <ToursCards showAllTours={true} tours={tours} />
      }
      <button
        onClick={() => navigate('/categories')}
        className="show-all-button flex justify-self-center mx-auto items-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        <IoMdArrowBack />
        {i18n.t("goBack")}
      </button>
    </>
  )
};

export default Tour;