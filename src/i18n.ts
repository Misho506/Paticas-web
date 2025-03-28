import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: (code: any) => (code.startsWith('es') ? 'es' : 'en'), // If language is Spanish, fallback to 'es', otherwise to 'en'
    load: 'languageOnly',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;