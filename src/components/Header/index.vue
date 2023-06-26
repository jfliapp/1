<template>
  <header class="header">
    <el-menu :default-active="activeIndex" class="el-menu-header" mode="horizontal" :ellipsis="false"
      @select="handleSelect">
      <div class="header-left">
        <el-menu-item>
          <div class="logo"></div>
          <div class="header-txt">Demo website Company</div>
        </el-menu-item>
        <el-sub-menu v-for="(item, i) in  menu" :key="i" :index="`${i + 10}`">
          <template #title>
            {{ item.title }}
          </template>
          <el-menu-item v-for="(li, k) in  item.arr" :key="k" :index="`${i + 10}-${k}`">
            {{ li.title }}
          </el-menu-item>
        </el-sub-menu>
      </div>

      <div class="header-right">
        <el-menu-item>
          <span>登录</span>
        </el-menu-item>
        <el-menu-item>
          <span>注册</span>
        </el-menu-item>
        <el-sub-menu index="14">
          <template #title>
            <span class="lang" :style="{ background: langImg }"></span>
          </template>
          <el-menu-item>English(US)</el-menu-item>
          <el-menu-item>日本語</el-menu-item>
          <el-menu-item>한국어</el-menu-item>
          <el-menu-item>中文(简体)</el-menu-item>
          <el-menu-item>中文(繁體)</el-menu-item>
        </el-sub-menu>
      </div>
    </el-menu>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const menu = [
  {
    title: '關於我們',
    arr: [
      { title: '合作夥伴', name: 'partners' },
      { title: '公司概况', name: 'situation' },
      { title: '法律檔', name: 'legalDocument' },
      { title: '資質', name: 'qualification' }
    ]
  },
  {
    title: '交易產品',
    arr: [
      { title: '商品', name: 'goodsTrading' },
      { title: '融資交易', name: 'foreignTrading' }
    ]
  },
  {
    title: '交易平臺',
    arr: [
      { title: '登錄交易', name: 'login' },
      { title: '平臺介紹', name: 'tradingPlatform' },
      { title: '下載中心', name: 'download' }
    ]
  },
  {
    title: '新聞資訊',
    arr: [
      { title: '公告', name: 'news/1' },
      { title: '行業新聞', name: 'news/2' }
    ]
  },
]
const langImg = ref('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDJ7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggZD0iTS40IDMzLjZoMTk5LjJ2MTMyLjdILjRWMzMuNnoiIGZpbGw9InJlZCIvPjxwYXRoIGQ9Ik0uNCAzMy42SDEwMFYxMDBILjRWMzMuNnoiIGZpbGw9IiMwMDgiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTAuMiA1NC4zYy02LjggMC0xMi41IDUuNi0xMi41IDEyLjUgMCA2LjggNS42IDEyLjUgMTIuNCAxMi41IDcgMCAxMi42LTUuNSAxMi42LTEyLjRzLTUuNi0xMi42LTEyLjUtMTIuNnpNMzYuMiA2My45Yy0zLjUuOS03LjEgMS45LTEwLjYgMi45di4yYzMuNS45IDcuMSAxLjkgMTAuNiAyLjh2LTUuOXpNNTAuMyA0Mi4yaC0uMmMtLjkgMy41LTEuOSA3LjEtMi44IDEwLjZoNS45Yy0xLTMuNS0xLjktNy0yLjktMTAuNnpNNjQuMiA2OS44YzMuNS0uOSA3LjEtMS45IDEwLjYtMi44di0uMmMtMy41LS45LTcuMS0xLjktMTAuNi0yLjh2NS44ek01MC4xIDkxLjRoLjJjLjktMy41IDEuOS03LjEgMi44LTEwLjZoLTUuOWMxIDMuNiAyIDcuMSAyLjkgMTAuNnpNMzYuNyA3MS41Yy0yLjUgMi41LTUuMSA1LjEtNy42IDcuNyAzLjUtLjkgNy0xLjkgMTAuNS0yLjgtMS4xLTEuNy0yLTMuNC0yLjktNC45ek02Mi42IDQ1LjdjLTIuNiAyLjYtNS4yIDUuMS03LjcgNy42IDEuNi45IDMuMiAxLjggNC45IDIuOC45LTMuNSAxLjgtNyAyLjgtMTAuNHpNMzkuNSA1Ny4zYy0zLjUtLjktNy0xLjktMTAuNy0yLjlsNy44IDcuOGMxLTEuNiAxLjktMy4yIDIuOS00Ljl6TTYwLjkgNzYuNGMzLjUuOSA3IDEuOSAxMC4zIDIuOC0yLjUtMi41LTUtNS4xLTcuNS03LjYtLjkgMS41LTEuOCAzLjEtMi44IDQuOHpNNDUuNiA1My4zYy0yLjUtMi41LTUuMS01LjEtNy44LTcuNyAxIDMuNiAxLjkgNy4xIDIuOCAxMC42IDEuOC0xLjEgMy40LTIgNS0yLjl6TTU0LjggODAuNGMyLjUgMi41IDUuMSA1IDcuNyA3LjctMS0zLjUtMS45LTcuMS0yLjgtMTAuNS0xLjcgMS0zLjMgMS45LTQuOSAyLjh6TTYzLjcgNjIuMWMyLjUtMi41IDUuMS01LjEgNy43LTcuNi0zLjUuOS03IDEuOS0xMC41IDIuOCAxIDEuNyAyIDMuNCAyLjggNC44ek0zNy45IDg4YzIuNi0yLjYgNS4yLTUuMSA3LjctNy42LTEuNi0uOS0zLjItMS44LTQuOS0yLjgtLjkgMy40LTEuOSA2LjktMi44IDEwLjR6Ii8+PC9zdmc+')
const activeIndex = ref<string>('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
// $bg: #1b1b1b;
$bg: #fff;


.header {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;

  .el-menu-header {
    padding: 0 350px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-left {
      display: flex;
      align-items: center;

      .logo {
        width: 1em;
        height: 1em;
        font-size: 28px;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: contain;
        background-image: url(https://securitiesuserdata.oss-ap-northeast-1.aliyuncs.com/initial/96.png);
      }

      .header-txt {
        display: flex;
        align-items: center;
      }

      .is-active {
        // border-bottom: 2px solid var(--el-menu-active-color);
        border-bottom: 2px solid var(--el-color-primary);
      }
    }

    .header-right {
      height: 100%;
      display: flex;
      align-items: center;

      .lang {
        height: 20px;
        width: 20px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDJ7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggZD0iTS40IDMzLjZoMTk5LjJ2MTMyLjdILjRWMzMuNnoiIGZpbGw9InJlZCIvPjxwYXRoIGQ9Ik0uNCAzMy42SDEwMFYxMDBILjRWMzMuNnoiIGZpbGw9IiMwMDgiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTAuMiA1NC4zYy02LjggMC0xMi41IDUuNi0xMi41IDEyLjUgMCA2LjggNS42IDEyLjUgMTIuNCAxMi41IDcgMCAxMi42LTUuNSAxMi42LTEyLjRzLTUuNi0xMi42LTEyLjUtMTIuNnpNMzYuMiA2My45Yy0zLjUuOS03LjEgMS45LTEwLjYgMi45di4yYzMuNS45IDcuMSAxLjkgMTAuNiAyLjh2LTUuOXpNNTAuMyA0Mi4yaC0uMmMtLjkgMy41LTEuOSA3LjEtMi44IDEwLjZoNS45Yy0xLTMuNS0xLjktNy0yLjktMTAuNnpNNjQuMiA2OS44YzMuNS0uOSA3LjEtMS45IDEwLjYtMi44di0uMmMtMy41LS45LTcuMS0xLjktMTAuNi0yLjh2NS44ek01MC4xIDkxLjRoLjJjLjktMy41IDEuOS03LjEgMi44LTEwLjZoLTUuOWMxIDMuNiAyIDcuMSAyLjkgMTAuNnpNMzYuNyA3MS41Yy0yLjUgMi41LTUuMSA1LjEtNy42IDcuNyAzLjUtLjkgNy0xLjkgMTAuNS0yLjgtMS4xLTEuNy0yLTMuNC0yLjktNC45ek02Mi42IDQ1LjdjLTIuNiAyLjYtNS4yIDUuMS03LjcgNy42IDEuNi45IDMuMiAxLjggNC45IDIuOC45LTMuNSAxLjgtNyAyLjgtMTAuNHpNMzkuNSA1Ny4zYy0zLjUtLjktNy0xLjktMTAuNy0yLjlsNy44IDcuOGMxLTEuNiAxLjktMy4yIDIuOS00Ljl6TTYwLjkgNzYuNGMzLjUuOSA3IDEuOSAxMC4zIDIuOC0yLjUtMi41LTUtNS4xLTcuNS03LjYtLjkgMS41LTEuOCAzLjEtMi44IDQuOHpNNDUuNiA1My4zYy0yLjUtMi41LTUuMS01LjEtNy44LTcuNyAxIDMuNiAxLjkgNy4xIDIuOCAxMC42IDEuOC0xLjEgMy40LTIgNS0yLjl6TTU0LjggODAuNGMyLjUgMi41IDUuMSA1IDcuNyA3LjctMS0zLjUtMS45LTcuMS0yLjgtMTAuNS0xLjcgMS0zLjMgMS45LTQuOSAyLjh6TTYzLjcgNjIuMWMyLjUtMi41IDUuMS01LjEgNy43LTcuNi0zLjUuOS03IDEuOS0xMC41IDIuOCAxIDEuNyAyIDMuNCAyLjggNC44ek0zNy45IDg4YzIuNi0yLjYgNS4yLTUuMSA3LjctNy42LTEuNi0uOS0zLjItMS44LTQuOS0yLjgtLjkgMy40LTEuOSA2LjktMi44IDEwLjR6Ii8+PC9zdmc+);
      }
    }
  }
}
</style>