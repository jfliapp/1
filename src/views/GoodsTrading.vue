<template>
  <section class="home-1">
    <div class="home-content">
      <div class="home-title">
        <div class="title fz-36 fw-500">商品交易</div>
        <div class="sub-title fz-24 fw-500">可交易贵金属、原油、铜等大宗商品</div>
      </div>
      <div class="home-btn flex">
        <div class="home1-btn-sty flex-c-c mr-20" @click="goOtherUrl('sign-in')">开始交易</div>
        <div class="home1-btn-sty flex-c-c" @click="goOtherUrl('sign-up')">开设账户</div>
      </div>
    </div>
  </section>
  <section class="home-2">
    <div class="home-2-t">
      <div class="item" v-for="(item, idx) in trades" :key="idx">
        <div>
          <img :src="item.img" />
        </div>
        <div>
          <div class="title fz-16 fw-500">{{ item.title }}</div>
          <div class="sub-title">{{ item.subTitle }}</div>
        </div>
      </div>
    </div>
    <div class="home-2-content">
      <div class="title fz-20 fw-500">极具竞争力的商品合约定价</div>
      <div class="table">
        <el-table :data="tableData" stripe :show-header="false">
          <el-table-column prop="name" align="center" />
          <el-table-column prop="a1" align="center" />
          <el-table-column prop="a2" align="center" />
          <el-table-column prop="a3" align="center" />
          <el-table-column prop="a4" align="center" />
        </el-table>
      </div>
      <div class="home2-btn-sty flex-c-c m-20" @click="goOtherUrl('差價合約交易規則.pdf')">了解更多</div>
    </div>
  </section>
  <section class="home-3">
    <div class="home-3-img">
      <img src="../assets/img/home-3.png" />
    </div>
    <div class="content">
      <div>
        <div class="fz-22"> 强大稳定的交易平台 </div>
        <div class="desc-content">
          <div class="item">
            <div class="title-top flex f-ai-c">
              <img src="../assets/img/trade-icon.png" />
              <div class="fz-18 fw-500 pl-14">衍生品交易首选平台</div>
            </div>
            <div class="sub-title">股票及衍生品交易首选平台</div>
          </div>
          <div class="item">
            <div class="title-top flex f-ai-c">
              <img src="../assets/img/trade-icon.png" />
              <div class="fz-18 fw-500 pl-14">丰富的交易品种</div>
            </div>
            <div class="sub-title">使用同一个账户交易股票融资、商品合约等多类产品</div>
          </div>
          <div class="item">
            <div class="title-top flex f-ai-c">
              <img src="../assets/img/trade-icon.png" />
              <div class="fz-18 fw-500 pl-14">多种工具和功能</div>
            </div>
            <div class="sub-title">各类分析指标助力您的交易</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <div class="home3-btn1-sty" @click="goOtherUrl('sign-in')">开始交易</div>
        <div class="home3-btn2-sty ml-30" @click="goOtherUrl('sign-up')">开设账户</div>
      </div>
    </div>
  </section>
  <section class="home-4">
    <div class="title fz-20 fw-500">常见问题解答</div>
    <div class="content">
      <div class="item" v-for="(item, idx) in questions" :key="idx">
        <div class="title fz-20 fw-500">
          {{ item.title }}
        </div>
        <div class="sub-title">{{ item.subTitle }}</div>
      </div>
    </div>
    <div></div>
  </section>
</template>
<script lang="ts" setup>
import img from '@/assets/img/home-1.png'
import { goOtherUrl } from '@/utils';
const trades = [
  {
    title: '公正的交易环境',
    subTitle: '实时对接各大交易所数据，为客户提供更具竞争力的价格优势',
    img
  },
  {
    title: '交易灵活性',
    subTitle: '我们的产品系列让您可以做多或做空，进行杠杆交易和对冲交易或对单个商品形成长远判断',
    img
  },
  {
    title: '稳定的交易平台',
    subTitle: '通过手机、平板电脑、笔记本电脑或多屏桌面设置，您可以快速而有效地访问市场',
    img
  },
  {
    title: '提供5X24小時的专家服務',
    subTitle: '您可在任何市场开放时间获得专业支持，包括技术援助、市场分析以及联系您的个人销售交易员',
    img
  }
]
const tableData = [
  {
    name: '合约名称',
    a1: 'XAUUSD',
    a2: 'XAGUSD',
    a3: 'OIL',
    a4: 'COOPPER',
  },
  {
    name: '合约规格',
    a1: '100盎司',
    a2: '5000盎司',
    a3: '1000桶',
    a4: '25,000磅',
  },
  {
    name: '价差',
    a1: '0.5',
    a2: '0.02',
    a3: '0.05',
    a4: '0.002',
  },
  {
    name: '即市保证金',
    a1: 'USD 1,000',
    a2: 'USD 1,000',
    a3: 'USD 1,000',
    a4: 'USD 1,000',
  },
  {
    name: '单笔交易手数（手)',
    a1: '0.1-10',
    a2: '0.1-10',
    a3: '0.1-10',
    a4: '0.1-10',
  },
  {
    name: '单边持仓显示（手）',
    a1: '100',
    a2: '100',
    a3: '100',
    a4: '100',
  }
]
const questions = [
  {
    title: 'Q1. 外汇领域重点关注哪些事件？',
    subTitle: '上市公司自身的经营状况会对股价有明显的影响，同时全球经济环境、上市公司所在地经济政策、利率政策等都会对上市股票造成影响。'
  },
  {
    title: 'Q2. 你们是否实物交割？',
    subTitle: '我们不提供实物交割。'
  },
  {
    title: 'Q3. 哪里可以了解到实时的信息？',
    subTitle: '在我们新闻资讯里可以查看到财经日历和快讯，财经日历和快讯为第三方提供，并不代表我们观点或构成建议。'
  },
  {
    title: 'Q4. 是否提供操作建议？',
    subTitle: '我们不提供具体的操作建议，我们的专家发表的观点或知识仅代表其个人或团队，不构成交易依据。'
  },
]
</script>

<style lang="scss" scoped>
$color: #707070;

@mixin btn-sty($bc: #FFFFFF, $c: #FFFFFF, $bg: transparent) {
  cursor: pointer;
  padding: 8px 52px;
  border-radius: 4px;
  opacity: 0.5;
  border: 1px solid $bc;
  color: $c;
  background: $bg;
}

.home1-btn-sty {
  @include btn-sty()
}

.home2-btn-sty {
  @include btn-sty(#E4E4E4, $color)
}

.home3-btn1-sty {
  @include btn-sty(#FFFFFF, #FFFFFF, #009BFF)
}

.home3-btn2-sty {
  @include btn-sty(#FFFFFF, #FFFFFF, #57D55D)
}

.home-1 {
  height: 400px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url('../assets/img/goodsTrade.png');
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .home-2-t {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: -40px;
    display: flex;
    justify-content: space-between;
    width: 1220px;
    height: 240px;
    padding: 30px 92px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px -5px 14px 0px rgba(158, 157, 157, 0.24);
    border-radius: 10px;

    .item {
      display: flex;
      flex-direction: column;
      width: 186px;

      img {
        width: 50px;
        height: 50px;
      }

      .sub-title {
        color: $color;
        padding-top: 16px;
      }
    }
  }

  .home-2-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 240px;

    .title {
      padding: 20px 0;
      color: #333333;
    }

    .table {
      width: 1100px;
    }
  }
}

.home-3 {
  background: #F8F8F8;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 43px 0 7px;

  .home-3-img {
    padding-top: 45px;

    img {
      width: 479px;
      height: 324px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    padding-left: 74px;

    .desc-content {
      .item {
        padding-top: 28px;
        display: flex;
        flex-direction: column;

        img {
          width: 20px;
          height: 20px;
        }

        .title-top {
          display: flex;
          align-items: center;

        }

        .sub-title {
          color: $color;
          padding-left: 34px;
        }
      }
    }

    .btn {
      margin-top: 28px;
      display: flex;
      padding-left: 34px;
    }
  }
}

.home-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 0;

  .content {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: column;
      width: 1014px;
      height: 100px;
      background: #F7F8F8;
      border-radius: 10px;
      padding: 20px 30px;
      box-sizing: border-box;
      margin-top: 20px;

      .sub-title {
        color: $color;
        padding-top: 12px;
        padding-left: 34px;
      }
    }

  }
}
</style>
