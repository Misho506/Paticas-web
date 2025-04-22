import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { useTour } from "../../context/TourContext";

const OurTours = () => {
  const { i18n } = useTranslation();
  const { categories } = useTour();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 my-4">
      <h2 className="text-3xl font-medium text-center text-green-800 mb-2">
        {i18n.t("ourTours.title")}
      </h2>
      <p className="text-gray-600 text-center mb-8">
        {i18n.t("ourTours.description")}
      </p>
      <div className="max-w-2xl mx-auto">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
      <button
        onClick={() => navigate('/')}
        className="show-all-button flex justify-self-center items-center my-5 mx-auto px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        <IoMdArrowBack />
        {i18n.t("goBack")}
      </button>
    </div>
  );
};

export default OurTours;