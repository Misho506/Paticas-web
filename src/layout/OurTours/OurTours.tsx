import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

import TourCard from "../../components/tourCard/TourCard";
import { useTour } from "../../context/TourContext";

const OurTours = () => {
  const { tours } = useTour();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 my-4">
      <h2 className="text-3xl font-medium text-center text-green-800 mb-2">
        Nuestras Giras
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Aventura sin límites en la naturaleza de Costa Rica
      </p>
      <div className="max-w-2xl mx-auto">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
      <button
        onClick={() => navigate('/')}
        className="show-all-button flex justify-self-center items-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        <IoMdArrowBack />
        Volver atrás
      </button>
    </div>
  );
};

export default OurTours;