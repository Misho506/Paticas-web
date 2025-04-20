
import { TFunction } from "i18next";

const sectionOurTour = (t: TFunction) => ({
  title: t('sectionOurTour.title'),
  body: t('sectionOurTour.body')
})

const sectionBlogs = (t: TFunction) => ({
  title: t('sectionBlogs.title'),
  body: t('sectionBlogs.body'),
})

const sectionAboutUs = (t: TFunction) => ({
  title: t('sectionAboutUs.title'),
  body: t('sectionAboutUs.body')
})

const sectionReviews = (t: TFunction) => ({
  title: t('sectionReviews.title'),
  body: `${t('sectionReviews.body')}
          *STARS*`
})

const sectionContact = (t: TFunction) => ({
  title: t('sectionContact.title'),
  body: t('sectionContact.body'),
  bgColor: "bg-neutral-300"
})

export {
  sectionOurTour,
  sectionBlogs,
  sectionAboutUs,
  sectionReviews,
  sectionContact,
};
