import { defineStore } from 'pinia'
import i18n from '@/lang'

export const useLangStore = defineStore('lang', {
  persist: true,
  state: () => ({
    lang: 'zh-cn'
  }),
  actions: {
    async changeLang(item: any) {
      this.lang = item
      i18n.global.locale = item;
    }
  }
})