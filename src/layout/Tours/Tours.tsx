import { useTour } from "../../context/TourContext";
import ToursCards from "../../components/tourCard/ToursCard";
import { useTranslation } from "react-i18next";

const Tours = () => {
  const { i18n } = useTranslation();
  const { tours } = useTour();
  return (
    <section className="tours">
      <h1 className="text-4xl text-center bold my-4">
        {i18n.t("allTours")}
      </h1>
      <ToursCards tours={tours} />
    </section>
  );
}

export default Tours;