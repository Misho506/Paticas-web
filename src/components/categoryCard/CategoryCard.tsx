import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router";

import { CategoryType } from "../../utils/types";
import { useTour } from "../../context/TourContext";
import "./CategoryCard.css"

const CategoryCard = (category: CategoryType) => {
  const { image, title } = category;
  let navigate = useNavigate();
  const { setSelectedCategory } = useTour();

  const goToSelectedTour = () => {
    setSelectedCategory(category);
    navigate(`/category/:${title}`);
  };

  return (
    <section className="relative overflow-hidden rounded-2xl h-48 mb-4 group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <section className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <button onClick={goToSelectedTour} className="next-button rounded-full flex p-1 ml-2 mt-2 h-fit text-2xl">
            <IoIosArrowRoundForward />
          </button>
        </div>
      </section>
    </section>
  )
};

export default CategoryCard;