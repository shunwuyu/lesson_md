import { createI18n } from 'vue-i18n';

import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';

import modal_zhCN from '../plugins/modal/local/lang/zh-CN';
import modal_enUS from '../plugins/modal/local/lang/en-US';

const messages = {
    'zh-CN': { ...zhCN, ...modal_zhCN },
    'en-US': { ...enUS, ...modal_enUS }
};

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
  
    locale: localStorage.getItem('lang') || 'zh-CN',
    messages,
    fallbackLocale: 'zh-CN',
    silentTranslationWarn: true,
    missing() {
      return '';
    }
  });
  
  export default i18n;