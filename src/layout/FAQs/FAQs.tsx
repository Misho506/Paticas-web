import { useState } from "react";
import FAQsData from "../../utils/hardCodedData/faqs";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useTour } from "../../context/TourContext";
import { allTours } from "../../utils/hardCodedData/categories/tours";
import { allOneDayTours } from "../../utils/hardCodedData/categories/oneDayTours";

const FAQs = () => {
  const { setSelectedTour } = useTour();
  const navigate = useNavigate();
  const i18n = useTranslation();
  const [openQuestions, setOpenQuestions] = useState<Array<number>>([]);

  const showHideQuestion = (index: number) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter(question => question !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  const navigateToLink = (link: string) => {
    const selectedTour = link.split(":")[1];
    const foundTour = allTours(i18n.t).find(tour => tour.id === selectedTour) || allOneDayTours(i18n.t).find(tour => tour.id === selectedTour);
    if (foundTour) {
      setSelectedTour(foundTour);
    }
    navigate(link);
  }

  const insertLinkIntoText = (text: string, link: string[], textForLink: string[]) => {
    const parts = text.split('[link]');
    return (
      <>
        {parts.map((part, index) => {
          console.log("LINK", i18n.t(link[index]), "TEXT", i18n.t(textForLink[index]));
          return (
            <span key={index}>
              {part}
              {index < parts.length - 1 && (
                <span onClick={() => navigateToLink(i18n.t(link[index]))} className="text-blue-600 underline hover:text-blue-700 cursor-pointer">{i18n.t(textForLink[index])}</span>
              )}
            </span>
          )
        })}
      </>
    );
  };

  return (
    <>
      <header className="text-center mb-10 relative pt-8">
        <img
          src="https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00006.jpg"
          alt="Traveling with Paticas"
          className="object-center object-cover w-full h-[500px]"
        />
        <section className="text-white absolute inset-0 flex flex-col items-center justify-center px-4">
          <span style={{ textShadow: "0 2px 2px black" }} className="text-s">{i18n.t("faqs.annotation")}</span>
          <h1 style={{ textShadow: "0 2px 2px black" }} className="font-bold mb-2">{i18n.t("faqs.title")}</h1>
          <p style={{ textShadow: "0 2px 2px black" }} className="text-lg max-w-[800px] mx-auto ">
            {i18n.t("faqs.description")}
          </p>
        </section>
      </header>
      <section className="max-w-4xl mx-auto pb-16 px-4">
        {FAQsData.map((section) => (
          <article key={section.category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {i18n.t(section.category)}
            </h2>
            {section.questions.map(({ question, answer, interLink, interLinkText, id }) => (
              <article key={id} className="my-6 rounded" style={{ boxShadow: "0 4px 5px -3px gray" }}>
                <article
                  onClick={() => showHideQuestion(id as number)}
                  className="w-full hover:bg-[#f0b500] py-3 px-4 mx-auto flex justify-between items-center cursor-pointer rounded"
                >
                  <h5 className="text-lg">{i18n.t(question)}</h5>
                  {openQuestions.includes(id as number) ? (
                    <RiArrowUpSLine className="text-2xl" />
                  ) : (
                    <RiArrowDownSLine className="text-2xl" />
                  )}
                </article>
                <div className={`${openQuestions.includes(id as number) ? "max-h-screen" : "m-0 h-0 overflow-hidden"} flex flex-col transition-all duration-400 ease-in-out`}>
                  <p className="italic text-left text-lg whitespace-pre-line mx-4 mt-2">
                    {interLink && interLinkText ? (
                      insertLinkIntoText(i18n.t(answer), interLink, interLinkText)
                    ) : (
                      i18n.t(answer)
                    )}
                  </p>
                </div>
              </article>
            ))}
          </article>
        ))}
      </section>
    </>
  );
}

export default FAQs;