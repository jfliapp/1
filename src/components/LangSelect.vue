<template>
  <el-dropdown placement="bottom-end" trigger="hover" @command="handleSetLanguage">
    <el-button>语言 {{ language }}</el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="en">English</el-dropdown-item>
        <el-dropdown-item command="zh-cn">简体中文</el-dropdown-item>
        <el-dropdown-item command="zh-tw">繁体中文</el-dropdown-item>
        <el-dropdown-item command="ko">한국어</el-dropdown-item>
        <el-dropdown-item command="ja">日本語</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { i18n } from '@/lang/index';

export default class LangSelect extends Vue {
  language: string = i18n.global.locale
  
  handleSetLanguage(lang: any) {
    i18n.global.locale = lang
    this.language = lang
  }
}
</script>
