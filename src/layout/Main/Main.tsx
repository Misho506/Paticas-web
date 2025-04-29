import { IoIosArrowRoundForward } from "react-icons/io";
import Carousel from "../../components/carousel/Carousel";
import Reviews from "../../components/reviews/Reviews";
import { useTour } from "../../context/TourContext";
import SectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import ToursCards from "../../components/tourCard/ToursCard";
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';
import "./Main.css";
import BlogsCarrousel from "../../components/BlogsCarrousel/BlogsCarrousel";
import { sectionOurTour, sectionBlogs, sectionAboutUs, sectionReviews } from "../../utils/hardCodedData/sections";
import Contact from "../Contact/Contact";
import {
  AirportTransferIcon,
  MealsIncludedIcon,
  FreeWifiIcon,
  LuxuryHotelIcon,
  TourGuideIcon,
  TransportationIcon,
  TaxesIcon,
  ToursIcon
} from "../../assets/icons/index";

const Main = () => {
  const { i18n } = useTranslation();
  const { tours } = useTour();
  const navigate = useNavigate();
  const toursIncludesIcons = [
    AirportTransferIcon,
    TransportationIcon,
    FreeWifiIcon,
    LuxuryHotelIcon,
    MealsIncludedIcon,
    ToursIcon,
    TaxesIcon,
    TourGuideIcon,
  ]

  return (
    <section>
      <Carousel />
      <SectionWithTitle title={sectionOurTour(i18n.t).title} body={sectionOurTour(i18n.t).body} />
      <article className="py-11 max-w-4xl px-3 mx-auto flex flex-col justify-self-center">
        <h4 className="mb-3">{i18n.t('ourTours.includesTitle')}</h4>
        <div className="flex flex-wrap items-center">
          {toursIncludesIcons.map((icon, index) =>
            <div key={index} className="flex items-center">
              <img src={icon} alt="family" className="w-10 object-cover" />
              <span className="mr-4 text-gray-500 italic text-lg">
                {i18n.t(`ourTours.includes.${index}`)}
              </span>
            </div>
          )}
        </div>
      </article>
      <ToursCards tours={tours} showActionButton />
      <SectionWithTitle title={sectionBlogs(i18n.t).title} body={sectionBlogs(i18n.t).body} />
      <BlogsCarrousel />
      <SectionWithTitle title={sectionAboutUs(i18n.t).title} body={sectionAboutUs(i18n.t).body} />
      <section className="relative">
        <img src="https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/las-3.jpg" alt="family" className="brightness-75 w-full h-auto object-cover" />
        <article className="absolute inset-0 flex flex-column items-center justify-center text-white  ">
          <h2 className="text-3xl text-center bold">
            {i18n.t("moreThanFamily")}
          </h2>
          <p className="text-2xl italic">{i18n.t("weAre")}</p>
          <button onClick={() => navigate("/about-us")} className="bg-white text-black border-full py-2 px-3 mt-3 rounded-full flex justify-self-center">
            {i18n.t("discoverMore")}
            <IoIosArrowRoundForward className="mx-1 flex self-center text-2xl" />
          </button>
        </article>
      </section>
      <SectionWithTitle title={sectionReviews(i18n.t).title} body={sectionReviews(i18n.t).body} />
      <Reviews />
      <button className="bg-yellow text-black border-full py-2 px-3 mt-3  mx-auto rounded-full flex justify-self-center">
        {i18n.t("shareExperience")}
        <IoIosArrowRoundForward className="mx-1 flex justify-self-center text-2xl" />
      </button>
      <br />
      <Contact />
    </section>
  )
};

export default Main;