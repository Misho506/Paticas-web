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
    image: "https://misoinfo.data.blog/wp-content/uploads/2025/04/14._expedicion_fotografica_de_vida_silvestre_xrrxep.jpg",
    description: t('category1.body'),
    tours: [wildLife(t), followingQuetzal(t), crocodilesAndBirds(t)],
  },
  {
    title: t('category3.title'),
    image: "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00002.jpg",
    description: t('category3.body'),
    tours: [sunAndSand(t), manuelAntonio(t), turtlesAndWhales(t), volcanoes(t), southCaribean(t), tropicalTranquility(t)]
  },
  {
    title: t('category2.title'),
    image: "https://misoinfo.data.blog/wp-content/uploads/2025/04/15._aventura_ekgmvv.jpg",
    description: t('category2.body'),
    tours: [sportFishing(t), ecoExplor(t)]
  },
  {
    title: t('category4.title'),
    image: "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00005.jpg",
    description: t('category4.body'),
    tours: [secretsOfCostaRica(t), mostPopularInCostaRica(t)],
  }
];

