<template>
  <section class="home-1">
    <div class="home-content">
      <div class="home-title">
        <div class="title fz-36 fw-500">Demo company最新财经资讯</div>
        <div class="sub-title fz-24 fw-500">实时更新，第一手资讯，第一秒解读</div>
      </div>
      <div class="home-btn flex">
        <div class="home3-btn1-sty flex-c-c mr-20" @click="goOtherUrl('sign-in')">开始交易</div>
        <div class="home3-btn2-sty flex-c-c" @click="goOtherUrl('sign-up')">开设账户</div>
      </div>
    </div>
  </section>
  <section class="home-2">
    <div class="content">
      <div class="l">
        <div v-for="(item, idx) in newsTitle" :key="idx" class="item" :class="{ 'isActive': item.id === tabActive }"
          @click="handle(item.id)">
          {{ item.title }}
        </div>
      </div>
      <div class="r">
        <div class="title">
          {{ name }}
        </div>
        <div class="tab-list">
          <div class="item flex" v-for="item in newsList" :key="item.id">
            <div class="item-left">
              <img :src="item.CoverImgUrl">
            </div>
            <div class="item-right">
              <div class="t">
                <div class="fz-20 fw-500">{{ item.Caption }}</div>
                <div v-html="item.Content"></div>
              </div>
              <div class="b">{{ item.createdAtTxt }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { service } from "@/axios";
import { goOtherUrl } from "@/utils";
import { useLangStore } from "@/stores";
const newsTitle = [
  { id: '2', title: '公告' },
  { id: '4', title: '行業新聞' }
]
const tabActive = ref('2')
const newsList = ref()
const route = useRoute()
const langStore = useLangStore()
tabActive.value = route.params.id as string
onMounted(async () => {
  await getData(tabActive.value)
})
watch(() => route.params, (n) => {
  tabActive.value = n.id as string
}, {
  immediate: true
})
const name = computed(() => newsTitle.find(item => item.id === tabActive.value)!.title)
function pad(timeEl: number, total = 2, str = '0') {
  return timeEl.toString().padStart(total, str)
}
const filterTime = (n: number) => {
  const timer = new Date(n)
  const year = timer.getFullYear()
  const month = timer.getMonth() + 1 // 由于月份从0开始，因此需加1
  const day = timer.getDate()
  const hour = timer.getHours()
  const minute = timer.getMinutes()
  const second = timer.getSeconds()
  return `${pad(year, 4)}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(minute)}:${pad(second)}`
}
const getData = async (id: string) => {
  const res = await service({
    url: '/api/public/sysMsgOrNotice',
    method: 'post',
    data: {
      noticetype: Number(id),
      language: langStore.lang || 'zh-hk'
    }
  })
  if (res.data.error === 'OK') {
    const list = res.data.list
    const data = list.map((item: any) => {
      item.createdAtTxt = filterTime(item.createdat)
      return item
    })
    newsList.value = data
  }
  console.log(res, 'res--------res')
}

const handle = (idx: string) => {
  tabActive.value = idx
  getData(idx)
}
</script>
<style lang="scss" scoped>
$color: #707070;

.isActive {
  background: #4393ef;
  color: #FFFFFF;
}

.home3-btn1-sty {
  @include btn-sty(transparent, #FFFFFF, #009BFF, 1)
}

.home3-btn2-sty {
  @include btn-sty(transparent, #FFFFFF, #57D55D, 1)
}

.home-1 {
  height: 400px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url('../assets/img/foreignTrade.png');
  background-size: 100% 100%;

  .home-content {
    padding-left: 443px;

    .home-title {
      display: flex;
      flex-direction: column;
    }

    .home-btn {
      padding-top: 40px;
    }
  }
}

.home-2 {
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 1100px;
    min-height: 620px;
    padding: 30px;
    display: flex;
    justify-content: center;
    padding: 30px 0;

    .l {
      width: 160px;
      display: flex;
      flex-direction: column;
      padding-top: 20px;

      .item {
        padding: 10px 0 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        box-sizing: border-box;
      }
    }

    .r {
      width: 890px;
      box-sizing: border-box;
      margin-left: 40px;
      border-left: 1px solid #ebebeb;

      .title {
        margin-left: 30px;
        border-bottom: 1px solid #ebebeb;
        padding: 20px 0;
      }

      .tab-list {
        display: flex;
        flex-direction: column;

        .item {
          margin-left: 30px;
          border-bottom: 1px solid #ebebeb;
          padding: 20px 0;

          .item-left {
            img {
              width: 150px;
              height: 100px;
            }
          }

          .item-right {
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            justify-content: space-between;

            .t {
              .sub-title {}
            }

            .b {
              color: #a8a8a8;
            }
          }
        }
      }

    }
  }
}
</style>
