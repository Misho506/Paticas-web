import { useTour } from "../../context/TourContext";
import SectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";

const SubCategory = () => {
  const { selectedTour } = useTour();
  return (
    <>
      <SectionWithTitle title={selectedTour.title} body={selectedTour.description} />
    </>
  )
};

export default SubCategory;