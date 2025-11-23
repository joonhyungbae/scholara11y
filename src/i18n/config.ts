import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from './locales/en/common.json';
import commonKo from './locales/ko/common.json';
import homeEn from './locales/en/home.json';
import homeKo from './locales/ko/home.json';
import proposedStandardEn from './locales/en/proposedStandard.json';
import proposedStandardKo from './locales/ko/proposedStandard.json';
import typographyEn from './locales/en/typography.json';
import typographyKo from './locales/ko/typography.json';
import altTextEn from './locales/en/altText.json';
import altTextKo from './locales/ko/altText.json';
import regulationsEn from './locales/en/regulations.json';
import regulationsKo from './locales/ko/regulations.json';
import codeLibraryEn from './locales/en/codeLibrary.json';
import codeLibraryKo from './locales/ko/codeLibrary.json';
import pdfChecklistEn from './locales/en/pdfChecklist.json';
import pdfChecklistKo from './locales/ko/pdfChecklist.json';
import publishersEn from './locales/en/publishers.json';
import publishersKo from './locales/ko/publishers.json';
import downloadsEn from './locales/en/downloads.json';
import downloadsKo from './locales/ko/downloads.json';
import referencesEn from './locales/en/references.json';
import referencesKo from './locales/ko/references.json';
import creditEn from './locales/en/credit.json';
import creditKo from './locales/ko/credit.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEn,
        home: homeEn,
        proposedStandard: proposedStandardEn,
        typography: typographyEn,
        altText: altTextEn,
        regulations: regulationsEn,
        codeLibrary: codeLibraryEn,
        pdfChecklist: pdfChecklistEn,
        publishers: publishersEn,
        downloads: downloadsEn,
        references: referencesEn,
        credit: creditEn,
      },
      ko: {
        common: commonKo,
        home: homeKo,
        proposedStandard: proposedStandardKo,
        typography: typographyKo,
        altText: altTextKo,
        regulations: regulationsKo,
        codeLibrary: codeLibraryKo,
        pdfChecklist: pdfChecklistKo,
        publishers: publishersKo,
        downloads: downloadsKo,
        references: referencesKo,
        credit: creditKo,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    detection: {
      order: ['localStorage', 'querystring'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
