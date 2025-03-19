import { IoIosArrowRoundForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ReactNode } from 'react';

import Carousel from "../../components/carousel/Carousel";
import PostCarrousel from "../../components/postCarrousel/PostCarrousel";
import BlogPost from "../../components/blogs/Blogs";
import Reviews from "../../components/reviews/Reviews";
import { useTour } from "../../context/TourContext";
import SectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import ToursCards from "../../components/tourCard/ToursCard";
import "./Main.css";
import blogs from "../../utils/hardCodedData/blogs";
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { i18n } = useTranslation();
  const { tours } = useTour();

  const sectionOurTours = {
    title: i18n.t('sectionOurTour.title'),
    body: i18n.t('sectionOurTour.body')
  }
  const sectionBlogs = {
    title: i18n.t('sectionBlogs.title'),
    body: i18n.t('sectionBlogs.body'),
  }
  const sectionAboutUs = {
    title: i18n.t('sectionAboutUs.title'),
    body: i18n.t('sectionAboutUs.body')
  }
  const sectionReviews = {
    title: i18n.t('sectionReviews.title'),
    body: `${i18n.t('sectionReviews.body')}
          *STARS*`
  }
  const sectionContact = {
    title: i18n.t('sectionContact.title'),
    body: i18n.t('sectionContact.body'),
    bgColor: "bg-neutral-300"
  }

  const circularContainerWithInfo = (icon: ReactNode, children: ReactNode) => (
    <div className="border-black circular-container bg-white rounded-full border-2 flex flex-col items-center justify-center shadow-sm">
      <article className="w-10 h-10 bg-yellow rounded-full flex flex-col items-center justify-center">
        {icon}
      </article>
      <article className="mt-2 text-center">
        {children}
      </article>
    </div>
  )

  return (
    <section className="main-container">
      <Carousel />
      <SectionWithTitle title={sectionOurTours.title} body={sectionOurTours.body} />
      <ToursCards tours={tours} />
      <SectionWithTitle title={sectionBlogs.title} body={sectionBlogs.body} />
      <PostCarrousel
        postList={blogs.map((blog, index) =>
          <BlogPost
            key={index}
            title={blog.title}
            description={blog.description}
            picture={blog.picture}
            date={blog.date}
            readingTime={blog.readingTime}
          />)}
      />
      <SectionWithTitle title={sectionAboutUs.title} body={sectionAboutUs.body} />
      <section className="relative">
        <img src="https://res.cloudinary.com/drbdst7hg/image/upload/v1737010459/Las_3_yzrxgl.jpg" alt="family" className="brightness-75 w-full h-auto object-cover" />
        <article className="absolute inset-0 flex flex-column items-center justify-center text-white  ">
          <h2 className="text-3xl text-center bold">
            {i18n.t("moreThanFamily")}
          </h2>
          <p className="text-2xl italic">{i18n.t("weAre")}</p>
          <button className="bg-white text-black border-full py-2 px-3 mt-3 rounded-full flex justify-self-center">
            {i18n.t("discoverMore")}
            <IoIosArrowRoundForward className="mx-1 flex self-center text-2xl" />
          </button>
        </article>
      </section>
      <SectionWithTitle title={sectionReviews.title} body={sectionReviews.body} />
      <Reviews />
      <button className="bg-yellow text-black border-full py-2 px-3 mt-3 rounded-full flex justify-self-center">
        {i18n.t("shareExperience")}
        <IoIosArrowRoundForward className="mx-1 flex justify-self-center text-2xl" />
      </button>
      <section className="bg-neutral-300 pt-7 mt-4">
        <SectionWithTitle title={sectionContact.title} body={sectionContact.body} bgColor={sectionContact.bgColor} />
        <div className="flex items-center justify-center gap-8 px-6 pb-6 max-sm:flex-col">
          {circularContainerWithInfo(
            <FaWhatsapp className="text-black text-xl" />,
            <>
              <h5 className="font-light text-md">Whatsapp</h5>
              <a
                href={`https://api.whatsapp.com/send?phone=+50687758884&text=${i18n.t("whatsappMessage")}`}

                className="text-gray-600 text-xs hover:text-gray-800 transition-colors"
              >
                +506 8775 8884
              </a>
            </>
          )}
          <div className="h-14 w-px bg-neutral-900 mx-2 max-sm:hidden" />
          {circularContainerWithInfo(
            <MdOutlineEmail className="text-black text-xl" />,
            <>
              <h5 className="font-light text-md">E-mail</h5>
              <a
                href={`mailto:info@paticascr.com?subject=${encodeURIComponent(i18n.t("generalEmail.subject"))}&body=${encodeURIComponent(i18n.t("generalEmail.body"))}`}
                className="text-gray-600 text-xs hover:text-gray-800 transition-colors"
              >
                info@paticascr.com
              </a>
            </>
          )}
        </div>
      </section>

    </section>
  )
};

export default Main;