<template>
  <header class="header">
    <div class="content">
      <div class="left">
        <div class="logo"></div>
        <div class="left-menu">
          <div class="item" @click="menuHn(item, null)" v-for="(item, idx) in menu" :key="idx">
            <div class="label">{{ item.title }}</div>
            <div :class="{ 'item-active': item.itemActive }"></div>
            <div class="item-list" v-if="item.itemActive">
              <div class="li" :class="{ 'li-active': li.liActive }" @click="menuHn(item, li)" v-for="li in item.arr"
                :key="li.name">
                {{ li.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <div class="label" @click="goOtherUrl('sign-in')">登录</div>
        </div>
        <div class="item">
          <div class="label" @click="goOtherUrl('sign-up')">注册</div>
        </div>
        <div class="item" @click="langHn">
          <div class="lang" :style="{ 'backgroundImage': `url(${langImg})` }"></div>
          <div class="item-list" v-if="flagLang">
            <div class="li" v-for="li in langs" :key="li.lang">{{ li.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, reactive } from 'vue'
import { goOtherUrl } from "@/utils";
const menu = reactive([
  {
    title: '關於我們',
    prefixPath: 'about',
    itemActive: false,
    arr: [
      { liActive: false, title: '合作夥伴', name: 'Partners', prefixPath: 'about' },
      { liActive: false, title: '公司概况', name: 'Situation', prefixPath: 'about' },
      { liActive: false, title: '法律檔', name: 'LegalDocument', prefixPath: 'about' },
      { liActive: false, title: '資質', name: 'Qualification', prefixPath: 'about' }
    ]
  },
  {
    title: '交易產品',
    prefixPath: 'trade',
    itemActive: false,
    arr: [
      { liActive: false, title: '商品', name: 'GoodsTrading', prefixPath: 'trade' },
      { liActive: false, title: '融資交易', name: 'ForeignTrading', prefixPath: 'trade' }
    ]
  },
  {
    title: '交易平臺',
    prefixPath: 'platform',
    itemActive: false,
    arr: [
      { liActive: false, title: '登錄交易', name: 'Login', prefixPath: 'platform' },
      { liActive: false, title: '平臺介紹', name: 'tradingPlatform', prefixPath: 'platform' },
      { liActive: false, title: '下載中心', name: 'download', prefixPath: 'platform' }
    ]
  },
  {
    title: '新聞資訊',
    prefixPath: 'news',
    itemActive: false,
    arr: [
      { liActive: false, title: '公告', name: '2', prefixPath: 'news' },
      { liActive: false, title: '行業新聞', name: '4', prefixPath: 'news' }
    ]
  },
])
const langs = [
  {
    lang: 'en',
    title: 'English(US)'
  },
  {
    lang: 'ja',
    title: '日本語'
  },
  {
    lang: 'ko',
    title: '한국어'
  },
  {
    lang: 'zh-cn',
    title: '中文(简体)'
  },
  {
    lang: 'zh-tw',
    title: '中文(繁體)'
  },
]
const { push } = useRouter()
const langImg = ref('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDJ7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggZD0iTS40IDMzLjZoMTk5LjJ2MTMyLjdILjRWMzMuNnoiIGZpbGw9InJlZCIvPjxwYXRoIGQ9Ik0uNCAzMy42SDEwMFYxMDBILjRWMzMuNnoiIGZpbGw9IiMwMDgiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTAuMiA1NC4zYy02LjggMC0xMi41IDUuNi0xMi41IDEyLjUgMCA2LjggNS42IDEyLjUgMTIuNCAxMi41IDcgMCAxMi42LTUuNSAxMi42LTEyLjRzLTUuNi0xMi42LTEyLjUtMTIuNnpNMzYuMiA2My45Yy0zLjUuOS03LjEgMS45LTEwLjYgMi45di4yYzMuNS45IDcuMSAxLjkgMTAuNiAyLjh2LTUuOXpNNTAuMyA0Mi4yaC0uMmMtLjkgMy41LTEuOSA3LjEtMi44IDEwLjZoNS45Yy0xLTMuNS0xLjktNy0yLjktMTAuNnpNNjQuMiA2OS44YzMuNS0uOSA3LjEtMS45IDEwLjYtMi44di0uMmMtMy41LS45LTcuMS0xLjktMTAuNi0yLjh2NS44ek01MC4xIDkxLjRoLjJjLjktMy41IDEuOS03LjEgMi44LTEwLjZoLTUuOWMxIDMuNiAyIDcuMSAyLjkgMTAuNnpNMzYuNyA3MS41Yy0yLjUgMi41LTUuMSA1LjEtNy42IDcuNyAzLjUtLjkgNy0xLjkgMTAuNS0yLjgtMS4xLTEuNy0yLTMuNC0yLjktNC45ek02Mi42IDQ1LjdjLTIuNiAyLjYtNS4yIDUuMS03LjcgNy42IDEuNi45IDMuMiAxLjggNC45IDIuOC45LTMuNSAxLjgtNyAyLjgtMTAuNHpNMzkuNSA1Ny4zYy0zLjUtLjktNy0xLjktMTAuNy0yLjlsNy44IDcuOGMxLTEuNiAxLjktMy4yIDIuOS00Ljl6TTYwLjkgNzYuNGMzLjUuOSA3IDEuOSAxMC4zIDIuOC0yLjUtMi41LTUtNS4xLTcuNS03LjYtLjkgMS41LTEuOCAzLjEtMi44IDQuOHpNNDUuNiA1My4zYy0yLjUtMi41LTUuMS01LjEtNy44LTcuNyAxIDMuNiAxLjkgNy4xIDIuOCAxMC42IDEuOC0xLjEgMy40LTIgNS0yLjl6TTU0LjggODAuNGMyLjUgMi41IDUuMSA1IDcuNyA3LjctMS0zLjUtMS45LTcuMS0yLjgtMTAuNS0xLjcgMS0zLjMgMS45LTQuOSAyLjh6TTYzLjcgNjIuMWMyLjUtMi41IDUuMS01LjEgNy43LTcuNi0zLjUuOS03IDEuOS0xMC41IDIuOCAxIDEuNyAyIDMuNCAyLjggNC44ek0zNy45IDg4YzIuNi0yLjYgNS4yLTUuMSA3LjctNy42LTEuNi0uOS0zLjItMS44LTQuOS0yLjgtLjkgMy40LTEuOSA2LjktMi44IDEwLjR6Ii8+PC9zdmc+')
const flagLang = ref(false)
const lastLi = ref(null)


const goUrl = (item: any) => {
  const name = item.name
  let tem: any = { name }
  if (item.name === '2') {
    tem = { name: 'News', params: { id: item.name } }
  }
  if (item.name === '4') {
    tem = { name: 'News', params: { id: item.name } }
  }
  if (item.name === 'Login') {
    goOtherUrl('sign-in')
    return
  }
  push(tem)
}

const menuHn = (item: any, li: any) => {
  const itemTem = menu.find((l: any) => l.itemActive)

  if (!li) {
    if (itemTem && item.title !== itemTem.title) {
      itemTem.itemActive = false
    }
    item.itemActive = !item.itemActive
  } else {
    if (lastLi.value) {
      (lastLi.value as any).liActive = false
    }

    const tem = item.arr.find((l: any) => l.liActive)
    if (tem && li.title !== tem.title) {
      tem.liActive = false
    }
    li.liActive = true
    lastLi.value = li
    goUrl(li)
  }
}
const langHn = () => {
  flagLang.value = !flagLang.value
}
</script>
<style lang="scss" scoped>
$bg: #fff;

.header {
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 2;
  background: #FFFFFF;
  top: 0;
  left: 0;

  .content {
    width: 1200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;

      .logo {
        width: 102px;
        height: 24px;
        font-size: 28px;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: contain;
        // background-image: url(https://securitiesuserdata.oss-ap-northeast-1.aliyuncs.com/initial/96.png);
        background-image: url('../../assets/img/logo.png');
      }

      .left-menu {
        display: flex;
      }
    }

    .right {
      display: flex;

      .lang {
        height: 20px;
        width: 20px;
        // background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDJ7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggZD0iTS40IDMzLjZoMTk5LjJ2MTMyLjdILjRWMzMuNnoiIGZpbGw9InJlZCIvPjxwYXRoIGQ9Ik0uNCAzMy42SDEwMFYxMDBILjRWMzMuNnoiIGZpbGw9IiMwMDgiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTAuMiA1NC4zYy02LjggMC0xMi41IDUuNi0xMi41IDEyLjUgMCA2LjggNS42IDEyLjUgMTIuNCAxMi41IDcgMCAxMi42LTUuNSAxMi42LTEyLjRzLTUuNi0xMi42LTEyLjUtMTIuNnpNMzYuMiA2My45Yy0zLjUuOS03LjEgMS45LTEwLjYgMi45di4yYzMuNS45IDcuMSAxLjkgMTAuNiAyLjh2LTUuOXpNNTAuMyA0Mi4yaC0uMmMtLjkgMy41LTEuOSA3LjEtMi44IDEwLjZoNS45Yy0xLTMuNS0xLjktNy0yLjktMTAuNnpNNjQuMiA2OS44YzMuNS0uOSA3LjEtMS45IDEwLjYtMi44di0uMmMtMy41LS45LTcuMS0xLjktMTAuNi0yLjh2NS44ek01MC4xIDkxLjRoLjJjLjktMy41IDEuOS03LjEgMi44LTEwLjZoLTUuOWMxIDMuNiAyIDcuMSAyLjkgMTAuNnpNMzYuNyA3MS41Yy0yLjUgMi41LTUuMSA1LjEtNy42IDcuNyAzLjUtLjkgNy0xLjkgMTAuNS0yLjgtMS4xLTEuNy0yLTMuNC0yLjktNC45ek02Mi42IDQ1LjdjLTIuNiAyLjYtNS4yIDUuMS03LjcgNy42IDEuNi45IDMuMiAxLjggNC45IDIuOC45LTMuNSAxLjgtNyAyLjgtMTAuNHpNMzkuNSA1Ny4zYy0zLjUtLjktNy0xLjktMTAuNy0yLjlsNy44IDcuOGMxLTEuNiAxLjktMy4yIDIuOS00Ljl6TTYwLjkgNzYuNGMzLjUuOSA3IDEuOSAxMC4zIDIuOC0yLjUtMi41LTUtNS4xLTcuNS03LjYtLjkgMS41LTEuOCAzLjEtMi44IDQuOHpNNDUuNiA1My4zYy0yLjUtMi41LTUuMS01LjEtNy44LTcuNyAxIDMuNiAxLjkgNy4xIDIuOCAxMC42IDEuOC0xLjEgMy40LTIgNS0yLjl6TTU0LjggODAuNGMyLjUgMi41IDUuMSA1IDcuNyA3LjctMS0zLjUtMS45LTcuMS0yLjgtMTAuNS0xLjcgMS0zLjMgMS45LTQuOSAyLjh6TTYzLjcgNjIuMWMyLjUtMi41IDUuMS01LjEgNy43LTcuNi0zLjUuOS03IDEuOS0xMC41IDIuOCAxIDEuNyAyIDMuNCAyLjggNC44ek0zNy45IDg4YzIuNi0yLjYgNS4yLTUuMSA3LjctNy42LTEuNi0uOS0zLjItMS44LTQuOS0yLjgtLjkgMy40LTEuOSA2LjktMi44IDEwLjR6Ii8+PC9zdmc+);
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.item {
  position: relative;
  padding: 0 20px;
  cursor: pointer;

  .item-active {
    position: absolute;
    top: 120%;
    // left: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 2px;
    background: #009BFF;
  }


  .item-list {
    position: absolute;
    top: 200%;
    // left: 20px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    background: #FFFFFF;
    border-radius: 8px;
    min-width: 200px;
    padding: 8px;

    .li {
      padding: 16px 8px;
      font-weight: 500;
      color: #333333;
    }

    .li-active {
      background: rgba(49, 173, 253, 0.1);
      border-radius: 6px;
    }
  }
}
</style>