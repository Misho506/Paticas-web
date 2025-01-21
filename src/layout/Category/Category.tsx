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
      {createSectionWithTitle({ title, body: description, bgColor: "bg-white" })
        // <article className={`py-11 max-width-500 flex flex-col justify-self-center bg-white`}>
        //   <h2 className="text-4xl pb-3 text-center">{selectedTour?.title}</h2>
        //   <p className="text-gray-500 italic text-lg text-center">
        //     {selectedTour?.description}
        //   </p>
        // </article>
      }
      {tours &&
        <ToursCards tours={tours} showDescription />
      }
      <button
        onClick={() => navigate('/our-tours')}
        className="show-all-button flex justify-self-center items-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        <IoMdArrowBack />
        Volver atrás
      </button>
    </>
  )
};

export default Tour;