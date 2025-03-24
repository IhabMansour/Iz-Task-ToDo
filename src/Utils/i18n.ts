import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ARABIC_KEYS } from '../Constants/ArTranslationKeys';
import { ENGLISH_KEYS } from '../Constants/ErTranslationKeys';
import { LANGUAGES_KEYS } from '../Constants/SharedConstants';

const resources = {
  [LANGUAGES_KEYS.ENGLISH]: {
    translation: ENGLISH_KEYS,
  },
  [LANGUAGES_KEYS.ARABIC]: {
    translation: ARABIC_KEYS,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: LANGUAGES_KEYS.ENGLISH,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
