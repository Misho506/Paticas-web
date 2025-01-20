import { TourType } from "../../types";
import { crocodilesAndBirds, followingQuetzal, wildLife, ecoExplor, mostPopularInCostaRica, secretsofCostaRica, sportFishing, sunAndSand, manuelAntonio, turtlesAnWwhales, volcanoes, southCaribean, tropicalTranquility } from './subCategories';

const ToursData: Array<TourType> = [
  {
    title: "Expedición Fotográfica de Vida Silvestre",
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042451/14._Expedicio%CC%81n_Fotogra%CC%81fica_de_Vida_Silvestre_xrrxep.jpg",
    description: "un recorrido fotográfico que inmortaliza la esencia vibrante y auténtica de Costa Rica en cada toma.",
    subCategories: [wildLife, followingQuetzal, crocodilesAndBirds],
  },
  {
    title: "Aventura",
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042453/15._Aventura_ekgmvv.jpg",
    description: "La esencia de Costa Rica, capturada en una vivencia intensa de aventura y conexión con la naturaleza",
    subCategories: [sportFishing, ecoExplor]
  },
  {
    title: "Playa, Montaña y Sol",
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042454/16._Playa_montan%CC%83a_y_sol_vl6yqm.jpg",
    description: "La magia de Costa Rica cobra vida en una fusión de paisajes y aventuras extremas, ofreciendo emoción y escenarios espectaculares.",
    subCategories: [sunAndSand, manuelAntonio, turtlesAnWwhales, volcanoes, southCaribean, tropicalTranquility]
  },
  {
    title: "Destinos Inolvidables",
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042452/17._Playa_montan%CC%83a_y_sol_els7wa.jpg",
    description: "Un recorrido completo que descubre los secretos naturales de Costa Rica en cada paso",
    subCategories: [secretsofCostaRica, mostPopularInCostaRica],
  }
];

export default ToursData;