import { CompanyValues, Founder, Stat } from "../../types";
import { GiBinoculars } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { TFunction } from "i18next";
import i18n from "../../../i18n";

const founders = (t: TFunction): Array<Founder> => [
  {
    name: t("foundersInfo.karla.name"),
    title: t("foundersInfo.karla.title"),
    bio: t("foundersInfo.karla.bio"),
    imageSrc: "https://res.cloudinary.com/drbdst7hg/image/upload/t_Profile/v1740782680/Karla_zpq9mz.png"
  },
  {
    name: t("foundersInfo.yoely.name"),
    title: t("foundersInfo.yoely.title"),
    bio: t("foundersInfo.yoely.bio"),
    imageSrc: "https://res.cloudinary.com/drbdst7hg/image/upload/t_Profile/v1740782678/Yoely_usqlm3.jpg"
  },
  {
    name: t("foundersInfo.yorlene.name"),
    title: t("foundersInfo.yorlene.title"),
    bio: t("foundersInfo.yorlene.bio"),
    imageSrc: "https://res.cloudinary.com/drbdst7hg/image/upload/t_Profile/v1740782678/Yorlene_p5u4b0.jpg"
  },
];

const misionAndVision = (t: TFunction): Array<CompanyValues> => [
  {
    title: t("mission.title"),
    description: t("mission.description"),
    icon: <TbTargetArrow size={150} color="white" />,
    img: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741154152/Misio%CC%81n_2_cuxn3q.jpg"
  },
  {
    title: t("vision.title"),
    description: t("vision.description"),
    icon: <GiBinoculars size={150} color="white" />,
    img: "https://res.cloudinary.com/drbdst7hg/image/upload/v1738734499/8_a4zvfl.jpg"
  },
  {
    title: t("values.title"),
    description: t("values.description"),
    icon: <BiSearchAlt size={150} color="white" />,
    img: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737472393/18_l23a5x.jpg"
  },
]

const statsInfo = (t: TFunction): Array<Stat> => [
  {
    icon: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139097/Viajes_zouy9q.png",
    number: "+200",
    description: t("statsInfo.0")
  },
  {
    icon: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139096/Cuatro_xcjyft.png",
    number: "4 " + i18n.t("years"),
    description: t("statsInfo.1")
  },
  {
    icon: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139096/Clientes_z8e13k.png",
    number: "+6000",
    description: t("statsInfo.2")
  },
  {
    icon: "https://res.cloudinary.com/drbdst7hg/image/upload/v1741139097/Destinos_ys4avk.png",
    number: "+170",
    description: t("statsInfo.3")
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
