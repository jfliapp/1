import { createI18n } from 'vue-i18n'

// element-plus built-in lang
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhCnLocale from 'element-plus/lib/locale/lang/zh-cn'
import elementTwCnLocale from 'element-plus/lib/locale/lang/zh-tw'
import elementKoLocale from 'element-plus/lib/locale/lang/ko'
import elementJaLocale from 'element-plus/lib/locale/lang/ja'

// User defined lang
import enLocale from './en'
import zhCnLocale from './zh-cn'
import twCnLocale from './zh-tw'
import koLocale from './ko'
import jaLocale from './ja'

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  'zh-cn': {
    ...zhCnLocale,
    ...elementZhCnLocale
  },
  'zh-tw': {
    ...twCnLocale,
    ...elementTwCnLocale
  },
  ko: {
    ...koLocale,
    ...elementKoLocale
  },
  ja: {
    ...jaLocale,
    ...elementJaLocale
  }
}

console.log(messages)

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});