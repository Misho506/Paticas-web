import { TFunction } from "i18next";
import { BreadcrumbType } from "../../types";

const Breadcrumbs = (t: TFunction): BreadcrumbType[] => [
  {
    title: t("routesName.aboutUs"),
    id: "about-us",
    url: "/about-us",
  },
  {
    title: t("routesName.faqs"),
    id: "faqs",
    url: "/faqs",
  },
  {
    title: t("routesName.contact"),
    id: "contact",
    url: "/contact",
  },
  {
    title: t("routesName.blogs"),
    id: "blogs",
    url: "/blogs",
  },
  {
    title: t("routesName.categories"),
    id: "categories",
    url: "/categories",
  },
  {
    title: t("routesName.oneDayTours"),
    id: "one-day-tours",
    url: "/one-day-tours",
  },
  {
    title: t("routesName.multiDayTours"),
    id: "multi-day-tours",
    url: "/multi-day-tours",
  },
  {
    title: t("blogs.0.shortTitle"),
    id: "blogTicosAndTicas",
    url: "/blog/:blogTicosAndTicas",
  },
  {
    title: t("blogs.1.shortTitle"),
    id: "blogCaribe",
    url: "/blog/:blogCaribe",
  },
  {
    title: t("blogs.2.shortTitle"),
    id: "blogBlueZone",
    url: "/blog/:blogBlueZone",
  },
  {
    title: t("blogs.3.shortTitle"),
    id: "blogBiodiversity",
    url: "/blog/:blogBiodiversity",
  },
  // Wildlife Photography Expedition
  {
    title: t('category1.shortTitle'),
    id: "wildlifePhotography",
    url: "/categories/:wildlifePhotography",
  },
  {
    title: t("tours.wildLife.shortTitle"),
    id: "wildLife",
    url: "/:wildlifePhotography/multiDay-tours/:wildLife",
  },
  {
    title: t("tours.followingQuetzal.shortTitle"),
    id: "followingQuetzal",
    url: "/:wildlifePhotography/multiDay-tours/:followingQuetzal",
  },
  {
    title: t("tours.crocodilesAndBirds.shortTitle"),
    id: "crocodilesAndBirds",
    url: "/:wildlifePhotography/multiDay-tours/:crocodilesAndBirds",
  },

  // Beach, Mountain, and Sun
  {
    title: t('category3.shortTitle'),
    id: "beachAdventures",
    url: "/categories/:beach-mountain-sun",
  },
  {
    title: t("tours.sunAndSand.shortTitle"),
    id: "sunAndSand",
    url: "/:beach-mountain-sun/multiDay-tours/:sunAndSand",
  },
  {
    title: t("tours.manuelAntonio.shortTitle"),
    id: "manuelAntonio",
    url: "/:beach-mountain-sun/multiDay-tours/:manuelAntonio",
  },
  {
    title: t("tours.turtlesAndWhales.shortTitle"),
    id: "turtlesAndWhales",
    url: "/:beach-mountain-sun/multiDay-tours/:turtlesAndWhales",
  },
  {
    title: t("tours.volcanoes.shortTitle"),
    id: "volcanoes",
    url: "/:beach-mountain-sun/multiDay-tours/:volcanoes",
  },
  {
    title: t("tours.southCaribean.shortTitle"),
    id: "southCaribean",
    url: "/:beach-mountain-sun/multiDay-tours/:southCaribean",
  },
  {
    title: t("tours.tropicalTranquility.shortTitle"),
    id: "tropicalTranquility",
    url: "/:beach-mountain-sun/multiDay-tours/:tropicalTranquility",
  },

  // Adventure
  {
    title: t('category2.shortTitle'),
    id: "adventureTours",
    url: "/categories/:adventure",
  },
  {
    title: t("tours.sportFishing.shortTitle"),
    id: "sportFishing",
    url: "/:adventure/multiDay-tours/:sportFishing",
  },
  {
    title: t("tours.ecoExplor.shortTitle"),
    id: "ecoExplor",
    url: "/:adventure/multiDay-tours/:ecoExplor",
  },

  // Our Favorite Spots
  {
    title: t('category4.shortTitle'),
    id: "ourFavoriteSpots",
    url: "/categories/:our-favorite-spots",
  },
  {
    title: t("tours.secretsOfCostaRica.shortTitle"),
    id: "secretsOfCostaRica",
    url: "/:our-favorite-spots/multiDay-tours/:secretsOfCostaRica",
  },
  {
    title: t("tours.mostPopularInCostaRica.shortTitle"),
    id: "mostPopularInCostaRica",
    url: "/:our-favorite-spots/multiDay-tours/:mostPopularInCostaRica",
  },

  // One day tours
  {
    title: t("oneDayTour.birdwatching.shortTitle"),
    id: "birdwatching",
    url: "/one-day-tours/:birdwatching",
  },
  {
    title: t("oneDayTour.blueFalls.shortTitle"),
    id: "blueFalls",
    url: "/one-day-tours/:blueFalls",
  },
  {
    title: t("oneDayTour.dinoLand.shortTitle"),
    id: "dinoLand",
    url: "/one-day-tours/:dinoLand",
  },
  {
    title: t("oneDayTour.arenalLake.shortTitle"),
    id: "arenalLake",
    url: "/one-day-tours/:arenalLake",
  },
  {
    title: t("oneDayTour.manuelAntonio.shortTitle"),
    id: "manuelAntonio",
    url: "/one-day-tours/:manuelAntonio",
  }, {
    title: t("oneDayTour.poasVolcano.shortTitle"),
    id: "poasVolcano",
    url: "/one-day-tours/:poasVolcano",
  },
  {
    title: t("oneDayTour.caribbeanTour.shortTitle"),
    id: "caribbeanTour",
    url: "/one-day-tours/:caribbeanTour",
  },
  {
    title: t("oneDayTour.queseraBeach.shortTitle"),
    id: "queseraBeach",
    url: "/one-day-tours/:queseraBeach",
  },
  {
    title: t("oneDayTour.sarchiCity.shortTitle"),
    id: "sarchiCity",
    url: "/one-day-tours/:sarchiCity",
  },
  {
    title: t("oneDayTour.santaTeresaSurf.shortTitle"),
    id: "santaTeresaSurf",
    url: "/one-day-tours/:santaTeresaSurf",
  }, {
    title: t("oneDayTour.tortugueroCanoe.shortTitle"),
    id: "tortugueroCanoe",
    url: "/one-day-tours/:tortugueroCanoe",
  },
  {
    title: t("oneDayTour.whaleWatching.shortTitle"),
    id: "whaleWatching",
    url: "/one-day-tours/:whaleWatching",
  },
]

export default Breadcrumbs;

// Mapeo con los id's y los nombres traducidos, importar i18n para utilizarlo como en los tours.