import Carousel from "../../components/carousel/Carousel";
import { IoIosArrowRoundForward, IoIosStar } from "react-icons/io";
import SubCategoriesCards from "../../components/subCategorieCard/SubCategoriesCards";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail, MdExpandMore } from "react-icons/md";
import FamiliIMG from "../../assets/aboutUs/Las 3.jpg";
import { Fragment, ReactNode } from 'react';
import PostCarrousel from "../../components/postCarrousel/PostCarrousel";

import BlogPost from "../../components/blogs/Blogs";
import Reviews from "../../components/reviews/Reviews";
import "./Main.css";

const Main = () => {
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
    body: `Nuestro clientes nos respaldan\n
          *STARS*`
  }

  const sectionContact = {
    title: "Contáctenos",
    body: `No dude en escribirnos, Estamos listos para hacer realidad su viaje soñado y
          transformar cada detalle en una experiencia inolvidable`,
    bgColor: "bg-neutral-300"
  }

  const createSectionWithTitle = ({ title, body, bgColor }: { title: string; body: string; bgColor?: string }) => {
    const insertStars = body.includes('*STARS*');
    const secondString =
      <div className="flex items-baseline">
        <br />
        <IoIosStar className="color-yellow" />
        <IoIosStar className="color-yellow" />
        <IoIosStar className="color-yellow" />
        <IoIosStar className="color-yellow" />
        <IoIosStar className="color-yellow mr-1" />
        5.0 rating de 250 reviews
      </div>
    return (
      <article className={`py-11 max-width-500 flex flex-col justify-self-center ${bgColor}`}>
        <h2 className="text-4xl pb-3 text-center">{title}</h2>
        <p className="text-gray-500 italic text-lg text-center">
          {insertStars ? body.split('*STARS*') : body}
          {insertStars && secondString}
        </p>
      </article>
    )
  };

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
      {createSectionWithTitle(sectionOurTours)}
      <SubCategoriesCards />
      {createSectionWithTitle(sectionBlogs)}
      <PostCarrousel postList={[<BlogPost />]} />
      {createSectionWithTitle(sectionAboutUs)}
      <section className="relative">
        <img src={FamiliIMG} alt="family" className="brightness-75 w-full h-auto object-cover" />
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
      {createSectionWithTitle(sectionReviews)}
      <Reviews />
      <button className="bg-yellow text-black border-full py-2 px-3 mt-3 rounded-full flex justify-self-center">
        Dejar una reseña
        <IoIosArrowRoundForward className="mx-1 flex justify-self-center text-2xl" />
      </button>
      <section className="bg-neutral-300 pt-7 mt-4">
        {createSectionWithTitle(sectionContact)}
        <div className="flex items-center justify-center gap-8 px-6 pb-6 max-sm:flex-col">
          {circularContainerWithInfo(
            <FaWhatsapp className="text-black text-xl" />,
            <>
              <h5 className="font-light text-md">Whatsapp</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+50686918432&text=I Want to know more about this tour: ---> 'Please add the name of the tour that want'"

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
      <section className="bg-dark-green p-8 relative">
        <article className="absolute top-0 right-8">
          <MdExpandMore className="h-6 w-6 text-white" />
        </article>
        <div className="border-t border-white mb-6" />
        <article className="space-y-4">
          <h2 className="text-white text-xl font-medium">Suscríbase</h2>
          <p className="text-white text-sm">
            Si le gustaría estar al día con opciones de giras, tips de viajes y más no dude en suscribirse.
          </p>
          <button className="bg-white text-dark-green rounded-full py-3 px-6 inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
            <span>Suscríbase a nuestro newsletter</span>
            <IoIosArrowRoundForward className="h-5 w-5" />
          </button>
        </article>
      </section>
    </section>
  )
};

export default Main;