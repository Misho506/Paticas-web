import { IoIosArrowRoundForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Fragment, ReactNode } from 'react';

import Carousel from "../../components/carousel/Carousel";
import PostCarrousel from "../../components/postCarrousel/PostCarrousel";
import BlogPost from "../../components/blogs/Blogs";
import Reviews from "../../components/reviews/Reviews";
import { useTour } from "../../context/TourContext";
import SectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import ToursCards from "../../components/tourCard/ToursCard";
import "./Main.css";

const sectionOurTours = {
  title: "Nuestras Giras",
  body: `Escenarios naturales sorprendentes, paisajes que cuentan historias y
          biodiverdiad única que inspiran y capturan momentos únicos.`
}
const sectionBlogs = {
  title: "Blogs",
  body: `Un retiro tranquilo,una aventura cultural o una experiencia al aire libre se
          encuentran en cada rincón, ofreciendo la escapada local ideal.`
}
const sectionAboutUs = {
  title: "Nosotros",
  body: `La esencia de una experiencia en conexión con la naturalexa se refleja en cada 
          actividad, dectacando la riqueza natural y el compromiso con la utenticidad 
          de Costa Rica.`
}
const sectionReviews = {
  title: "Reseñas",
  body: `Nuestro clientes nos respaldan
        *STARS*`
}
const sectionContact = {
  title: "Contáctenos",
  body: `No dude en escribirnos, Estamos listos para hacer realidad su viaje soñado y
        transformar cada detalle en una experiencia inolvidable`,
  bgColor: "bg-neutral-300"
}

const Main = () => {
  const { tours } = useTour();

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
      <PostCarrousel postList={[<BlogPost />]} />
      <SectionWithTitle title={sectionAboutUs.title} body={sectionAboutUs.body} />
      <section className="relative">
        <img src="https://res.cloudinary.com/drbdst7hg/image/upload/v1737010459/Las_3_yzrxgl.jpg" alt="family" className="brightness-75 w-full h-auto object-cover" />
        <article className="absolute inset-0 flex flex-column items-center justify-center text-white  ">
          <h2 className="text-3xl bold">
            Somos más que una familia
          </h2>
          <p className="text-2xl italic">Somos las patacalientes</p>
          <button className="bg-white text-black border-full py-2 px-3 mt-3 rounded-full flex justify-self-center">
            Descubrir más
            <IoIosArrowRoundForward className="mx-1 flex self-center text-2xl" />
          </button>
        </article>
      </section>
      <SectionWithTitle title={sectionReviews.title} body={sectionReviews.body} />
      <Reviews />
      <button className="bg-yellow text-black border-full py-2 px-3 mt-3 rounded-full flex justify-self-center">
        Dejar una reseña
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
                href="https://api.whatsapp.com/send?phone=+50686918432&text=I want to know more about this tour: ---> 'Please add the name of the tour that want'"

                className="text-gray-600 text-xs hover:text-gray-800 transition-colors"
              >
                +506 8691 8432
              </a>
            </>
          )}
          <div className="h-14 w-px bg-neutral-900 mx-2 max-sm:hidden" />
          {circularContainerWithInfo(
            <MdOutlineEmail className="text-black text-xl" />,
            <>
              <h5 className="font-light text-md">E-mail</h5>
              <a
                href="mailto:info@paticascr.com"
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