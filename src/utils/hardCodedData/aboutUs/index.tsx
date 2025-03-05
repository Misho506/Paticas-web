import { CompanyValues, Founder, Stat } from "../../types";
import { GiBinoculars } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";

const founders: Array<Founder> = [
  {
    name: "Karla Calderón",
    title: "CEO & Founder",
    bio: `Una joven emprendedora apasionada por los viajes y la fotografia. Durante sus años de estudiante en la carrera de Inglés con Formación en Gestión Empresarial en la Universidad de Costa Rica, surgió en ella la inspiración de crear su propia empresa. Junto a su madre y hermana, materializó este sueño, dando vida a Paticas, una agencia de viajes que refleja su amor por explorar nuevos destinos y compartir esa experiencia con otros viajeros.

    Con tan solo 20 años de edad, Karla dio inicio a esta emocionante travesía que ha llevado a Paticas a destacarse como un referente en el ámbito de los viajes en Costa Rica. Su dedicación y visión han sido la clave para iniciar con este apasionante proyecto que hoy en día es sinónimo de experiencias únicas y memorables en el turismo costarricense.`,
    imageSrc: "https://res.cloudinary.com/drbdst7hg/image/upload/t_Profile/v1740782680/Karla_zpq9mz.png" // Replace with your actual image path
  },
  {
    name: "Yoely Jiménez",
    title: "CMO $ Co-Founder",
    bio: `A los impresionantes 17 años de edad, Yoely co-fundó esta emocionante empresa de viajes. Actualmente, es estudiante de la carrera Administración Aduanera y Comercio Exterior en la Universidad de Costa Rica. Su pasión por el mundo del comercio internacional se refleja en cada experiencia que Paticas ofrece. Como encargada del área de marketing y servicio al cliente, aporta un enfoque fresco y dinámico que ha contribuido al éxito continuo de Paticas. Su energía y dedicación son la brújula que guía a nuestra empresa hacia nuevos horizontes en la industria de los viajes.`,
    imageSrc: "https://res.cloudinary.com/drbdst7hg/image/upload/t_Profile/v1740782678/Yoely_usqlm3.jpg" // Replace with your actual image path
  },
  {
    name: "Yorlene Calderón",
    title: "COO & Co-Founder",
    bio: `Yorlene Calderón Molina es el pilar fundamental de nuestro equipo en Paticas. Su vasta experiencia y apoyo incondicional han sido el motor que impulsó la creación de este emocionante proyecto de viajes en Costa Rica. Su dedicación y pasión por explorar los rincones más fascinantes de nuestro país se reflejan en cada aspecto de nuestra empresa. Yorlene personifica la esencia misma de Paticas y es un honor contar con su liderazgo en este viaje hacia experiencias inolvidables.`,
    imageSrc: "https://res.cloudinary.com/drbdst7hg/image/upload/t_Profile/v1740782678/Yorlene_p5u4b0.jpg" // Replace with your actual image path
  },
];

const misionAndVision: Array<CompanyValues> = [
  {
    title: "Nuestra Misión",
    description: `Crear experiencias de viajes basados en las preferencias de nuestros clientes, cumpliendo con los más altos estándares de calidad, responsabilidad social y ambiental. Además, promover el turismo nacional, impulsando negocios locales y emprendimientos rurales.`,
    icon: <TbTargetArrow size={150} color="white" />,
    img: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741154152/Misio%CC%81n_2_cuxn3q.jpg"
  },
  {
    title: "Nuestra Visión",
    description: `Ser una agencia de viajes reconocida por su seguridad, confianza, diversidad de actividades, y preferencias de los clientes.`,
    icon: <GiBinoculars size={150} color="white" />,
    img: "https://res.cloudinary.com/drbdst7hg/image/upload/v1738734499/8_a4zvfl.jpg"
  },
  {
    title: "Nuestros valores",
    description: `
    Integridad: Promovemos el turismo nacional ayudando a otros emprendimientos turísticos y locales. 

    Responsabilidad: Nos comprometemos a actuar de manera responsable en todas nuestras operaciones y decisiones. Implementando protocolos y medidas para garantizar viajes seguros.

    Inclusión: Nos dedicamos a hacer que los viajes sean accesibles para todos, eliminando barreras físicas, comunicativas y cognitivas. Nuestro personal está capacitado para ofrecer asistencia adicional y contamos con una amplia gama de destinos para adaptarnos a las necesidades e intereses de todos los clientes.

    Innovación: Nos esforzamos por ser innovadores en la creación de experiencias de viaje únicas y personalizadas. Buscamos constantemente nuevas formas de sorprender a nuestros clientes y adaptarnos a las tendencias del mercado.

    Pasión: Nos apasiona viajar y queremos compartir esa pasión con nuestros clientes. Nos esforzamos por brindar experiencias extraordinarias que dejan recuerdos duraderos.

    Nuestro enfoque verde:Estamos comprometidos con la conciencia verde y la conservación del medio ambiente. Promovemos el turismo sostenible, respetando los ecosistemas y minimizando nuestro impacto en la naturaleza. Apoyamos prácticas que preservan la biodiversidad, colaboramos con emprendimientos locales responsables y educamos a nuestros clientes sobre la importancia de cuidar los recursos naturales. Cada uno de nuestros viajes busca generar un impacto positivo en el entorno, fomentando la protección y valoración de la riqueza natural de Costa Rica.
`,
    icon: <BiSearchAlt size={150} color="white" />,
    img: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737472393/18_l23a5x.jpg"
  },
]

const statsInfo: Array<Stat> = [
  {
    icon: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139097/Viajes_zouy9q.png",
    number: "+200",
    description: "Viajes realizados con éxito"
  },
  {
    icon: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139096/Cuatro_xcjyft.png",
    number: "4 años",
    description: "Viviendo de nuestra pasión"
  },
  {
    icon: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139096/Clientes_z8e13k.png",
    number: "+6000",
    description: "Clientes satisfechos"
  },
  {
    icon: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139097/Destinos_ys4avk.png",
    number: "+170",
    description: "Destinos inolvidables"
  },
]

const partners: Array<string> = [
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741153518/logo_1_carreta_fraijanes_2_ctmkcv.png",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139082/Dolphin_tours_ei5qsm.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139083/tortuguero_yrggkc.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139083/Rancho_naturalista_zzazir.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139082/maracuya_a9ehne.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139083/tesoro_escondido_a842zk.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139082/catarata_la_leona_dit81o.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139082/corcovado_cprmdh.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139083/marino_ballena_kixifu.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741153667/GIO_m19gct.png",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741153518/Maquenque_Wildlife_Spots_2_qagtn5.png",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741153517/nauyaca_gv5mww.png",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139083/rio_agrio_zoadte.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139082/arenal_g49wif.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139082/maquique_cuxynb.jpg",
  "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139083/tuanis_bhsipm.jpg",
]

export { founders, misionAndVision, statsInfo, partners };
