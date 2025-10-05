import { TFunction } from 'i18next';
import { TourType } from '../../../types';

const birdwatching = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/birdewatching-tour-00001.jpg",
  id: "birdwatching",
  suggestedTours: ["whaleWatching", "manuelAntonio", "tortugueroCanoe"],
  aproxHours: "8",
  peekLink: t("oneDayTour.birdwatching.peekLink"),
  title: t("oneDayTour.birdwatching.title"),
  shortTitle: t("oneDayTour.birdwatching.shortTitle"),
  // places: [t("oneDayTour.birdwatching.places.0")],
  daysAndNights: t("oneDayTour.birdwatching.daysAndNights"),
  description: t("oneDayTour.birdwatching.description"),
  about: t("oneDayTour.birdwatching.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/birdewatching-tour-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/birdewatching-tour-00002.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/birdewatching-tour-00003.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/birdewatching-tour-00004.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/birdewatching-tour-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/birdewatching-tour-00006.jpg",
  ],
  includes: [
    t("oneDayTour.birdwatching.includes.0"),
    t("oneDayTour.birdwatching.includes.1"),
    t("oneDayTour.birdwatching.includes.2"),
    t("oneDayTour.birdwatching.includes.3"),
    t("oneDayTour.birdwatching.includes.4"),
    t("oneDayTour.birdwatching.includes.5"),
    t("oneDayTour.birdwatching.includes.6"),
  ],
  itinerary: [
    {
      title: t("oneDayTour.birdwatching.itinerary.0.title"),
      description: t("oneDayTour.birdwatching.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.birdwatching.itinerary.1.title"),
      description: t("oneDayTour.birdwatching.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.birdwatching.itinerary.2.title"),
      description: t("oneDayTour.birdwatching.itinerary.2.description"),
    },
    {
      title: t("oneDayTour.birdwatching.itinerary.3.title"),
      description: t("oneDayTour.birdwatching.itinerary.3.description"),
    }
  ],
  prices: [
    { price: 266, numberOfPeople: 2 },
    { price: 247, numberOfPeople: 4 },
    { price: 229, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const blueFalls = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00004.jpg",
  id: "blueFalls",
  suggestedTours: ["dinoLand", "arenalLake", "sarchiCity"],
  aproxHours: "8 - 9",
  peekLink: t("oneDayTour.blueFalls.peekLink"),
  title: t("oneDayTour.blueFalls.title"),
  shortTitle: t("oneDayTour.blueFalls.shortTitle"),
  // places: [t("oneDayTour.blueFalls.places.0")],
  daysAndNights: t("oneDayTour.blueFalls.daysAndNights"),
  description: t("oneDayTour.blueFalls.description"),
  about: t("oneDayTour.blueFalls.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00009.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00004.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00002.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00003.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00006.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00007.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00008.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00010.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00011.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/blue-falls-00001.jpg",
  ],
  includes: [
    t("oneDayTour.blueFalls.includes.0"),
    t("oneDayTour.blueFalls.includes.1"),
    t("oneDayTour.blueFalls.includes.2"),
    t("oneDayTour.blueFalls.includes.3"),
    t("oneDayTour.blueFalls.includes.4"),
    t("oneDayTour.blueFalls.includes.5"),
    t("oneDayTour.blueFalls.includes.6"),
    t("oneDayTour.blueFalls.includes.7"),
  ],
  itinerary: [
    {
      title: t("oneDayTour.blueFalls.itinerary.0.title"),
      description: t("oneDayTour.blueFalls.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.blueFalls.itinerary.1.title"),
      description: t("oneDayTour.blueFalls.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.blueFalls.itinerary.2.title"),
      description: t("oneDayTour.blueFalls.itinerary.2.description"),
    }
  ],
  prices: [
    { price: 226, numberOfPeople: 2 },
    { price: 176, numberOfPeople: 4 },
    { price: 159, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const dinoLand = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00009.jpg",
  id: "dinoLand",
  suggestedTours: ["blueFalls", "poasVolcano", "sarchiCity"],
  aproxHours: "8 - 9",
  peekLink: t("oneDayTour.dinoLand.peekLink"),
  title: t("oneDayTour.dinoLand.title"),
  shortTitle: t("oneDayTour.dinoLand.shortTitle"),
  // places: [t("oneDayTour.dinoLand.places.0")],
  daysAndNights: t("oneDayTour.dinoLand.daysAndNights"),
  description: t("oneDayTour.dinoLand.description"),
  about: t("oneDayTour.dinoLand.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00007.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00009.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00008.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00003.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00004.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00006.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00002.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00010.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00011.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/dino-land-00012.jpg",
  ],
  includes: [
    t("oneDayTour.dinoLand.includes.0"),
    t("oneDayTour.dinoLand.includes.1"),
    t("oneDayTour.dinoLand.includes.2"),
    t("oneDayTour.dinoLand.includes.3"),
    t("oneDayTour.dinoLand.includes.4"),
    t("oneDayTour.dinoLand.includes.5"),
    t("oneDayTour.dinoLand.includes.6"),
    t("oneDayTour.dinoLand.includes.7"),
  ],
  itinerary: [
    {
      title: t("oneDayTour.dinoLand.itinerary.0.title"),
      description: t("oneDayTour.dinoLand.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.dinoLand.itinerary.1.title"),
      description: t("oneDayTour.dinoLand.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.dinoLand.itinerary.2.title"),
      description: t("oneDayTour.dinoLand.itinerary.2.description"),
    }
  ],
  prices: [
    { price: 232, numberOfPeople: 2 },
    { price: 181, numberOfPeople: 4 },
    { price: 164, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const arenalLake = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/lake-arenal-00004.jpg",
  id: "arenalLake",
  suggestedTours: ["poasVolcano", "dinoLand", "blueFalls"],
  aproxHours: "10 - 12",
  peekLink: t("oneDayTour.arenalLake.peekLink"),
  title: t("oneDayTour.arenalLake.title"),
  shortTitle: t("oneDayTour.arenalLake.shortTitle"),
  // places: [t("oneDayTour.arenalLake.places.0")],
  daysAndNights: t("oneDayTour.arenalLake.daysAndNights"),
  description: t("oneDayTour.arenalLake.description"),
  about: t("oneDayTour.arenalLake.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/lake-arenal-00003.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/lake-arenal-00001.jpeg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/lake-arenal-00002.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/lake-arenal-00004.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/lake-arenal-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/lake-arenal-00006.jpg",
  ],
  includes: [
    t("oneDayTour.arenalLake.includes.0"),
    t("oneDayTour.arenalLake.includes.1"),
    t("oneDayTour.arenalLake.includes.2"),
    t("oneDayTour.arenalLake.includes.3"),
    t("oneDayTour.arenalLake.includes.4"),
    t("oneDayTour.arenalLake.includes.5"),
    t("oneDayTour.arenalLake.includes.6"),
    t("oneDayTour.arenalLake.includes.7"),
    t("oneDayTour.arenalLake.includes.8"),
  ],
  itinerary: [
    {
      title: t("oneDayTour.arenalLake.itinerary.0.title"),
      description: t("oneDayTour.arenalLake.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.arenalLake.itinerary.1.title"),
      description: t("oneDayTour.arenalLake.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.arenalLake.itinerary.2.title"),
      description: t("oneDayTour.arenalLake.itinerary.2.description"),
    },
    {
      title: t("oneDayTour.arenalLake.itinerary.3.title"),
      description: t("oneDayTour.arenalLake.itinerary.3.description"),
    }
  ],
  prices: [
    { price: 232, numberOfPeople: 2 },
    { price: 181, numberOfPeople: 4 },
    { price: 164, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const manuelAntonio = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/manuel-antonio-00005.jpg",
  id: "manuelAntonio",
  suggestedTours: ["whaleWatching", "birdwatching", "tortugueroCanoe"],
  aproxHours: "10 - 12",
  peekLink: t("oneDayTour.manuelAntonio.peekLink"),
  title: t("oneDayTour.manuelAntonio.title"),
  shortTitle: t("oneDayTour.manuelAntonio.shortTitle"),
  // places: [t("oneDayTour.manuelAntonio.places.0")],
  daysAndNights: t("oneDayTour.manuelAntonio.daysAndNights"),
  description: t("oneDayTour.manuelAntonio.description"),
  about: t("oneDayTour.manuelAntonio.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/manuel-antonio-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/manuel-antonio-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/manuel-antonio-00002.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/manuel-antonio-00006.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/manuel-antonio-00008.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/manuel-antonio-00018.jpg",
  ],
  includes: [
    t("oneDayTour.manuelAntonio.includes.0"),
    t("oneDayTour.manuelAntonio.includes.1"),
    t("oneDayTour.manuelAntonio.includes.2"),
    t("oneDayTour.manuelAntonio.includes.3"),
    t("oneDayTour.manuelAntonio.includes.4"),
    t("oneDayTour.manuelAntonio.includes.5"),
    t("oneDayTour.manuelAntonio.includes.6")
  ],
  itinerary: [
    {
      title: t("oneDayTour.manuelAntonio.itinerary.0.title"),
      description: t("oneDayTour.manuelAntonio.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.manuelAntonio.itinerary.1.title"),
      description: t("oneDayTour.manuelAntonio.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.manuelAntonio.itinerary.2.title"),
      description: t("oneDayTour.manuelAntonio.itinerary.2.description"),
    },
    {
      title: t("oneDayTour.manuelAntonio.itinerary.3.title"),
      description: t("oneDayTour.manuelAntonio.itinerary.3.description"),
    }
  ],
  prices: [
    { price: 220, numberOfPeople: 2 },
    { price: 197, numberOfPeople: 4 },
    { price: 172, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const poasVolcano = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/volcan-poas-00007.jpg",
  id: "poasVolcano",
  suggestedTours: ["dinoLand", "arenalLake", "sarchiCity"],
  aproxHours: "7",
  peekLink: t("oneDayTour.poasVolcano.peekLink"),
  title: t("oneDayTour.poasVolcano.title"),
  shortTitle: t("oneDayTour.poasVolcano.shortTitle"),
  // places: [t("oneDayTour.poasVolcano.places.0")],
  daysAndNights: t("oneDayTour.poasVolcano.daysAndNights"),
  description: t("oneDayTour.poasVolcano.description"),
  about: t("oneDayTour.poasVolcano.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/volcan-poas-00007.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/volcan-poas-00002.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/volcan-poas-00006.jpeg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/volcan-poas-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/volcan-poas-00003.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/volcan-poas-00004.jpeg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/volcan-poas-00005.jpeg",
  ],
  includes: [
    t("oneDayTour.poasVolcano.includes.0"),
    t("oneDayTour.poasVolcano.includes.1"),
    t("oneDayTour.poasVolcano.includes.2"),
    t("oneDayTour.poasVolcano.includes.3"),
    t("oneDayTour.poasVolcano.includes.4"),
    t("oneDayTour.poasVolcano.includes.5"),
    t("oneDayTour.poasVolcano.includes.6")
  ],
  itinerary: [
    {
      title: t("oneDayTour.poasVolcano.itinerary.0.title"),
      description: t("oneDayTour.poasVolcano.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.poasVolcano.itinerary.1.title"),
      description: t("oneDayTour.poasVolcano.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.poasVolcano.itinerary.2.title"),
      description: t("oneDayTour.poasVolcano.itinerary.2.description"),
    },
    {
      title: t("oneDayTour.poasVolcano.itinerary.3.title"),
      description: t("oneDayTour.poasVolcano.itinerary.3.description"),
    },
    {
      title: t("oneDayTour.poasVolcano.itinerary.4.title"),
      description: t("oneDayTour.poasVolcano.itinerary.4.description"),
    }
  ],
  prices: [
    { price: 193, numberOfPeople: 2 },
    { price: 179, numberOfPeople: 4 },
    { price: 164, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const caribbeanTour = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00007.jpg",
  id: "caribbeanTour",
  suggestedTours: ["manuelAntonio", "queseraBeach", "whaleWatching"],
  aproxHours: "12 - 14",
  peekLink: t("oneDayTour.caribbeanTour.peekLink"),
  title: t("oneDayTour.caribbeanTour.title"),
  shortTitle: t("oneDayTour.caribbeanTour.shortTitle"),
  // places: [t("oneDayTour.caribbeanTour.places.0")],
  daysAndNights: t("oneDayTour.caribbeanTour.daysAndNights"),
  description: t("oneDayTour.caribbeanTour.description"),
  about: t("oneDayTour.caribbeanTour.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00002.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00004.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00007.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00018.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00009.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00010.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00011.jpg",
  ],
  includes: [
    t("oneDayTour.caribbeanTour.includes.0"),
    t("oneDayTour.caribbeanTour.includes.1"),
    t("oneDayTour.caribbeanTour.includes.2"),
    t("oneDayTour.caribbeanTour.includes.3"),
    t("oneDayTour.caribbeanTour.includes.4"),
    t("oneDayTour.caribbeanTour.includes.5"),
    t("oneDayTour.caribbeanTour.includes.6"),
    t("oneDayTour.caribbeanTour.includes.7"),
  ],
  itinerary: [
    {
      title: t("oneDayTour.caribbeanTour.itinerary.0.title"),
      description: t("oneDayTour.caribbeanTour.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.caribbeanTour.itinerary.1.title"),
      description: t("oneDayTour.caribbeanTour.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.caribbeanTour.itinerary.2.title"),
      description: t("oneDayTour.caribbeanTour.itinerary.2.description"),
    },
    {
      title: t("oneDayTour.caribbeanTour.itinerary.3.title"),
      description: t("oneDayTour.caribbeanTour.itinerary.3.description"),
    },
    {
      title: t("oneDayTour.caribbeanTour.itinerary.4.title"),
      description: t("oneDayTour.caribbeanTour.itinerary.4.description"),
    }
  ],
  prices: [
    { price: 294, numberOfPeople: 2 },
    { price: 206, numberOfPeople: 4 },
    { price: 177, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const queseraBeach = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00009.jpeg",
  id: "queseraBeach",
  suggestedTours: ["manuelAntonio", "whaleWatching", "caribbeanTour"],
  aproxHours: "11 - 13",
  peekLink: t("oneDayTour.queseraBeach.peekLink"),
  title: t("oneDayTour.queseraBeach.title"),
  shortTitle: t("oneDayTour.queseraBeach.shortTitle"),
  // places: [t("oneDayTour.queseraBeach.places.0")],
  daysAndNights: t("oneDayTour.queseraBeach.daysAndNights"),
  description: t("oneDayTour.queseraBeach.description"),
  about: t("oneDayTour.queseraBeach.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00008.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00002.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00006.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00007.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00009.jpeg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00010.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/quesera-beach-00011.jpg",
  ],
  includes: [
    t("oneDayTour.queseraBeach.includes.0"),
    t("oneDayTour.queseraBeach.includes.1"),
    t("oneDayTour.queseraBeach.includes.2"),
    t("oneDayTour.queseraBeach.includes.3"),
    t("oneDayTour.queseraBeach.includes.4"),
    t("oneDayTour.queseraBeach.includes.5"),
    t("oneDayTour.queseraBeach.includes.6"),
    t("oneDayTour.queseraBeach.includes.7"),
    t("oneDayTour.queseraBeach.includes.8"),
    t("oneDayTour.queseraBeach.includes.9"),
  ],
  itinerary: [
    {
      title: t("oneDayTour.queseraBeach.itinerary.0.title"),
      description: t("oneDayTour.queseraBeach.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.queseraBeach.itinerary.1.title"),
      description: t("oneDayTour.queseraBeach.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.queseraBeach.itinerary.2.title"),
      description: t("oneDayTour.queseraBeach.itinerary.2.description"),
    },
    {
      title: t("oneDayTour.queseraBeach.itinerary.3.title"),
      description: t("oneDayTour.queseraBeach.itinerary.3.description"),
    }
  ],
  prices: [
    { price: 309, numberOfPeople: 2 },
    { price: 258, numberOfPeople: 4 },
    { price: 221, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const sarchiCity = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00010.jpg",
  id: "sarchiCity",
  suggestedTours: ["poasVolcano", "blueFalls", "dinoLand"],
  aproxHours: "5 - 6",
  peekLink: t("oneDayTour.sarchiCity.peekLink"),
  title: t("oneDayTour.sarchiCity.title"),
  shortTitle: t("oneDayTour.sarchiCity.shortTitle"),
  // places: [t("oneDayTour.sarchiCity.places.0")],
  daysAndNights: t("oneDayTour.sarchiCity.daysAndNights"),
  description: t("oneDayTour.sarchiCity.description"),
  about: t("oneDayTour.sarchiCity.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00010.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00002.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00003.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00004.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00006.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00008.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/sarchi-city-00009.jpg",
  ],
  includes: [
    t("oneDayTour.sarchiCity.includes.0"),
    t("oneDayTour.sarchiCity.includes.1"),
    t("oneDayTour.sarchiCity.includes.2"),
    t("oneDayTour.sarchiCity.includes.3"),
    t("oneDayTour.sarchiCity.includes.4"),
    t("oneDayTour.sarchiCity.includes.5"),
    t("oneDayTour.sarchiCity.includes.6"),
    t("oneDayTour.sarchiCity.includes.7")
  ],
  itinerary: [
    {
      title: t("oneDayTour.sarchiCity.itinerary.0.title"),
      description: t("oneDayTour.sarchiCity.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.sarchiCity.itinerary.1.title"),
      description: t("oneDayTour.sarchiCity.itinerary.1.description"),
    }
  ],
  prices: [
    { price: 176, numberOfPeople: 2 },
    { price: 156, numberOfPeople: 4 },
    { price: 138, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const santaTeresaSurf = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00011.jpg",
  id: "santaTeresaSurf",
  suggestedTours: ["whaleWatching", "tortugueroCanoe", "queseraBeach"],
  aproxHours: "12 - 14",
  peekLink: t("oneDayTour.santaTeresaSurf.peekLink"),
  title: t("oneDayTour.santaTeresaSurf.title"),
  shortTitle: t("oneDayTour.santaTeresaSurf.shortTitle"),
  // places: [t("oneDayTour.santaTeresaSurf.places.0")],
  daysAndNights: t("oneDayTour.santaTeresaSurf.daysAndNights"),
  description: t("oneDayTour.santaTeresaSurf.description"),
  about: t("oneDayTour.santaTeresaSurf.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00011.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00003.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00004.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00006.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00008.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00009.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00012.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/santa-teresa-surf-00013.jpg",
  ],
  includes: [
    t("oneDayTour.santaTeresaSurf.includes.0"),
    t("oneDayTour.santaTeresaSurf.includes.1"),
    t("oneDayTour.santaTeresaSurf.includes.2"),
    t("oneDayTour.santaTeresaSurf.includes.3"),
    t("oneDayTour.santaTeresaSurf.includes.4"),
    t("oneDayTour.santaTeresaSurf.includes.5"),
    t("oneDayTour.santaTeresaSurf.includes.6"),
    t("oneDayTour.santaTeresaSurf.includes.7"),
    t("oneDayTour.santaTeresaSurf.includes.8")
  ],
  itinerary: [
    {
      title: t("oneDayTour.santaTeresaSurf.itinerary.0.title"),
      description: t("oneDayTour.santaTeresaSurf.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.santaTeresaSurf.itinerary.1.title"),
      description: t("oneDayTour.santaTeresaSurf.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.santaTeresaSurf.itinerary.2.title"),
      description: t("oneDayTour.santaTeresaSurf.itinerary.2.description"),
    }
  ],
  prices: [
    { price: 340, numberOfPeople: 2 },
    { price: 334, numberOfPeople: 4 },
    { price: 293, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const tortugueroCanoe = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00001.jpg",
  id: "tortugueroCanoe",
  suggestedTours: ["whaleWatching", "birdwatching", "manuelAntonio"],
  aproxHours: "8 - 10",
  peekLink: t("oneDayTour.tortugueroCanoe.peekLink"),
  title: t("oneDayTour.tortugueroCanoe.title"),
  shortTitle: t("oneDayTour.tortugueroCanoe.shortTitle"),
  // places: [t("oneDayTour.tortugueroCanoe.places.0")],
  daysAndNights: t("oneDayTour.tortugueroCanoe.daysAndNights"),
  description: t("oneDayTour.tortugueroCanoe.description"),
  about: t("oneDayTour.tortugueroCanoe.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00004.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00003.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00006.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00007.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00002.c.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00008.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/biodiversidad-00009.jpeg"
  ],
  includes: [
    t("oneDayTour.tortugueroCanoe.includes.0"),
    t("oneDayTour.tortugueroCanoe.includes.1"),
    t("oneDayTour.tortugueroCanoe.includes.2"),
    t("oneDayTour.tortugueroCanoe.includes.3"),
    t("oneDayTour.tortugueroCanoe.includes.4"),
    t("oneDayTour.tortugueroCanoe.includes.5"),
    t("oneDayTour.tortugueroCanoe.includes.6"),
    t("oneDayTour.tortugueroCanoe.includes.7"),
    t("oneDayTour.tortugueroCanoe.includes.8")
  ],
  itinerary: [
    {
      title: t("oneDayTour.tortugueroCanoe.itinerary.0.title"),
      description: t("oneDayTour.tortugueroCanoe.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.tortugueroCanoe.itinerary.1.title"),
      description: t("oneDayTour.tortugueroCanoe.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.tortugueroCanoe.itinerary.2.title"),
      description: t("oneDayTour.tortugueroCanoe.itinerary.2.description"),
    },
    {
      title: t("oneDayTour.tortugueroCanoe.itinerary.3.title"),
      description: t("oneDayTour.tortugueroCanoe.itinerary.3.description"),
    },
    {
      title: t("oneDayTour.tortugueroCanoe.itinerary.4.title"),
      description: t("oneDayTour.tortugueroCanoe.itinerary.4.description"),
    }
  ],
  prices: [
    { price: 345, numberOfPeople: 2 },
    { price: 299, numberOfPeople: 4 },
    { price: 276, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const whaleWatching = (t: TFunction): TourType => ({
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00008.jpg",
  id: "whaleWatching",
  suggestedTours: ["birdwatching", "santaTeresaSurf", "tortugueroCanoe"],
  aproxHours: "10 - 12",
  peekLink: t("oneDayTour.whaleWatching.peekLink"),
  title: t("oneDayTour.whaleWatching.title"),
  shortTitle: t("oneDayTour.whaleWatching.shortTitle"),
  // places: [t("oneDayTour.whaleWatching.places.0")],
  daysAndNights: t("oneDayTour.whaleWatching.daysAndNights"),
  description: t("oneDayTour.whaleWatching.description"),
  about: t("oneDayTour.whaleWatching.about"),
  days: 0,
  photos: [
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00001.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00002.jpeg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00003.jpeg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00004.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00005.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00006.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00007.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00008.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00009.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00010.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00011.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00012.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00013.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00014.jpg",
    "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/whale-watching-00015.jpg"
  ],
  includes: [
    t("oneDayTour.whaleWatching.includes.0"),
    t("oneDayTour.whaleWatching.includes.1"),
    t("oneDayTour.whaleWatching.includes.2"),
    t("oneDayTour.whaleWatching.includes.3"),
    t("oneDayTour.whaleWatching.includes.4"),
    t("oneDayTour.whaleWatching.includes.5"),
    t("oneDayTour.whaleWatching.includes.6"),
    t("oneDayTour.whaleWatching.includes.7"),
    t("oneDayTour.whaleWatching.includes.8")
  ],
  itinerary: [
    {
      title: t("oneDayTour.whaleWatching.itinerary.0.title"),
      description: t("oneDayTour.whaleWatching.itinerary.0.description"),
    },
    {
      title: t("oneDayTour.whaleWatching.itinerary.1.title"),
      description: t("oneDayTour.whaleWatching.itinerary.1.description"),
    },
    {
      title: t("oneDayTour.whaleWatching.itinerary.2.title"),
      description: t("oneDayTour.whaleWatching.itinerary.2.description"),
    }
  ],
  prices: [
    { price: 603, numberOfPeople: 2 },
    { price: 413, numberOfPeople: 4 },
    { price: 334, numberOfPeople: 6 }
  ],
  childsPrice: 0,
});

const allOneDayTours = (t: TFunction): Array<TourType> => [
  birdwatching(t),
  blueFalls(t),
  dinoLand(t),
  arenalLake(t),
  manuelAntonio(t),
  poasVolcano(t),
  caribbeanTour(t),
  queseraBeach(t),
  sarchiCity(t),
  santaTeresaSurf(t),
  tortugueroCanoe(t),
  whaleWatching(t)
];

export {
  allOneDayTours,
  birdwatching,
  blueFalls,
  arenalLake,
  manuelAntonio,
  dinoLand,
  poasVolcano,
  caribbeanTour,
  queseraBeach,
  sarchiCity,
  santaTeresaSurf,
  tortugueroCanoe,
  whaleWatching
}