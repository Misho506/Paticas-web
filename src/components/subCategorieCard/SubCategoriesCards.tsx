import { VidaSilvestreIMG, TrasLasHuellasIMG, ObservacionDeAvesIMG, EcoExploraIMG } from "../../assets/subCategories";
import { SubCategorie } from "../../utils/types";
import SubCategorieCard from "./SubCategorieCard";

import "./SubCategorieCard.css";


const subCategories: Array<SubCategorie> = [
  {
    img: VidaSilvestreIMG,
    title: "Vida Silvestre en Corcovado y Península de Osa",
    place: "Pacífico Sue",
    link: "/vidasilvestre",
    itinerary: "8 días y 7 noches",
    description: "",
  },
  {
    img: TrasLasHuellasIMG,
    title: "Tras las huellas del Quetzal y el Zopilote Rey",
    place: "Caribe Norte",
    link: "/vidasilvestre",
    itinerary: "7 días y 6 noches",
    description: "",
  },
  {
    img: ObservacionDeAvesIMG,
    title: "Observacion de cocodrilos y aves",
    place: "Caribe Norte y Pac. Central",
    link: "/vidasilvestre",
    itinerary: "7 días y 6 noches",
    description: "",
  },
  {
    img: EcoExploraIMG,
    title: "Eco-Explora / Gira de Aventura",
    place: "Zona Norte",
    link: "/vidasilvestre",
    itinerary: "9 días y 8 noches",
    description: "",
  },
]

const SubCategoriesCards = () => (
  <>
    <section className="flex flex-wrap mx-10 justify-center">
      {
        subCategories.map((subCategorie, index) => (
          <SubCategorieCard
            key={index}
            img={subCategorie.img}
            title={subCategorie.title}
            place={subCategorie.place}
            link={subCategorie.link}
            itinerary={subCategorie.itinerary}
            desciption={subCategorie.description}
          />
        ))
      }
    </section>
    <button className="show-all-button flex justify-self-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black">Ver todas las giras</button>
  </>
)

export default SubCategoriesCards;
