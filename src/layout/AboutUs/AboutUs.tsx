import AboutUsCards from "../../components/aboutUsCards/AboutUsCards";
import FounderProfile from "../../components/founderProfile/FounderProfile";
import Reviews from "../../components/reviews/Reviews";
import SectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import { founders, misionAndVision, statsInfo, partners } from "../../utils/hardCodedData/aboutUs";
import { Stat } from "../../utils/types";

import "./AboutUs.css";

const sectionReviews = {
  title: "Reseñas",
  body: `Nuestro clientes nos respaldan
      *STARS*`
}

const AboutUs = () => {


  const statItem = ({ icon, number, description }: Stat) => (
    <article className="flex flex-col items-center m-6 stat-container">
      <img src={icon} alt={icon} className="bg-white rounded-full w-32 h-32 flex items-center justify-center mb-4" />
      <span className="stat-number text-5xl mb-2">
        {number}
      </span>
      <span className="text-gray-800 text-xl text-center max-w-xs italic">
        {description}
      </span>
    </article>
  );

  return (
    <>
      <img src="https://res.cloudinary.com/drbdst7hg/image/upload/v1737010459/Las_3_yzrxgl.jpg" alt="family" className="brightness-75 w-full h-auto object-cover" />
      <SectionWithTitle title="Nuestro viaje" body={`${<span className="italic" >Paticas pa´que las Quiero</span>} Paticas is a Costa Rican travel agency dedicated to both local and international tourists, committed to promoting sustainable tourism while supporting local businesses and rural entrepreneurs. 

      In 2021, a family of three women (Yorlene, Karla, and Yoely) fulfilled their dream of inspiring others and sharing the stunning beauty and biodiversity of Costa Rica. Known for its breathtaking landscapes, diverse wildlife, and commitment to sustainable tourism, Costa Rica offers an unparalleled travel experience filled with adventure, safety, and warm hospitality.`} />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl text-gray-800 mb-8">Nuestras fundadoras</h1>
        {founders.map((founder, index) => (
          <FounderProfile key={index} {...founder} />
        ))}
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 mb-12">
        <h1 className="text-3xl text-gray-800 mb-8">Misión y Visión</h1>
        {misionAndVision.map((card) => (
          AboutUsCards(card)
        ))}
      </section>
      <section className="w-full p-10 lg:justify-items-center stat-container">
        <h3 className="text-3xl text-gray-800 mb-8 text-center">Somos Paticas Paque' Las Quiero</h3>
        <article className="grid lg:grid-cols-2 md:grid-cols-1 lg:w-2/5 ">
          {statsInfo.map((stat) => statItem(stat))}
        </article>
      </section>
      <section className="max-w-4xl p-10 flex flex-col justify-self-center">
        <h3 className="text-3xl text-gray-800 mb-8 text-center">Somos Paticas Paque' Las Quiero</h3>
        <img className="w-full rounded-3xl" alt="green snake" src="https://res.cloudinary.com/drbdst7hg/image/upload/v1740782678/verde_vwjqbr.jpg" />
        <p className="mt-8 text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
          Estamos comprometidos con la conciencia verde y la conservación del medio ambiente. Promovemos el turismo sostenible, respetando los ecosistemas y minimizando nuestro impacto en la naturaleza. Apoyamos prácticas que preservan la biodiversidad, colaboramos con emprendimientos locales responsables y educamos a nuestros clientes sobre la importancia de cuidar los recursos naturales. Cada uno de nuestros viajes busca generar un impacto positivo en el entorno, fomentando la protección y valoración de la riqueza natural de Costa Rica.
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 mb-12">
        <h1 className="text-3xl text-gray-800 pb-10 text-center">Nuestros partners</h1>
        <article className="grid grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <img alt={partner} key={index} src={partner} className="w-32 h-auto" />
          ))}
        </article>
        <SectionWithTitle title={sectionReviews.title} body={sectionReviews.body} />
        <Reviews />
      </section>
    </>
  )
};

export default AboutUs;