import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

import ToursCards from "../../components/tourCard/ToursCard";
import { useTour } from "../../context/TourContext";
import createSectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";

const Tour = () => {
  const { selectedCategory } = useTour();
  const { title, description, tours } = selectedCategory;
  const navigate = useNavigate();
  return (
    <>
      {createSectionWithTitle({ title, body: description, bgColor: "bg-white" })}
      {tours &&
        <ToursCards tours={tours} showDescription />
      }
      <button
        onClick={() => navigate('/categories')}
        className="show-all-button flex justify-self-center items-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        <IoMdArrowBack />
        Volver atrás
      </button>
    </>
  )
};

export default Tour;