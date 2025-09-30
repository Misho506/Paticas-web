import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

import ToursCards from "../../components/tourCard/ToursCard";
import { useTour } from "../../context/TourContext";
import createSectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { i18n } = useTranslation();
  const { selectedCategory } = useTour();
  const { title, description, tours } = selectedCategory;
  const navigate = useNavigate();

  return (
    <div className="mt-2">
      {createSectionWithTitle({ title, body: description, bgColor: "bg-white" })}
      {tours &&
        <ToursCards tours={tours} />
      }
      <button
        onClick={() => navigate('/categories')}
        className="show-all-button flex justify-self-center mx-auto items-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        <IoMdArrowBack />
        {i18n.t("goBack")}
      </button>
    </div>
  )
};

export default Category;