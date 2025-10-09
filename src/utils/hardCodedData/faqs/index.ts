import { TFunction } from "i18next";
import { FAQTypeCategory } from "../../types";

const FAQsData = (t: TFunction): FAQTypeCategory => ([
  {
    category: t("faqs.categories.costaRicaEssentials.title"),
    questions: [
      {
        id: 1,
        question: t("faqs.categories.costaRicaEssentials.questions.1.question"),
        answer: t("faqs.categories.costaRicaEssentials.questions.1.answer"),
        interLink: t("faqs.categories.costaRicaEssentials.questions.1.interLink"),
      },
      {
        id: 2,
        question: t("faqs.categories.costaRicaEssentials.questions.2.question"),
        answer: t("faqs.categories.costaRicaEssentials.questions.2.answer"),
      },
      {
        id: 3,
        question: t("faqs.categories.costaRicaEssentials.questions.3.question"),
        answer: t("faqs.categories.costaRicaEssentials.questions.3.answer"),
      },
      {
        id: 4,
        question: t("faqs.categories.costaRicaEssentials.questions.4.question"),
        answer: t("faqs.categories.costaRicaEssentials.questions.4.answer"),
        interLink: t("faqs.categories.costaRicaEssentials.questions.4.interLink"),
      },
    ],
  },
  {
    category: t("faqs.categories.wildlifeNature.title"),
    questions: [
      {
        id: 5,
        question: t("faqs.categories.wildlifeNature.questions.5.question"),
        answer: t("faqs.categories.wildlifeNature.questions.5.answer"),
        interLink: t("faqs.categories.wildlifeNature.questions.5.interLink"),
      },
    ],
  },
  {
    category: t("faqs.categories.toursServices.title"),
    questions: [
      {
        id: 6,
        question: t("faqs.categories.toursServices.questions.6.question"),
        answer: t("faqs.categories.toursServices.questions.6.answer"),
      },
      {
        id: 7,
        question: t("faqs.categories.toursServices.questions.7.question"),
        answer: t("faqs.categories.toursServices.questions.7.answer"),
      },
      {
        id: 8,
        question: t("faqs.categories.toursServices.questions.8.question"),
        answer: t("faqs.categories.toursServices.questions.8.answer"),
        interLink: t("faqs.categories.toursServices.questions.8.interLink"),
      },
      {
        id: 9,
        question: t("faqs.categories.toursServices.questions.9.question"),
        answer: t("faqs.categories.toursServices.questions.9.answer"),
      },
      {
        id: 10,
        question: t("faqs.categories.toursServices.questions.10.question"),
        answer: t("faqs.categories.toursServices.questions.10.answer"),
      },
      {
        id: 11,
        question: t("faqs.categories.toursServices.questions.11.question"),
        answer: t("faqs.categories.toursServices.questions.11.answer"),
        interLink: t("faqs.categories.toursServices.questions.11.interLink"),
      },
    ],
  },
]);

export default FAQsData;