import { useState } from "react";
import FAQsData from "../../utils/hardCodedData/faqs";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";


const FAQs = () => {
  const i18n = useTranslation();
  const [openQuestions, setOpenQuestions] = useState<Array<number>>([]);

  const showHideQuestion = (index: number) => {
    console.log("ENTRy");
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter(question => question !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
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

        {FAQsData(i18n.t).map((section) => (
          <article key={section.category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {section.category}
            </h2>

            {/* <div className="space-y-3"> */}
            {section.questions.map(({ question, answer, interLink, id }, index) => (
              <article key={index} className="my-6 rounded" style={{ boxShadow: "0 4px 5px -3px gray" }}>
                <article onClick={() => showHideQuestion(id as number)} className="w-full max-h-screen hover:bg-[#f0b500] py-3 px-4 mx-auto flex justify-between items-center cursor-pointer rounded" >
                  <h5 key={index} className="text-lg">{question}</h5>
                  {openQuestions.includes(id as number) ? <RiArrowUpSLine className="text-2xl" /> : <RiArrowDownSLine className="text-2xl" />}
                </article>
                <div className={`${openQuestions.includes(id as number) ? 'max-h-screen' : 'm-0 h-0 overflow-hidden'} flex flex-col transition-all duration-400 ease-in-out`}>
                  <p className="italic text-left text-lg whitespace-pre-line mx-4 mt-2">
                    {answer}
                    {interLink && (
                      <a href={interLink} className="text-blue-600 underline mt-2 ml-2">
                        Learn more...
                      </a>
                    )}
                  </p>
                </div>
              </article>
            ))}
            {/* </div> */}
          </article>
        ))}
      </section>
    </>
  );
}

export default FAQs;