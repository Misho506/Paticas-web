import { CompanyValues, Founder, Stat } from "../../types";
import { GiBinoculars } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { TFunction } from "i18next";
import i18n from "../../../i18n";
import { ClientsIcon, FourIcon, DestinyIcon, TravelsIcon } from "../../../assets/icons";

const founders = (t: TFunction): Array<Founder> => [
  {
    name: t("foundersInfo.karla.name"),
    title: t("foundersInfo.karla.title"),
    bio: t("foundersInfo.karla.bio"),
    imageSrc: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/karla_zpq9mz.png"
  },
  {
    name: t("foundersInfo.yoely.name"),
    title: t("foundersInfo.yoely.title"),
    bio: t("foundersInfo.yoely.bio"),
    imageSrc: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/yoely_usqlm3.png"
  },
  {
    name: t("foundersInfo.yorlene.name"),
    title: t("foundersInfo.yorlene.title"),
    bio: t("foundersInfo.yorlene.bio"),
    imageSrc: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/yorlene_p5u4b0.png"
  },
];

const misionAndVision = (t: TFunction): Array<CompanyValues> => [
  {
    title: t("mission.title"),
    description: t("mission.description"),
    icon: <TbTargetArrow size={150} color="white" />,
    img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/mision-2.jpg"
  },
  {
    title: t("vision.title"),
    description: t("vision.description"),
    icon: <GiBinoculars size={150} color="white" />,
    img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/caribean-00009.jpg"
  },
  {
    title: t("values.title"),
    description: t("values.description"),
    icon: <BiSearchAlt size={150} color="white" />,
    img: "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/observacion-de-cocodrilos-y-aves-00018.jpg"
  },
]

const statsInfo = (t: TFunction): Array<Stat> => [
  {
    icon: TravelsIcon,
    number: "+200",
    description: t("statsInfo.0")
  },
  {
    icon: FourIcon,
    number: "4 " + i18n.t("years"),
    description: t("statsInfo.1")
  },
  {
    icon: ClientsIcon,
    number: "+6000",
    description: t("statsInfo.2")
  },
  {
    icon: DestinyIcon,
    number: "+170",
    description: t("statsInfo.3")
  },
]

const partners: Array<string> = [
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/logo-1-carreta-fraijanes-2.png",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/dolphin-tours.jpeg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/tortuguero.jpeg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/rancho-naturalista.jpeg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/maracuya.jpeg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/tesoro-escondido.jpeg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/catarata-la-leona.jpeg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/corcovado_cprmdh_thumbnail.jpg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/marino-ballena.jpeg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/gio.png",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/maquenque-wildlife-spots-2.png",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/nauyaca.png",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/rio-agrio.jpeg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/arenal_g49wif_thumbnail.jpg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/maquique.jpeg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/tuanis.jpeg",
]

export { founders, misionAndVision, statsInfo, partners };
