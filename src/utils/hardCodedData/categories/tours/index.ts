import { TFunction } from 'i18next';
import { TourType } from '../../../types';


const wildLife = (t: TFunction): TourType => ({
  id: "wildLife",
  peekLink: t("tours.wildLife.peekLink"),
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/3._vida_silvestre_en_corcovado_y_osa-2_ndct01.jpg",
  title: t("tours.wildLife.title"),
  shortTitle: t("tours.wildLife.shortTitle"),
  places: [t("tours.wildLife.places.0")],
  daysAndNights: t("tours.wildLife.daysAndNights"),
  description: t("tours.wildLife.description"),
  about: t("tours.wildLife.about"),
  days: 8,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/vida-salvaje-00001.jpg",
  ],
  includes: [
    t("tours.wildLife.includes.0"),
    t("tours.wildLife.includes.1"),
    t("tours.wildLife.includes.2"),
    t("tours.wildLife.includes.3"),
    t("tours.wildLife.includes.4"),
    t("tours.wildLife.includes.5"),
    t("tours.wildLife.includes.6"),
    t("tours.wildLife.includes.7"),
    t("tours.wildLife.includes.8"),
    t("tours.wildLife.includes.9"),
    t("tours.wildLife.includes.10"),
    t("tours.wildLife.includes.11"),
    t("tours.wildLife.includes.12"),
    t("tours.wildLife.includes.13"),
    t("tours.wildLife.includes.14"),
    t("tours.wildLife.includes.15"),
  ],
  itinerary: [
    {
      title: t("tours.wildLife.itinerary.0.title"),
      description: t("tours.wildLife.itinerary.0.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.wildLife.itinerary.1.title"),
      description: t("tours.wildLife.itinerary.1.description"),
      hotelName: "Lapa Rios Lodge",
      hotelLink: "https://www.laparios.com/lapa-villas/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.wildLife.itinerary.2.title"),
      description: t("tours.wildLife.itinerary.2.description"),
      hotelName: "Lapa Rios Lodge",
      hotelLink: "https://www.laparios.com/lapa-villas/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.wildLife.itinerary.3.title"),
      description: t("tours.wildLife.itinerary.3.description"),
      hotelName: "Lapa Rios Lodge",
      hotelLink: "https://www.laparios.com/lapa-villas/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.wildLife.itinerary.4.title"),
      description: t("tours.wildLife.itinerary.4.description"),
      hotelName: "Lapa Rios Lodge",
      hotelLink: "https://www.laparios.com/lapa-villas/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.wildLife.itinerary.5.title"),
      description: t("tours.wildLife.itinerary.5.description"),
      hotelName: "Lapa Rios Lodge",
      hotelLink: "https://www.laparios.com/lapa-villas/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.wildLife.itinerary.6.title"),
      description: t("tours.wildLife.itinerary.6.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.wildLife.itinerary.7.title"),
      description: t("tours.wildLife.itinerary.7.description"),
    },
  ],
  prices: [
    { price: 4857, numberOfPeople: 2 },
    { price: 3751, numberOfPeople: 4 },
    { price: 3389, numberOfPeople: 6 }
  ],
  childsPrice: 1525,
});

const followingQuetzal = (t: TFunction): TourType => ({
  id: "followingQuetzal",
  peekLink: t("tours.followingQuetzal.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00001.jpg",
  title: t("tours.followingQuetzal.title"),
  shortTitle: t("tours.followingQuetzal.shortTitle"),
  places: [t("tours.followingQuetzal.places.0")],
  daysAndNights: t("tours.followingQuetzal.daysAndNights"),
  description: t("tours.followingQuetzal.description"),
  about: t("tours.followingQuetzal.about"),
  days: 7,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tras-las-huellas-00001.jpg",
  ],
  includes: [
    t("tours.followingQuetzal.includes.0"),
    t("tours.followingQuetzal.includes.1"),
    t("tours.followingQuetzal.includes.2"),
    t("tours.followingQuetzal.includes.3"),
    t("tours.followingQuetzal.includes.4"),
    t("tours.followingQuetzal.includes.5"),
    t("tours.followingQuetzal.includes.6"),
    t("tours.followingQuetzal.includes.7"),
    t("tours.followingQuetzal.includes.8"),
    t("tours.followingQuetzal.includes.9"),
    t("tours.followingQuetzal.includes.10"),
    t("tours.followingQuetzal.includes.11"),
    t("tours.followingQuetzal.includes.12"),
    t("tours.followingQuetzal.includes.13"),
  ],
  itinerary: [
    {
      title: t("tours.followingQuetzal.itinerary.0.title"),
      description: t("tours.followingQuetzal.itinerary.0.description"),
      hotelName: "Paraíso Quetzal Lodge",
      hotelLink: "https://www.paraisoquetzal.com/en/hotel.php",
      mealsIncluded: t("ourTours.includes.4")
    }, {
      title: t("tours.followingQuetzal.itinerary.1.title"),
      description: t("tours.followingQuetzal.itinerary.1.description"),
      hotelName: "Paraíso Quetzal Lodge",
      hotelLink: "https://www.paraisoquetzal.com/en/hotel.php",
      mealsIncluded: t("ourTours.includes.4")
    }, {
      title: t("tours.followingQuetzal.itinerary.2.title"),
      description: t("tours.followingQuetzal.itinerary.2.description"),
      hotelName: "Paraíso Quetzal Lodge",
      hotelLink: "https://www.paraisoquetzal.com/en/hotel.php",
      mealsIncluded: t("ourTours.includes.4")
    }, {
      title: t("tours.followingQuetzal.itinerary.3.title"),
      description: t("tours.followingQuetzal.itinerary.3.description"),
      hotelName: "Maquenque Ecolodge",
      hotelLink: "https://maquenqueecolodge.com/?gdp=affilired&_affclk=adn%3A3817%3A%3Ae60043b31fa01c3650732bb4f97dd725%3A8002y1",
      mealsIncluded: t("ourTours.includes.4")
    }, {
      title: t("tours.followingQuetzal.itinerary.4.title"),
      description: t("tours.followingQuetzal.itinerary.4.description"),
      hotelName: "Maquenque Ecolodge",
      hotelLink: "https://maquenqueecolodge.com/?gdp=affilired&_affclk=adn%3A3817%3A%3Ae60043b31fa01c3650732bb4f97dd725%3A8002y1",
      mealsIncluded: t("ourTours.includes.4")
    }, {
      title: t("tours.followingQuetzal.itinerary.5.title"),
      description: t("tours.followingQuetzal.itinerary.5.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    }, {
      title: t("tours.followingQuetzal.itinerary.6.title"),
      description: t("tours.followingQuetzal.itinerary.6.description"),
    },
  ],
  prices: [
    { price: 3631, numberOfPeople: 2 },
    { price: 2747, numberOfPeople: 4 },
    { price: 2451, numberOfPeople: 6 },
  ],
  childsPrice: 495,
});

const crocodilesAndBirds = (t: TFunction): TourType => ({
  id: "crocodilesAndBirds",
  peekLink: t("tours.crocodilesAndBirds.peekLink"),
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00001.jpg",
  title: t("tours.crocodilesAndBirds.title"),
  shortTitle: t("tours.crocodilesAndBirds.shortTitle"),
  places: [t("tours.crocodilesAndBirds.places.0"), t("tours.crocodilesAndBirds.places.1")],
  daysAndNights: t("tours.crocodilesAndBirds.daysAndNights"),
  description: t("tours.crocodilesAndBirds.description"),
  about: t("tours.crocodilesAndBirds.about"),
  days: 7,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00001.jpg",

  ],
  includes: [
    t("tours.crocodilesAndBirds.includes.0"),
    t("tours.crocodilesAndBirds.includes.1"),
    t("tours.crocodilesAndBirds.includes.2"),
    t("tours.crocodilesAndBirds.includes.3"),
    t("tours.crocodilesAndBirds.includes.4"),
    t("tours.crocodilesAndBirds.includes.5"),
    t("tours.crocodilesAndBirds.includes.6"),
    t("tours.crocodilesAndBirds.includes.7"),
    t("tours.crocodilesAndBirds.includes.8"),
    t("tours.crocodilesAndBirds.includes.9"),
    t("tours.crocodilesAndBirds.includes.10"),
    t("tours.crocodilesAndBirds.includes.11"),
  ],
  itinerary: [
    {
      title: t("tours.crocodilesAndBirds.itinerary.0.title"),
      description: t("tours.crocodilesAndBirds.itinerary.0.description"),
      hotelName: "InterContinental Costa Rica at Multiplaza Mall",
      hotelLink: "https://www.ihg.com/intercontinental/hotels/us/en/san-jose/sjoha/hoteldetail/rooms?msockid=237b4a4cfd546bc30831582afc4e6a7f",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.crocodilesAndBirds.itinerary.1.title"),
      description: t("tours.crocodilesAndBirds.itinerary.1.description"),
      hotelName: "Rancho Naturalista",
      hotelLink: "https://ranchonaturalista.com/",
      mealsIncluded: t("ourTours.dinnerIncludes")
    },
    {
      title: t("tours.crocodilesAndBirds.itinerary.2.title"),
      description: t("tours.crocodilesAndBirds.itinerary.2.description"),
      hotelName: "Rancho Naturalista",
      hotelLink: "https://ranchonaturalista.com/",
      mealsIncluded: t("ourTours.dinnerIncludes")
    },
    {
      title: t("tours.crocodilesAndBirds.itinerary.3.title"),
      description: t("tours.crocodilesAndBirds.itinerary.3.description"),
      hotelName: "Rancho Naturalista",
      hotelLink: "https://ranchonaturalista.com/",
      mealsIncluded: t("ourTours.dinnerIncludes")
    },
    {
      title: t("tours.crocodilesAndBirds.itinerary.4.title"),
      description: t("tours.crocodilesAndBirds.itinerary.4.description"),
      hotelName: "InterContinental Costa Rica at Multiplaza Mall",
      hotelLink: "https://www.ihg.com/intercontinental/hotels/us/en/san-jose/sjoha/hoteldetail/rooms?msockid=237b4a4cfd546bc30831582afc4e6a7f",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.crocodilesAndBirds.itinerary.5.title"),
      description: t("tours.crocodilesAndBirds.itinerary.5.description"),
      hotelName: "InterContinental Costa Rica at Multiplaza Mall",
      hotelLink: "https://www.ihg.com/intercontinental/hotels/us/en/san-jose/sjoha/hoteldetail/rooms?msockid=237b4a4cfd546bc30831582afc4e6a7f",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.crocodilesAndBirds.itinerary.6.title"),
      description: t("tours.crocodilesAndBirds.itinerary.6.description")
    },
  ],
  prices: [
    { price: 3492, numberOfPeople: 2 },
    { price: 2680, numberOfPeople: 4 },
    { price: 2415, numberOfPeople: 6 },
  ],
  childsPrice: 460,
});

const sportFishing = (t: TFunction): TourType => ({
  id: "sportFishing",
  peekLink: t("tours.sportFishing.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00011.jpg",
  title: t("tours.sportFishing.title"),
  shortTitle: t("tours.sportFishing.shortTitle"),
  places: [t("tours.sportFishing.places.0")],
  daysAndNights: t("tours.sportFishing.daysAndNights"),
  description: t("tours.sportFishing.description"),
  about: t("tours.sportFishing.about"),
  days: 7,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/pesca-deportiva-00001.jpg",
  ],
  includes: [
    t("tours.sportFishing.includes.0"),
    t("tours.sportFishing.includes.1"),
    t("tours.sportFishing.includes.2"),
    t("tours.sportFishing.includes.3"),
    t("tours.sportFishing.includes.4"),
    t("tours.sportFishing.includes.5"),
    t("tours.sportFishing.includes.6"),
    t("tours.sportFishing.includes.7"),
    t("tours.sportFishing.includes.8"),
    t("tours.sportFishing.includes.9"),
    t("tours.sportFishing.includes.10"),
    t("tours.sportFishing.includes.11"),
    t("tours.sportFishing.includes.12"),
    t("tours.sportFishing.includes.13"),
    t("tours.sportFishing.includes.14"),
  ],
  itinerary: [
    {
      title: t("tours.sportFishing.itinerary.0.title"),
      description: t("tours.sportFishing.itinerary.0.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sportFishing.itinerary.1.title"),
      description: t("tours.sportFishing.itinerary.1.description"),
      hotelName: "Parador Nature Resort and Spa",
      hotelLink: "https://hotelparador.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sportFishing.itinerary.2.title"),
      description: t("tours.sportFishing.itinerary.2.description"),
      hotelName: "Parador Nature Resort and Spa",
      hotelLink: "https://hotelparador.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sportFishing.itinerary.3.title"),
      description: t("tours.sportFishing.itinerary.3.description"),
      hotelName: "Parador Nature Resort and Spa",
      hotelLink: "https://hotelparador.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sportFishing.itinerary.4.title"),
      description: t("tours.sportFishing.itinerary.4.description"),
      hotelName: "Parador Nature Resort and Spa",
      hotelLink: "https://hotelparador.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sportFishing.itinerary.5.title"),
      description: t("tours.sportFishing.itinerary.5.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel ",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sportFishing.itinerary.6.title"),
      description: t("tours.sportFishing.itinerary.6.description")
    },
  ],
  prices: [
    { price: 4939, numberOfPeople: 2 },
    { price: 3251, numberOfPeople: 4 },
    { price: 2728, numberOfPeople: 6 },
  ],
  childsPrice: 869,
});

const ecoExplor = (t: TFunction): TourType => ({
  id: "ecoExplor",
  peekLink: t("tours.ecoExplor.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00001.jpg",
  title: t("tours.ecoExplor.title"),
  shortTitle: t("tours.ecoExplor.shortTitle"),
  places: [t("tours.ecoExplor.places.0")],
  daysAndNights: t("tours.ecoExplor.daysAndNights"),
  description: t("tours.ecoExplor.description"),
  about: t("tours.ecoExplor.about"),
  days: 9,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00001.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/eco-explora-00002.jpg",
  ],
  includes: [
    t("tours.ecoExplor.includes.0"),
    t("tours.ecoExplor.includes.1"),
    t("tours.ecoExplor.includes.2"),
    t("tours.ecoExplor.includes.3"),
    t("tours.ecoExplor.includes.4"),
    t("tours.ecoExplor.includes.5"),
    t("tours.ecoExplor.includes.6"),
    t("tours.ecoExplor.includes.7"),
    t("tours.ecoExplor.includes.8"),
    t("tours.ecoExplor.includes.9"),
    t("tours.ecoExplor.includes.10"),
    t("tours.ecoExplor.includes.11"),
    t("tours.ecoExplor.includes.12"),
    t("tours.ecoExplor.includes.13"),
  ],
  itinerary: [
    {
      title: t("tours.ecoExplor.itinerary.0.title"),
      description: t("tours.ecoExplor.itinerary.0.description"),
      hotelName: "Pacuare Lodge",
      hotelLink: "https://www.pacuarelodge.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.ecoExplor.itinerary.1.title"),
      description: t("tours.ecoExplor.itinerary.1.description"),
      hotelName: "Pacuare Lodge",
      hotelLink: "https://www.pacuarelodge.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.ecoExplor.itinerary.2.title"),
      description: t("tours.ecoExplor.itinerary.2.description"),
      hotelName: "Baldi Hot Springs",
      hotelLink: "https://baldihotsprings.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.ecoExplor.itinerary.3.title"),
      description: t("tours.ecoExplor.itinerary.3.description"),
      hotelName: "Baldi Hot Springs",
      hotelLink: "https://baldihotsprings.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.ecoExplor.itinerary.4.title"),
      description: t("tours.ecoExplor.itinerary.4.description"),
      hotelName: "Baldi Hot Springs",
      hotelLink: "https://baldihotsprings.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.ecoExplor.itinerary.5.title"),
      description: t("tours.ecoExplor.itinerary.5.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.ecoExplor.itinerary.6.title"),
      description: t("tours.ecoExplor.itinerary.6.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.ecoExplor.itinerary.7.title"),
      description: t("tours.ecoExplor.itinerary.7.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.ecoExplor.itinerary.8.title"),
      description: t("tours.ecoExplor.itinerary.8.description")
    },
  ],
  prices: [
    { price: 4938, numberOfPeople: 2 },
    { price: 3832, numberOfPeople: 4 },
    { price: 3477, numberOfPeople: 6 },
  ],
  childsPrice: 910,
});

const sunAndSand = (t: TFunction): TourType => ({
  id: "sunAndSand",
  peekLink: t("tours.sunAndSand.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00001.jpg",
  title: t("tours.sunAndSand.title"),
  shortTitle: t("tours.sunAndSand.shortTitle"),
  places: [t("tours.sunAndSand.places.0")],
  daysAndNights: t("tours.sunAndSand.daysAndNights"),
  description: t("tours.sunAndSand.description"),
  about: t("tours.sunAndSand.about"),
  days: 8,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00001.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/sol-y-arena00002.jpg",
  ],
  includes: [
    t("tours.sunAndSand.includes.0"),
    t("tours.sunAndSand.includes.1"),
    t("tours.sunAndSand.includes.2"),
    t("tours.sunAndSand.includes.3"),
    t("tours.sunAndSand.includes.4"),
    t("tours.sunAndSand.includes.5"),
    t("tours.sunAndSand.includes.6"),
    t("tours.sunAndSand.includes.7"),
    t("tours.sunAndSand.includes.8"),
    t("tours.sunAndSand.includes.9"),
    t("tours.sunAndSand.includes.10"),
    t("tours.sunAndSand.includes.11"),
    t("tours.sunAndSand.includes.12"),
  ],
  itinerary: [
    {
      title: t("tours.sunAndSand.itinerary.0.title"),
      description: t("tours.sunAndSand.itinerary.0.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sunAndSand.itinerary.1.title"),
      description: t("tours.sunAndSand.itinerary.1.description"),
      hotelName: "Occidental Tamarindo - All Inclusive",
      hotelLink: "https://www.barcelo.com/en-us/occidental-tamarindo/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sunAndSand.itinerary.2.title"),
      description: t("tours.sunAndSand.itinerary.2.description"),
      hotelName: "Occidental Tamarindo - All Inclusive",
      hotelLink: "https://www.barcelo.com/en-us/occidental-tamarindo/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sunAndSand.itinerary.3.title"),
      description: t("tours.sunAndSand.itinerary.3.description"),
      hotelName: "The Green House",
      hotelLink: "https://www.thegreenhouse.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sunAndSand.itinerary.4.title"),
      description: t("tours.sunAndSand.itinerary.4.description"),
      hotelName: "The Green House",
      hotelLink: "https://www.thegreenhouse.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sunAndSand.itinerary.5.title"),
      description: t("tours.sunAndSand.itinerary.5.description"),
      hotelName: "The Green House",
      hotelLink: "https://www.thegreenhouse.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sunAndSand.itinerary.6.title"),
      description: t("tours.sunAndSand.itinerary.6.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.sunAndSand.itinerary.7.title"),
      description: t("tours.sunAndSand.itinerary.7.description")
    },
  ],
  prices: [
    { price: 4308, numberOfPeople: 2 },
    { price: 3133, numberOfPeople: 4 },
    { price: 2819, numberOfPeople: 6 },
  ],
  childsPrice: 696,
});

const manuelAntonio = (t: TFunction): TourType => ({
  id: "manuelAntonio",
  peekLink: t("tours.manuelAntonio.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00005.jpg",
  title: t("tours.manuelAntonio.title"),
  shortTitle: t("tours.manuelAntonio.shortTitle"),
  places: [t("tours.manuelAntonio.places.0")],
  daysAndNights: t("tours.manuelAntonio.daysAndNights"),
  description: t("tours.manuelAntonio.description"),
  about: t("tours.manuelAntonio.about"),
  days: 6,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/manuel-antonio-00001.jpg",
  ],
  includes: [
    t("tours.manuelAntonio.includes.0"),
    t("tours.manuelAntonio.includes.1"),
    t("tours.manuelAntonio.includes.2"),
    t("tours.manuelAntonio.includes.3"),
    t("tours.manuelAntonio.includes.4"),
    t("tours.manuelAntonio.includes.5"),
    t("tours.manuelAntonio.includes.6"),
    t("tours.manuelAntonio.includes.7"),
    t("tours.manuelAntonio.includes.8"),
    t("tours.manuelAntonio.includes.9"),
    t("tours.manuelAntonio.includes.10"),
    t("tours.manuelAntonio.includes.11"),
    t("tours.manuelAntonio.includes.12"),
    t("tours.manuelAntonio.includes.13"),
  ],
  itinerary: [
    {
      title: t("tours.manuelAntonio.itinerary.0.title"),
      description: t("tours.manuelAntonio.itinerary.0.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.manuelAntonio.itinerary.1.title"),
      description: t("tours.manuelAntonio.itinerary.1.description"),
      hotelName: "Parador Nature Resort and Spa",
      hotelLink: "https://hotelparador.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.manuelAntonio.itinerary.2.title"),
      description: t("tours.manuelAntonio.itinerary.2.description"),
      hotelName: "Parador Nature Resort and Spa",
      hotelLink: "https://hotelparador.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.manuelAntonio.itinerary.3.title"),
      description: t("tours.manuelAntonio.itinerary.3.description"),
      hotelName: "Parador Nature Resort and Spa",
      hotelLink: "https://hotelparador.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.manuelAntonio.itinerary.4.title"),
      description: t("tours.manuelAntonio.itinerary.4.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.manuelAntonio.itinerary.5.title"),
      description: t("tours.manuelAntonio.itinerary.5.description")
    },
  ],
  prices: [
    { price: 2968, numberOfPeople: 2 },
    { price: 2259, numberOfPeople: 4 },
    { price: 2024, numberOfPeople: 6 },
  ],
  childsPrice: 420,
});

const turtlesAndWhales = (t: TFunction): TourType => ({
  id: "turtlesAndWhales",
  peekLink: t("tours.turtlesAndWhales.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00001.jpg",
  title: t("tours.turtlesAndWhales.title"),
  shortTitle: t("tours.turtlesAndWhales.shortTitle"),
  places: [t("tours.turtlesAndWhales.places.0"), t("tours.turtlesAndWhales.places.1")],
  daysAndNights: t("tours.turtlesAndWhales.daysAndNights"),
  description: t("tours.turtlesAndWhales.description"),
  about: t("tours.turtlesAndWhales.about"),
  days: 7,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00001.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tortugas-y-ballenas00002.jpg",
  ],
  includes: [
    t("tours.turtlesAndWhales.includes.0"),
    t("tours.turtlesAndWhales.includes.1"),
    t("tours.turtlesAndWhales.includes.2"),
    t("tours.turtlesAndWhales.includes.3"),
    t("tours.turtlesAndWhales.includes.4"),
    t("tours.turtlesAndWhales.includes.5"),
    t("tours.turtlesAndWhales.includes.6"),
    t("tours.turtlesAndWhales.includes.7"),
    t("tours.turtlesAndWhales.includes.8"),
    t("tours.turtlesAndWhales.includes.9"),
    t("tours.turtlesAndWhales.includes.10"),
    t("tours.turtlesAndWhales.includes.11"),
    t("tours.turtlesAndWhales.includes.12"),
    t("tours.turtlesAndWhales.includes.13"),
    t("tours.turtlesAndWhales.includes.14"),
    t("tours.turtlesAndWhales.includes.15"),
  ],
  itinerary: [
    {
      title: t("tours.turtlesAndWhales.itinerary.0.title"),
      description: t("tours.turtlesAndWhales.itinerary.0.description"),
      hotelName: "Aninga Lodge",
      hotelLink: "https://www.aningalodgetortuguero.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.turtlesAndWhales.itinerary.1.title"),
      description: t("tours.turtlesAndWhales.itinerary.1.description"),
      hotelName: "Aninga Lodge",
      hotelLink: "https://www.aningalodgetortuguero.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.turtlesAndWhales.itinerary.2.title"),
      description: t("tours.turtlesAndWhales.itinerary.2.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.turtlesAndWhales.itinerary.3.title"),
      description: t("tours.turtlesAndWhales.itinerary.3.description"),
      hotelName: "La Cusinga Lodge",
      hotelLink: "https://www.lacusingalodge.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.turtlesAndWhales.itinerary.4.title"),
      description: t("tours.turtlesAndWhales.itinerary.4.description"),
      hotelName: "La Cusinga Lodge",
      hotelLink: "https://www.lacusingalodge.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.turtlesAndWhales.itinerary.5.title"),
      description: t("tours.turtlesAndWhales.itinerary.5.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.turtlesAndWhales.itinerary.6.title"),
      description: t("tours.turtlesAndWhales.itinerary.6.description")
    },
  ],
  prices: [
    { price: 3355, numberOfPeople: 2 },
    { price: 2502, numberOfPeople: 4 },
    { price: 2213, numberOfPeople: 6 },
  ],
  childsPrice: 389,
});

const volcanoes = (t: TFunction): TourType => ({
  id: "volcanoes",
  peekLink: t("tours.volcanoes.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00010.jpg",
  title: t("tours.volcanoes.title"),
  shortTitle: t("tours.volcanoes.shortTitle"),
  places: [t("tours.volcanoes.places.0")],
  daysAndNights: t("tours.volcanoes.daysAndNights"),
  description: t("tours.volcanoes.description"),
  about: t("tours.volcanoes.about"),
  days: 8,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/volcanes00001.jpg",
  ],
  includes: [
    t("tours.volcanoes.includes.0"),
    t("tours.volcanoes.includes.1"),
    t("tours.volcanoes.includes.2"),
    t("tours.volcanoes.includes.3"),
    t("tours.volcanoes.includes.4"),
    t("tours.volcanoes.includes.5"),
    t("tours.volcanoes.includes.6"),
    t("tours.volcanoes.includes.7"),
    t("tours.volcanoes.includes.8"),
    t("tours.volcanoes.includes.9"),
    t("tours.volcanoes.includes.10"),
    t("tours.volcanoes.includes.11"),
    t("tours.volcanoes.includes.12"),
    t("tours.volcanoes.includes.13"),
  ],
  itinerary: [
    {
      title: t("tours.volcanoes.itinerary.0.title"),
      description: t("tours.volcanoes.itinerary.0.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.volcanoes.itinerary.1.title"),
      description: t("tours.volcanoes.itinerary.1.description"),
      hotelName: "Casas del Toro",
      hotelLink: "https://www.casasdeltoro.com/monteverde",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.volcanoes.itinerary.2.title"),
      description: t("tours.volcanoes.itinerary.2.description"),
      hotelName: "Casas del Toro",
      hotelLink: "https://www.casasdeltoro.com/monteverde",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.volcanoes.itinerary.3.title"),
      description: t("tours.volcanoes.itinerary.3.description"),
      hotelName: "Baldi Hot Springs",
      hotelLink: "https://baldihotsprings.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.volcanoes.itinerary.4.title"),
      description: t("tours.volcanoes.itinerary.4.description"),
      hotelName: "Baldi Hot Springs",
      hotelLink: "https://baldihotsprings.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.volcanoes.itinerary.5.title"),
      description: t("tours.volcanoes.itinerary.5.description"),
      hotelName: "Baldi Hot Springs",
      hotelLink: "https://baldihotsprings.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.volcanoes.itinerary.6.title"),
      description: t("tours.volcanoes.itinerary.6.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.volcanoes.itinerary.7.title"),
      description: t("tours.volcanoes.itinerary.7.description")
    },
  ],
  prices: [
    { price: 4263, numberOfPeople: 2 },
    { price: 3282, numberOfPeople: 4 },
    { price: 2987, numberOfPeople: 6 },
  ],
  childsPrice: 667,
});

const southCaribean = (t: TFunction): TourType => ({
  id: "southCaribean",
  peekLink: t("tours.southCaribean.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00001.jpg",
  title: t("tours.southCaribean.title"),
  shortTitle: t("tours.southCaribean.shortTitle"),
  places: [t("tours.southCaribean.places.0")],
  daysAndNights: t("tours.southCaribean.daysAndNights"),
  description: t("tours.southCaribean.description"),
  about: t("tours.southCaribean.about"),
  days: 7,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribean-00001.jpg",
  ],
  includes: [
    t("tours.southCaribean.includes.0"),
    t("tours.southCaribean.includes.1"),
    t("tours.southCaribean.includes.2"),
    t("tours.southCaribean.includes.3"),
    t("tours.southCaribean.includes.4"),
    t("tours.southCaribean.includes.5"),
    t("tours.southCaribean.includes.6"),
    t("tours.southCaribean.includes.7"),
    t("tours.southCaribean.includes.8"),
    t("tours.southCaribean.includes.9"),
    t("tours.southCaribean.includes.10"),
    t("tours.southCaribean.includes.11"),
    t("tours.southCaribean.includes.12"),
    t("tours.southCaribean.includes.13"),
    t("tours.southCaribean.includes.14"),
    t("tours.southCaribean.includes.15"),
    t("tours.southCaribean.includes.16"),
    t("tours.southCaribean.includes.17"),
  ],
  itinerary: [
    {
      title: t("tours.southCaribean.itinerary.0.title"),
      description: t("tours.southCaribean.itinerary.0.description"),
      hotelName: "Hotel Grano de Oro",
      hotelLink: "https://www.hotelgranodeoro.com/index.html",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.southCaribean.itinerary.1.title"),
      description: t("tours.southCaribean.itinerary.1.description"),
      hotelName: "Hotel Aguas Claras",
      hotelLink: "https://hotelaguasclaras.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.southCaribean.itinerary.2.title"),
      description: t("tours.southCaribean.itinerary.2.description"),
      hotelName: "Hotel Aguas Claras",
      hotelLink: "https://hotelaguasclaras.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.southCaribean.itinerary.3.title"),
      description: t("tours.southCaribean.itinerary.3.description"),
      hotelName: "Hotel Aguas Claras",
      hotelLink: "https://hotelaguasclaras.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.southCaribean.itinerary.4.title"),
      description: t("tours.southCaribean.itinerary.4.description"),
      hotelName: "Aninga Lodge",
      hotelLink: "https://www.aningalodgetortuguero.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.southCaribean.itinerary.5.title"),
      description: t("tours.southCaribean.itinerary.5.description"),
      hotelName: "Hotel Grano de Oro",
      hotelLink: "https://www.hotelgranodeoro.com/index.html",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.southCaribean.itinerary.6.title"),
      description: t("tours.southCaribean.itinerary.6.description")
    },
  ],
  prices: [
    { price: 3344, numberOfPeople: 2 },
    { price: 2499, numberOfPeople: 4 },
    { price: 2126, numberOfPeople: 6 },
  ],
  childsPrice: 423,
});

const tropicalTranquility = (t: TFunction): TourType => ({
  id: "tropicalTranquility",
  peekLink: t("tours.tropicalTranquility.peekLink"),
  img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/13._tranquilidad_tropical_portada_qseneu.jpg",
  title: t("tours.tropicalTranquility.title"),
  shortTitle: t("tours.tropicalTranquility.shortTitle"),
  places: [t("tours.tropicalTranquility.places.0")],
  daysAndNights: t("tours.tropicalTranquility.daysAndNights"),
  description: t("tours.tropicalTranquility.description"),
  about: t("tours.tropicalTranquility.about"),
  days: 8,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/tranquilidad-00001.jpg",
  ],
  includes: [
    t("tours.tropicalTranquility.includes.0"),
    t("tours.tropicalTranquility.includes.1"),
    t("tours.tropicalTranquility.includes.2"),
    t("tours.tropicalTranquility.includes.3"),
    t("tours.tropicalTranquility.includes.4"),
    t("tours.tropicalTranquility.includes.5"),
    t("tours.tropicalTranquility.includes.6"),
    t("tours.tropicalTranquility.includes.7"),
    t("tours.tropicalTranquility.includes.8"),
    t("tours.tropicalTranquility.includes.9"),
    t("tours.tropicalTranquility.includes.10"),
    t("tours.tropicalTranquility.includes.11"),
    t("tours.tropicalTranquility.includes.12"),
    t("tours.tropicalTranquility.includes.13"),
  ],
  itinerary: [
    {
      title: t("tours.tropicalTranquility.itinerary.0.title"),
      description: t("tours.tropicalTranquility.itinerary.0.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.tropicalTranquility.itinerary.1.title"),
      description: t("tours.tropicalTranquility.itinerary.1.description"),
      hotelName: "Tabacón Grand Spa Thermal Resort",
      hotelLink: "https://www.tabacon.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.tropicalTranquility.itinerary.2.title"),
      description: t("tours.tropicalTranquility.itinerary.2.description"),
      hotelName: "Tabacón Grand Spa Thermal Resort",
      hotelLink: "https://www.tabacon.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.tropicalTranquility.itinerary.3.title"),
      description: t("tours.tropicalTranquility.itinerary.3.description"),
      hotelName: "Tabacón Grand Spa Thermal Resort",
      hotelLink: "https://www.tabacon.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.tropicalTranquility.itinerary.4.title"),
      description: t("tours.tropicalTranquility.itinerary.4.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.tropicalTranquility.itinerary.5.title"),
      description: t("tours.tropicalTranquility.itinerary.5.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.tropicalTranquility.itinerary.6.title"),
      description: t("tours.tropicalTranquility.itinerary.6.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.tropicalTranquility.itinerary.7.title"),
      description: t("tours.tropicalTranquility.itinerary.7.description")
    },
  ],
  prices: [
    { price: 4417, numberOfPeople: 2 },
    { price: 3436, numberOfPeople: 4 },
    { price: 3121, numberOfPeople: 6 },
  ],
  childsPrice: 641,
});

const secretsOfCostaRica = (t: TFunction): TourType => ({
  id: "secretsOfCostaRica",
  peekLink: t("tours.secretsOfCostaRica.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00013.jpg",
  title: t("tours.secretsOfCostaRica.title"),
  shortTitle: t("tours.secretsOfCostaRica.shortTitle"),
  places: [t("tours.secretsOfCostaRica.places.0")],
  daysAndNights: t("tours.secretsOfCostaRica.daysAndNights"),
  description: t("tours.secretsOfCostaRica.description"),
  about: t("tours.secretsOfCostaRica.about"),
  days: 8,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00001.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/destinos-secretos-00016.jpg",
  ],
  includes: [
    t("tours.secretsOfCostaRica.includes.0"),
    t("tours.secretsOfCostaRica.includes.1"),
    t("tours.secretsOfCostaRica.includes.2"),
    t("tours.secretsOfCostaRica.includes.3"),
    t("tours.secretsOfCostaRica.includes.4"),
    t("tours.secretsOfCostaRica.includes.5"),
    t("tours.secretsOfCostaRica.includes.6"),
    t("tours.secretsOfCostaRica.includes.7"),
    t("tours.secretsOfCostaRica.includes.8"),
    t("tours.secretsOfCostaRica.includes.9"),
    t("tours.secretsOfCostaRica.includes.10"),
    t("tours.secretsOfCostaRica.includes.11"),
    t("tours.secretsOfCostaRica.includes.12"),
    t("tours.secretsOfCostaRica.includes.13"),
    t("tours.secretsOfCostaRica.includes.14"),
  ],
  itinerary: [
    {
      title: t("tours.secretsOfCostaRica.itinerary.0.title"),
      description: t("tours.secretsOfCostaRica.itinerary.0.description"),
      hotelName: "InterContinental Costa Rica at Multiplaza Mall",
      hotelLink: "https://www.ihg.com/intercontinental/hotels/us/en/san-jose/sjoha/hoteldetail/rooms?msockid=237b4a4cfd546bc30831582afc4e6a7f",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.secretsOfCostaRica.itinerary.1.title"),
      description: t("tours.secretsOfCostaRica.itinerary.1.description"),
      hotelName: "InterContinental Costa Rica at Multiplaza Mall",
      hotelLink: "https://www.ihg.com/intercontinental/hotels/us/en/san-jose/sjoha/hoteldetail/rooms?msockid=237b4a4cfd546bc30831582afc4e6a7f",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.secretsOfCostaRica.itinerary.2.title"),
      description: t("tours.secretsOfCostaRica.itinerary.2.description"),
      hotelName: "El Silencio Lodge & Spa",
      hotelLink: "https://www.elsilenciolodge.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.secretsOfCostaRica.itinerary.3.title"),
      description: t("tours.secretsOfCostaRica.itinerary.3.description"),
      hotelName: "El Silencio Lodge & Spa",
      hotelLink: "https://www.elsilenciolodge.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.secretsOfCostaRica.itinerary.4.title"),
      description: t("tours.secretsOfCostaRica.itinerary.4.description"),
      hotelName: "Hotel Cayuga",
      hotelLink: "https://hotelcayuga.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.secretsOfCostaRica.itinerary.5.title"),
      description: t("tours.secretsOfCostaRica.itinerary.5.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.secretsOfCostaRica.itinerary.6.title"),
      description: t("tours.secretsOfCostaRica.itinerary.6.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.secretsOfCostaRica.itinerary.7.title"),
      description: t("tours.secretsOfCostaRica.itinerary.7.description")
    },

  ],
  prices: [
    { price: 4153, numberOfPeople: 2 },
    { price: 3192, numberOfPeople: 4 },
    { price: 2887, numberOfPeople: 6 },
  ],
  childsPrice: 400,
});

const mostPopularInCostaRica = (t: TFunction): TourType => ({
  id: "mostPopularInCostaRica",
  peekLink: t("tours.mostPopularInCostaRica.peekLink"),
  img: "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00016.jpg",
  title: t("tours.mostPopularInCostaRica.title"),
  shortTitle: t("tours.mostPopularInCostaRica.shortTitle"),
  places: [t("tours.mostPopularInCostaRica.places.0"), t("tours.mostPopularInCostaRica.places.1"), t("tours.mostPopularInCostaRica.places.2")],
  daysAndNights: t("tours.mostPopularInCostaRica.daysAndNights"),
  description: t("tours.mostPopularInCostaRica.description"),
  about: t("tours.mostPopularInCostaRica.about"),
  days: 17,
  photos: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00016.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00018.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00017.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00015.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00014.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00013.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/10-destinos-00001.jpg",
  ],
  includes: [
    t("tours.mostPopularInCostaRica.includes.0"),
    t("tours.mostPopularInCostaRica.includes.1"),
    t("tours.mostPopularInCostaRica.includes.2"),
    t("tours.mostPopularInCostaRica.includes.3"),
    t("tours.mostPopularInCostaRica.includes.4"),
    t("tours.mostPopularInCostaRica.includes.5"),
    t("tours.mostPopularInCostaRica.includes.6"),
    t("tours.mostPopularInCostaRica.includes.7"),
    t("tours.mostPopularInCostaRica.includes.8"),
    t("tours.mostPopularInCostaRica.includes.9"),
    t("tours.mostPopularInCostaRica.includes.10"),
    t("tours.mostPopularInCostaRica.includes.11"),
    t("tours.mostPopularInCostaRica.includes.12"),
    t("tours.mostPopularInCostaRica.includes.13"),
  ],
  itinerary: [
    {
      title: t("tours.mostPopularInCostaRica.itinerary.0.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.0.description"),
      hotelName: "InterContinental Costa Rica at Multiplaza Mall",
      hotelLink: "https://www.ihg.com/intercontinental/hotels/us/en/san-jose/sjoha/hoteldetail/rooms?msockid=237b4a4cfd546bc30831582afc4e6a7f",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.1.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.1.description"),
      hotelName: "Hotel Aguas Claras",
      hotelLink: "https://hotelaguasclaras.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.2.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.2.description"),
      hotelName: "Hotel Aguas Claras",
      hotelLink: "https://hotelaguasclaras.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.3.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.3.description"),
      hotelName: "Aninga Lodge",
      hotelLink: "https://www.aningalodgetortuguero.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.4.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.4.description"),
      hotelName: "Aninga Lodge",
      hotelLink: "https://www.aningalodgetortuguero.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.5.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.5.description"),
      hotelName: "Tabacón Grand Spa Thermal Resort",
      hotelLink: "https://www.tabacon.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.6.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.6.description"),
      hotelName: "Tabacón Grand Spa Thermal Resort",
      hotelLink: "https://www.tabacon.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.7.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.7.description"),
      hotelName: "Tabacón Grand Spa Thermal Resort",
      hotelLink: "https://www.tabacon.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.8.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.8.description"),
      hotelName: "Casas del Toro",
      hotelLink: "https://www.casasdeltoro.com/monteverde",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.9.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.9.description"),
      hotelName: "Casas del Toro",
      hotelLink: "https://www.casasdeltoro.com/monteverde",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.10.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.10.description"),
      hotelName: "Hotel Cayuga",
      hotelLink: "https://hotelcayuga.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.11.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.11.description"),
      hotelName: "Hotel Cayuga",
      hotelLink: "https://hotelcayuga.com/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.12.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.12.description"),
      hotelName: "The Green House",
      hotelLink: "https://www.thegreenhouse.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.13.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.13.description"),
      hotelName: "The Green House",
      hotelLink: "https://www.thegreenhouse.cr/",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.14.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.14.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.15.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.15.description"),
      hotelName: "Holiday Inn Express San Jose Costa Rica Airport Hotel",
      hotelLink: "https://www.ihg.com/holidayinnexpress/hotels/us/es/san-jose/sjoap/hoteldetail/rooms?fromRedirect=true&qSrt=sBR&qDest=San%20Jose,%20Costa%20Rica&setPMCookies=true&dp=true&showApp=false&cm_mmc=PDSEA-_-M_F-AMER_FS-MLAC_H-AMER_HS-CRI_EX_BSF_EXM_HOTEL-SJOIN_ES&msclkid=1062d53645c51374b06bbd319a649944&srb_u=1&qRad=30&qRdU=mi",
      mealsIncluded: t("ourTours.includes.4")
    },
    {
      title: t("tours.mostPopularInCostaRica.itinerary.16.title"),
      description: t("tours.mostPopularInCostaRica.itinerary.16.description")
    },
  ],
  prices: [
    { price: 8857, numberOfPeople: 2 },
    { price: 6727, numberOfPeople: 4 },
    { price: 6134, numberOfPeople: 6 },
  ],
  childsPrice: 1040,
});

const allTours = (t: TFunction): Array<TourType> => [
  followingQuetzal(t),
  sunAndSand(t),
  manuelAntonio(t),
  volcanoes(t),
  wildLife(t),
  crocodilesAndBirds(t),
  secretsOfCostaRica(t),
  mostPopularInCostaRica(t),
  sportFishing(t),
  ecoExplor(t),
  southCaribean(t),
  turtlesAndWhales(t),
  tropicalTranquility(t),
];

export {
  allTours,
  wildLife,
  followingQuetzal,
  crocodilesAndBirds,
  secretsOfCostaRica,
  mostPopularInCostaRica,
  sportFishing,
  ecoExplor,
  sunAndSand,
  manuelAntonio,
  turtlesAndWhales,
  volcanoes,
  southCaribean,
  tropicalTranquility,
};