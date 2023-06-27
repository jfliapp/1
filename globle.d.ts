declare module 'vue-i18n' {
  import { DefineComponent } from 'vue';
  import { I18n, Composer, VueI18n } from 'vue-i18n';

  // 以下为手动声明的类型
  export const I18nComponent: DefineComponent;
  export const i18n: I18n;
  export const composer: Composer;
  export const createI18n: typeof VueI18n.createI18n;
}