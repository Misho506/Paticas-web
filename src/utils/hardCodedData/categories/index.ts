import { CategoryType } from "../../types";
import {
  crocodilesAndBirds,
  followingQuetzal,
  wildLife,
  ecoExplor,
  mostPopularInCostaRica,
  secretsOfCostaRica,
  sportFishing,
  sunAndSand,
  manuelAntonio,
  turtlesAndWhales,
  volcanoes,
  southCaribean,
  tropicalTranquility,
} from './tours';
import { TFunction } from "i18next";

export const getCategoriesData = (t: TFunction): Array<CategoryType> => [
  {
    title: t('category1.title'),
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042451/14._Expedicio%CC%81n_Fotogra%CC%81fica_de_Vida_Silvestre_xrrxep.jpg",
    description: t('category1.body'),
    tours: [wildLife(t), followingQuetzal(t), crocodilesAndBirds(t)],
  },
  {
    title: t('category2.title'),
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042453/15._Aventura_ekgmvv.jpg",
    description: t('category2.body'),
    tours: [sportFishing(t), ecoExplor(t)]
  },
  {
    title: t('category3.title'),
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042454/16._Playa_montan%CC%83a_y_sol_vl6yqm.jpg",
    description: t('category3.body'),
    tours: [sunAndSand(t), manuelAntonio(t), turtlesAndWhales(t), volcanoes(t), southCaribean(t), tropicalTranquility(t)]
  },
  {
    title: t('category4.title'),
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042452/17._Playa_montan%CC%83a_y_sol_els7wa.jpg",
    description: t('category4.body'),
    tours: [secretsOfCostaRica(t), mostPopularInCostaRica(t)],
  }
];

