import { TFunction } from "i18next";
import { BlogType } from "../../types";
import { BiodiversityFrontPage, CaribeFrontPage, TicosAndTicasFrontPage, BluezoneFrontPage } from "../../../assets/blogs";

const blogTicosAndTicas = (t: TFunction): BlogType => ({
  picture: TicosAndTicasFrontPage,
  title: t("blogs.0.title"),
  date: t("blogs.0.date"),
  readingTime: t("blogs.0.readingTime"),
  shortDescription: t("blogs.0.shortDescription"),
  images: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/ticos-y-ticas-00001.jpg",
  ],
  listOfTexts: [
    t("blogs.0.listOfTexts.0"),
    t("blogs.0.listOfTexts.1"),
    t("blogs.0.listOfTexts.2"),
    t("blogs.0.listOfTexts.3"),
    t("blogs.0.listOfTexts.4"),
  ]
});

const blogCaribe = (t: TFunction): BlogType => ({
  picture: CaribeFrontPage,
  title: t("blogs.1.title"),
  date: t("blogs.1.date"),
  readingTime: t("blogs.1.readingTime"),
  shortDescription: t("blogs.1.shortDescription"),
  images: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00001.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/caribe-00001.jpg",
  ],
  listOfTexts: [
    t("blogs.1.listOfTexts.0"),
    t("blogs.1.listOfTexts.1"),
    t("blogs.1.listOfTexts.2"),
    t("blogs.1.listOfTexts.3"),
    t("blogs.1.listOfTexts.4"),
  ]
});

const blogBlueZone = (t: TFunction): BlogType => ({
  picture: BluezoneFrontPage,
  title: t("blogs.2.title"),
  date: t("blogs.2.date"),
  readingTime: t("blogs.2.readingTime"),
  shortDescription: t("blogs.2.shortDescription"),
  images: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00012.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00011.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00010.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00009.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00008.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00007.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00006.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00005.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00004.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00003.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00002.jpg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/zona-azul-00001.jpg",
  ],
  listOfTexts: [
    t("blogs.2.listOfTexts.0"),
    t("blogs.2.listOfTexts.1"),
    t("blogs.2.listOfTexts.2"),
    t("blogs.2.listOfTexts.3"),
    t("blogs.2.listOfTexts.4"),
  ]
});

const blogBiodiversity = (t: TFunction): BlogType => ({
  picture: BiodiversityFrontPage,
  title: t("blogs.3.title"),
  date: t("blogs.3.date"),
  readingTime: t("blogs.3.readingTime"),
  shortDescription: t("blogs.3.shortDescription"),
  images: [
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00012.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00011.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00010.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00009.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00008.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00007.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00006.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00005.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00004.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00003.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00002.jpeg",
    "https://misoinfo.data.blog/wp-content/uploads/2025/04/biodiversidad-00001.jpeg",

  ],
  listOfTexts: [
    t("blogs.3.listOfTexts.0"),
    t("blogs.3.listOfTexts.1"),
    t("blogs.3.listOfTexts.2"),
    t("blogs.3.listOfTexts.3"),
    t("blogs.3.listOfTexts.4"),
  ]
});

const allBlogs = (t: TFunction) => [
  blogTicosAndTicas(t),
  blogCaribe(t),
  blogBlueZone(t),
  blogBiodiversity(t)
];

export default allBlogs;

