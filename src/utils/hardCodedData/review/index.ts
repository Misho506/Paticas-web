import { ReviewType } from "../../types";

function generateRandomDate() {
  const today = new Date();
  const lastYear = new Date();
  lastYear.setFullYear(today.getFullYear() - 1);

  const randomTime = lastYear.getTime() + Math.random() * (today.getTime() - lastYear.getTime());
  return new Date(randomTime);
}

const ReviewsHardCoded: Array<ReviewType> = [
  {
    userName: "Diego Gardella",
    details: "Viajar con Paticas fue una experiencia inolvidable. Su equipo profesional y amable nos llevó a lugares hermosos, brindándonos una atención excelente y tours que cumplieron con todas nuestras expectativas. Además, nos sentimos seguros en todo momento. Recomiendo viajar con Paticas para disfrutar de Costa Rica con comodidad, emoción y seguridad.",
    from: "Perú",
    date: generateRandomDate()
  },
  {
    userName: "Anii Garbur",
    details: "Gracias a Paticas Pa'que las Quiero por el trato amigable. Empresa 💯% recomendada, responsables, honestos y confiables. Los llevamos en el corazón, saben que en México tienen unos amigos que los aprecian y esperan con los brazos abiertos. Esperamos regresar muy pronto 🙏.",
    from: "México",
    date: generateRandomDate()
  },
  {
    userName: "Mario Bautista Narvaez",
    details: "Muchas gracias, todo estuvo excelente. Somos turistas de México y fue muy agradable y formal todo el viaje gracias a Paticas Pa'que las Quiero. Especial agradecimiento a Karla Calderón por sus atenciones y buen trato.",
    from: "México",
    date: generateRandomDate()
  },
  {
    userName: "Charlie Trinidad",
    details: "This is my third trip with Paticas, I very much recommend them. Everything is very on time, very clean. Book as soon as you can.",
    from: "Curaçao",
    date: generateRandomDate()
  },
  {
    userName: "Mariano Menendez",
    details: "Estamos con Paticas, una empresa de turismo de Karla, Yorlene y Yoely que nos están haciendo conocer Costa Rica de una forma diferente a la tradicional.",
    from: "Argentina",
    date: generateRandomDate()
  },
  {
    userName: "Carlos Aquino",
    details: "Fuimos con mi familia a Manuel Antonio con Paticas. Excelente agencia de viajes. Viajar con Paticas es seguro y confortable.",
    from: "Guatemala",
    date: generateRandomDate()
  },
  {
    userName: "Najiha",
    details: "Traveling with Paticas is safe and enjoyable. Costa Ricans are some of the friendliest folks around, making your trip even more delightful.",
    from: "Malaysia",
    date: generateRandomDate()
  },
  {
    userName: "Mariam Rebollo",
    details: "Olá, hoje fomos à Playa Virador, choveu, mas recomendamos porque é maravilhoso, super recomendado.",
    from: "Brasil",
    date: generateRandomDate()
  },
  {
    userName: "Rita Franco",
    details: "Visitamos las cataratas y volcanes, una experiencia inolvidable.",
    from: "Paraguay",
    date: generateRandomDate()
  },
  {
    userName: "Ronald Urbano",
    details: "Nosotros llegamos a Costa Rica con Paticas y la pasamos de maravilla en Guanacaste. Las playas son espectaculares, una verdadera maravilla.",
    from: "Colombia",
    date: generateRandomDate()
  },
  {
    userName: "Juan Acuña",
    details: "Los felicito por su excelente trabajo y organización del tour. Nos sentimos muy complacidos y satisfechos con todos los recorridos.",
    from: "Costa Rica",
    date: generateRandomDate()
  },
  {
    userName: "Eva Bertarioni Hernandez",
    details: "Excelente servicio, la comida muy buena, muy bien organizado el tour avistamiento de ballenas.",
    from: "Costa Rica",
    date: generateRandomDate()
  },
  {
    userName: "Jonathan Garita Vargas",
    details: "Muy profesionales y los tours se ajustan a lo ofrecido. Transporte cómodo y seguro, alimentación correcta, en resumen, un excelente servicio.",
    from: "Costa Rica",
    date: generateRandomDate()
  },
  {
    userName: "Merari Velásquez",
    details: "Una de las mejores opciones para conocer Tiquicia y enamorarte de cada rincón. Con ellas encuentras confianza, comodidad, calidad y muchas aventuras.",
    from: "Costa Rica",
    date: generateRandomDate()
  }
];

export default ReviewsHardCoded;