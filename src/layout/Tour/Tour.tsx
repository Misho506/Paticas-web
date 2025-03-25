import { CCarousel, CCarouselItem } from "@coreui/react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { useTour } from "../../context/TourContext";
import SectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import "./Tour.css";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import ToursCards from "../../components/tourCard/ToursCard";
import TourBookingCard from "../../components/tourBookingCard/TourBookingCard";
import TourImages from "../../components/tourImages/TourImages";

const Tour = () => {
  const { i18n } = useTranslation();
  const { selectedTour, selectedCategory, tours } = useTour();
  const [openSections, setOpenSections] = useState<Array<number>>([]);
  const navigate = useNavigate();

  const section = (children: React.ReactNode | React.ReactNode[], title: string) => {
    return (
      <section className="flex flex-col items-center justify-self-center max-w-4xl px-3 mx-auto">
        <h5 className="text-3xl font-bold">{title}</h5>
        {children}
      </section>
    )
  }

  const showHideSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(section => section !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className="tours-container">
      <SectionWithTitle title={selectedTour.title} body={selectedTour.description} />
      <CCarousel controls transition="slide" interval={false} className="w-full mb-16">
        {selectedTour.photos.map((photo, index) => (
          <CCarouselItem key={index}>
            <img src={photo} alt={`${index}-${selectedTour.title}`} className="carousel-img brightness-75w-100 w-full" />
          </CCarouselItem>
        ))}
      </CCarousel>
      {section(
        <p className="py-11 flex flex-col justify-self-center text-gray-500 italic text-lg text-center" > {selectedTour.about}</p >,
        i18n.t("aboutTour")
      )}
      <hr className="w-4/5 mx-auto mb-6" />
      {section(
        <ul>
          {selectedTour.includes.map((activity, index) => (
            <li key={index} className="py-2 text-gray-500 italic text-lg">{activity}</li>
          ))}
        </ul>,
        i18n.t("includes")
      )}
      <br />
      <TourImages />
      <br />
      {section(
        selectedTour.itinerary.map((activity, index) => (
          <article key={index} className={`activity justify-items-center mt-6 ${openSections.includes(index) && 'mb-6'}`}>
            <h5 key={index} className="activity-title w-full py-3 px-28 mx-auto rounded-full border-1 text-center" onClick={() => showHideSection(index)}>{activity.title}</h5>
            <p className={`${openSections.includes(index) ? 'max-h-screen mt-4' : 'm-0 h-0 overflow-hidden'} text-gray-500 italic text-lg transition-all duration-400 ease-in-out`}>{activity.description}</p>
          </article>
        )),
        i18n.t("itinerary")
      )}
      <hr className="w-4/5 mx-auto mb-6" />
      {section(
        <TourBookingCard />,
        i18n.t("investment")
      )}
      <hr className="w-4/5 mx-auto mb-6" />
      {section(
        <ToursCards tours={tours} showDescription={true} />,
        i18n.t("otherExp")
      )}
      <hr className="w-4/5 mx-auto mb-6" />
      <button
        onClick={() => navigate(`/category/:${selectedCategory.title}`)}
        className="show-all-button flex justify-self-center items-center mx-auto my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        <IoMdArrowBack />
        {i18n.t("goBack")}
      </button>
    </div>
  )
};

export default Tour;