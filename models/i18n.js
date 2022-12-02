import i18NextMobx, { getSeverLanguage } from 'i18next-mobx';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import zhCN from '../public/locales/zh-CN';
export const isServer = () => typeof window === 'undefined';

i18NextMobx
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: isServer() ? getSeverLanguage() : '',
    debug: false,
    resources: {
      'zh-CN': {
        translation: zhCN,
      },
    },
    detection: {
      caches: ['cookie', 'localStorage'],
    },
    fallbackLng: ['zh-CN', 'en-US'],
  });

export const LanguageName = {
  'zh-CN': '简体中文',
  'zh-TW': '繁体中文',
  'en-US': 'English',
  de: '德文',
};
