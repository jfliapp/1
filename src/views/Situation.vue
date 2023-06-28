<template>
  <section class="home-1">
  </section>
  <section class="home-2">
    <div class="fz-20 fw-500 title">我们的服务</div>
    <div class="content">
      <div>我们搭建数字平台以促进多资产市场准入，并为各种规模的客户提供专业级工具、行业领先的价格和</div>
      <div>世界一流的服务</div>
    </div>
    <div class="divider">
    </div>
  </section>
  <section class="home-3">
    <div class="item" v-for="(item, idx) in home3" :key="idx">
      <div>
        <img :src="item.img" />
      </div>
      <div class="title fz-16 fw-500">{{ item.title }}</div>
      <div class="sub-title">{{ item.subTitle }}</div>
    </div>
  </section>
  <section class="home-4">
    <div>
      <img :src="img" />
    </div>
    <div class="content">
      <div class="item" v-for="(item, idx) in home4" :key="idx">
        <div class="title fz-18 fw-500">{{ item.title }}</div>
        <div class="sub-title">{{ item.subTitle }}</div>
      </div>
    </div>
  </section>
  <section class="home-5">
    <div class="fz-20 fw-500">一体化的投资管理</div>
    <div class="content">
      <div class="item" v-for="(item, idx) in home5" :key="idx">
        <div>
          <img :src="item.img" />
        </div>
        <div class="title fz-16 fw-500">{{ item.title }}</div>
        <div class="sub-title">{{ item.subTitle }}</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import img from '@/assets/img/home-1.png'
const home3 = [
  {
    title: '投资和交易',
    subTitle: '通过一个帐户，交易商品、外汇、指数、期权等合约产品，捕捉各个市场和品种的投资机会',
    img
  },
  {
    title: '合作伙伴关系',
    subTitle: '过开放式银行解决方案，我们为 120 多家银行和经纪商以及300 多家金融中介机构提供支持，为他们提供多资产执行、主经纪商 服务和交易技术',
    img
  }
]
const home4 = [
  {
    title: '投资和交易',
    subTitle: '通过一个帐户，交易商品、外汇、指数、期权等合约产品，捕捉各个市场和品种的投资机会',
    img
  },
  {
    title: '投资和交易',
    subTitle: '通过一个帐户，交易商品、外汇、指数、期权等合约产品，捕捉各个市场和品种的投资机会',
    img
  },
  {
    title: '合作伙伴关系',
    subTitle: '过开放式银行解决方案，我们为 120 多家银行和经纪商以及300 多家金融中介机构提供支持，为他们提供多资产执行、主经纪商 服务和交易技术',
    img
  }
]
const home5 = [
  {
    title: '丰富的产品',
    subTitle: '通过一个帐户交易多个市场和品种，我们从各大交易所获取深度流动性的优势',
    img
  },
  {
    title: '稳定的平台',
    subTitle: '快速执行交易指令，并不断优化执行体验，降低拒单率',
    img
  },
  {
    title: '安全的保障',
    subTitle: '客户资金受严格监管，网站和交易平台具备强大防攻击能力',
    img
  }
]
</script>

<style lang="scss" scoped>
$color: #707070;

.home-1 {
  height: 320px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../assets/img/situation.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

.home-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  .title {
    padding: 20px;
  }

  .divider {
    width: 814px;
    height: 1px;
    background: #EBEBEB;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 28px;
  }
}

.home-3 {
  display: flex;
  justify-content: center;
  padding: 44px 0;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:first-child {
      padding-right: 160px;
    }

    img {
      width: 500px;
      height: 218px;
    }

    .title {
      padding-top: 28px;
      color: #333333
    }

    .sub-title {
      color: $color;
      width: 400px;
      text-align: center;
    }
  }
}

.home-4 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 52px 0;
  background: #F8F8F8;

  img {
    width: 263px;
    height: 283px;
  }

  .content {
    height: 283px;
    padding-left: 106px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .item {
      .sub-title {
        color: $color;
      }
    }
  }
}

.home-5 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;

  .content {
    display: flex;
    padding: 42px 0;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:not(:last-child) {
        padding-right: 150px;
      }

      img {
        width: 56px;
        height: 56px;
      }

      .title {
        color: #333333;
        padding: 17px 9px;
      }

      .sub-title {
        color: $color;
        width: 280px;
        text-align: center;
      }
    }
  }
}
</style>
