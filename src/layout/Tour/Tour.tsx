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
import { LuxuryHotelIcon, MealsIncludedIcon } from "../../assets/icons";

const Tour = () => {
  const { i18n } = useTranslation();
  const { selectedTour, selectedCategory, tours } = useTour();
  const [openSections, setOpenSections] = useState<Array<number>>([]);
  const navigate = useNavigate();
  const tabs = [i18n.t("overview"), i18n.t("details"), i18n.t("itinerary"), i18n.t("gallery")];
  const [activeTab, setActiveTab] = useState(i18n.t("overview"));

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
      <div className="flex justify-center mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium text-sm md:text-base text-green-900 ${activeTab === tab
              ? "border-b-2 border-green-900"
              : "hover:text-green-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <hr className="w-4/5 mx-auto mb-6" />
      {activeTab === i18n.t("overview") && section(
        <p className="py-11 flex flex-col justify-self-center text-gray-500 italic text-lg text-center" > {selectedTour.about}</p >,
        i18n.t("aboutTour")
      )}
      {activeTab === i18n.t("details") && section(
        <ul>
          {selectedTour.includes.map((activity, index) => (
            <li key={index} className="py-2 text-gray-500 italic text-lg">{activity}</li>
          ))}
        </ul>,
        i18n.t("includes")
      )}
      <br />
      {activeTab === i18n.t("gallery") && <TourImages />}
      <br />
      {activeTab === i18n.t("itinerary") && section(
        selectedTour.itinerary.map((activity, index) => (
          <article key={index} className={`activity justify-items-center mt-6 mb-4 ${openSections.includes(index) && 'mb-6'}`}>
            <h5 key={index} className="activity-title w-full py-3 px-28 mx-auto rounded-full border-1 text-center" onClick={() => showHideSection(index)}>{activity.title}</h5>
            <div key={index} className={`${openSections.includes(index) ? 'max-h-screen mt-4' : 'm-0 h-0 overflow-hidden'} flex flex-col items-center transition-all duration-400 ease-in-out`}>
              <p className="text-gray-500 italic text-lg  whitespace-pre-line">{activity.description}</p>
              {activity.mealsIncluded && <div className="flex items-center w-100">
                <img src={MealsIncludedIcon} alt="family" className="w-10 object-cover" />
                <span className="ml-2 text-gray-500 italic text-lg">
                  {activity.mealsIncluded}
                </span>
              </div>}
              {activity.hotelName && <div className="flex items-center w-100">
                <img src={LuxuryHotelIcon} alt="family" className="w-10 object-cover" />
                <a className="hiper-link ml-2 text-gray-500 italic text-lg" href={activity.hotelLink} target="_blank" rel="noreferrer">
                  {activity.hotelName + i18n.t('orSimilar')}
                </a>
              </div>}
            </div>
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
        <ToursCards tours={tours} />,
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