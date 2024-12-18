"use client"
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { i18n as i18nOtherLib } from './other-lib/component';

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'es',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false, // Importante para SSR
    },
  });

i18n.on('languageChanged', (lng) => {
  i18nOtherLib.changeLanguage(lng);
});

export default i18n;
