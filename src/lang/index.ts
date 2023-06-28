import { createI18n } from 'vue-i18n'

// User defined lang
import enLocale from './en'
import zhCnLocale from './zh-cn'
import twCnLocale from './zh-tw'
import koLocale from './ko'
import jaLocale from './ja'

const messages = {
  en: {
    ...enLocale
  },
  'zh-cn': {
    ...zhCnLocale
  },
  'zh-tw': {
    ...twCnLocale
  },
  ko: {
    ...koLocale
  },
  ja: {
    ...jaLocale
  }
}

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});