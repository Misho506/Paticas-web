import AboutUsCards from "../../components/aboutUsCards/AboutUsCards";
import FounderProfile from "../../components/founderProfile/FounderProfile";
import Reviews from "../../components/reviews/Reviews";
import SectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import { founders, misionAndVision, statsInfo, partners } from "../../utils/hardCodedData/aboutUs";
import { Stat } from "../../utils/types";
import { useTranslation } from "react-i18next";
import "./AboutUs.css";
import { Fragment } from "react/jsx-runtime";


const AboutUs = () => {
  const { i18n } = useTranslation()

  const sectionReviews = {
    title: i18n.t('sectionReviews.title'),
    body: `${i18n.t('sectionReviews.body')}
            *STARS*`
  }

  const statItem = ({ icon, number, description }: Stat) => (
    <article key={number + `-` + icon} className="flex flex-col items-center m-6 stat-container">
      <img src={icon} alt={icon} className="bg-white rounded-full w-32 h-32 flex items-center justify-center mb-4" />
      <span className="stat-number text-5xl mb-2">
        {number}
      </span>
      <span className="text-gray-800 text-xl text-center max-w-xs italic">
        {description}
      </span>
    </article>
  );

  return (
    <>
      <img src="https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/somos-mas-que-una-familia-e1744306627265.jpeg" alt="family" className="brightness-75 w-full h-auto object-cover" />
      <SectionWithTitle
        title={i18n.t("aboutUs.title")}
        body={
          <>
            <span className="italic">{i18n.t("aboutUs.subDescription")}</span>
            {i18n.t("aboutUs.description")}
          </>
        }
      />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl text-gray-800 mb-8">{i18n.t("founders")}</h1>
        {founders(i18n.t).map((founder, index) => (
          <FounderProfile key={index} {...founder} />
        ))}
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 mb-12">
        <h1 className="text-3xl text-gray-800 mb-8">{i18n.t("mission&Vision")}</h1>
        {misionAndVision(i18n.t).map((card, index) => (
          <Fragment key={index}>{AboutUsCards(card)}</Fragment>
        ))}
      </section>
      <section className="w-full p-10 lg:justify-items-center stat-container">
        <h3 className="text-3xl text-gray-800 mb-8 text-center">{i18n.t("aboutUs.weAre")}</h3>
        <article className="grid lg:grid-cols-2 md:grid-cols-1 lg:w-2/5 ">
          {statsInfo(i18n.t).map((stat, index) => <Fragment key={index}>{statItem(stat)}</Fragment>)}
        </article>
      </section>
      <section className="max-w-4xl p-10 flex flex-col justify-self-center">
        <h3 className="text-3xl text-gray-800 mb-8 text-center">{i18n.t("greenFocus.title")}</h3>
        <img className="w-full rounded-3xl" alt="green snake" src="https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/verde.jpg" />
        <p className="mt-8 text-gray-500 italic text-lg text-center whitespace-pre-line" style={{ whiteSpace: "pre-wrap" }}>
          {i18n.t("greenFocus.description")}
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 mb-12">
        <h1 className="text-3xl text-gray-800 pb-10 text-center">{i18n.t("partners")}</h1>
        <article className="grid grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <img alt={partner} key={index + partner} src={partner} className="w-32 h-auto" />
          ))}
        </article>
        <SectionWithTitle title={sectionReviews.title} body={sectionReviews.body} />
        <Reviews />
      </section>
    </>
  )
};

export default AboutUs;