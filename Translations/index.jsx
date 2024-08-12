import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import enTranslation from './en.json';
import khTranslation from './kh.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  kh: {
    translation: khTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
