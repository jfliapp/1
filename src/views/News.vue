<template>
  <section class="home-1">
    <div class="title">
      <h2>专业金融服务平台</h2>
      <div class="home-bot">
        <div class="sub-title">
          <h2>安全、公平、透明的交易环境</h2>
          <h5 class="tip">A secure, fair, and transparent trading environment</h5>
        </div>
        <div class="btn">
          <!-- <el-button>开始交易</el-button> -->
          <el-button>{{ $t('AboutUs') }}</el-button>
          <el-button>开设账户</el-button>
        </div>
      </div>
    </div>
  </section>
  <section class="home-2">
    <div class="content">
      <el-tabs tab-position="left" class="content-tab" v-model="tabActive" @tab-change="tabChange">
        <el-tab-pane label="公告" name="2">
          <div class="title">
            公告
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
        </el-tab-pane>
        <el-tab-pane label="行業新聞" name="4">
          <div class="title">
            行業新聞
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

        </el-tab-pane>
      </el-tabs>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { service } from "@/axios";
const tabActive = ref('1')
const newsList = ref()
const route = useRoute()
tabActive.value = route.params.id as string
onMounted(async () => {
  await getData(tabActive.value)
})
watch(() => route.params, (n) => {
  tabActive.value = n.id as string
}, {
  immediate: true
})
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
      language: "zh-hk"
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
const tabChange = async (item: string) => {
  await getData(item)
}
</script>
<style lang="scss" scoped>
$color: #707070;

.home-1 {
  height: 320px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../assets/img/partners.png');
  background-size: 100%;
  background-repeat: no-repeat;

  .title {
    display: flex;
    flex-direction: column;

    .home-bot {
      display: flex;
      margin-top: 36px;

      .sub-title {
        .tip {
          opacity: .5;
        }
      }

      .btn {
        margin-left: 188px;
      }
    }
  }
}

.home-2 {
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 1100px;
    min-height: 600px;
    padding: 30px;

    .content-tab {
      height: 600px;

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
