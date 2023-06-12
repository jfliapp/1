<template>
  <div class="home">
    <el-row>
      <el-col :span="12">
        <el-menu
          :default-active="activeIndex"
          :router="true"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="/Home"><div class="logo"></div></el-menu-item>
          <el-sub-menu index="AboutUs">
            <template #title>{{ $t('AboutUs') }}</template>
            <el-menu-item index="/Partners">{{ $t('Partners') }}</el-menu-item>
            <el-menu-item index="/CompanyOverview">{{ $t('CompanyOverview') }}</el-menu-item>
            <el-menu-item index="/LegalDocument">{{ $t('LegalDocument') }}</el-menu-item>
            <el-menu-item index="/Qualification">{{ $t('Qualification') }}</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="Instruments">
            <template #title>{{ $t('Instruments') }}</template>
            <el-menu-item index="/Commodities">{{ $t('Commodities') }}</el-menu-item>
            <el-menu-item index="/FinancingTransaction">{{ $t('FinancingTransaction') }}</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="Platform">
            <template #title>{{ $t('Platform') }}</template>
            <el-menu-item><el-link :underline="false" href="/Login" target="_blank">{{ $t('LoginTrade') }}</el-link></el-menu-item>
            <el-menu-item index="/PlatformIntroduced">{{ $t('PlatformIntroduced') }}</el-menu-item>
            <el-menu-item index="/DownloadCenter">{{ $t('DownloadCenter') }}</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="News">
            <template #title>{{ $t('News') }}</template>
            <el-menu-item index="/News/1">{{ $t('Announcement') }}</el-menu-item>
            <el-menu-item index="/News/2">{{ $t('IndustryNews') }}</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
      <el-col :span="12">
        <el-link :underline="false" href="/Login" target="_blank">{{ $t('Login') }}</el-link>
        <span style="padding:0 5px">|</span>
        <el-link :underline="false" href="/Register" target="_blank">{{ $t('Register') }}</el-link>
        <LangSelect />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LangSelect from '@/components/LangSelect.vue';
import { ref } from 'vue'

@Options({
  components: {
    LangSelect,
  },
})
export default class Navbar extends Vue {
  activeIndex = ref('/Home')

  // handleSelect = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath)
  //   console.log(this.activeIndex)
  // }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100px;
  height: 50px;
  background-image: url('~@/assets/logo.png');
  background-size: cover;
  background-position: center;
}
</style>
