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

const Main = () => {
  const { i18n } = useTranslation();
  const { tours } = useTour();
  const navigate = useNavigate();

  return (
    <section>
      <Carousel />
      <SectionWithTitle title={sectionOurTour(i18n.t).title} body={sectionOurTour(i18n.t).body} />
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