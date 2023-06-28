<template>
  <section class="home-1">
    <div class="title">
      <h2>专业金融服务平台</h2>
      <div class="home-bot">
        <div class="sub-title">
          <h2>安全、公平、透明的交易环境</h2>
          <h5 class="tip">A secure, fair, and transparent trading environment</h5>
        </div>
        <div class="btn flex">
          <div class="home1-btn-sty flex-c-c mr-20" @click="goOtherUrl('sign-in')">开始交易</div>
          <div class="home1-btn-sty flex-c-c" @click="goOtherUrl('sign-up')">开设账户</div>
        </div>
      </div>
    </div>
  </section>
  <section class="home-2">
    <div class="item" v-for="(item, idx) in home2" :key="idx">
      <div>
        <img :src="item.img" />
      </div>
      <div class="fz-24">{{ item.title }}</div>
      <div class="item-tip fz-14">{{ item.subTitle }}</div>
    </div>
  </section>
  <section class="home-3">
    <div>
      <img src="../assets/img/home-3.png" />
    </div>
    <div class="content">
      <div>
        <h3> 股票交易 </h3>
        <div class="desc">
          <p>Initial Capital Pro适合所有投资者,是普通投资者的首选</p>
          <p>买卖美股、港股、台股等世界各地超过50间交易所的核心和新兴市场超<br />22000支股票</p>
        </div>
      </div>
      <div class="btn">
        <div class="home3-btn-sty" @click="push('foreignTrading')">了解更多</div>
      </div>
    </div>
  </section>
  <section class="home-4">
    <div class="content">
      <div>
        <h3> 快速、稳定的交易平台 </h3>
        <div class="desc">
          简单、快捷、易用的平台，所有品种触手可及,Initial Capital是一款基于网<br />络的应用程序，适合PC端或移动端的网页登录交易
        </div>
      </div>

    </div>
    <div>
      <img src="../assets/img/home-4.png" />
    </div>
  </section>
  <section class="home-5">
    <div class="home-5-content">
      <div>
        <img src="../assets/img/home-5.png" />
      </div>
      <div class="content">
        <div>
          <h3> 智能、安全的交易平台 </h3>
          <div class="desc">
            <p>我们搭建数字平台以促进多资产市场准入，并为各种规模的客户提供专业<br />级工具、行业领先的价格和世界一流的服务 </p>
            <p>提供可在PC或移动端下载安装的交易平台,无论您身在何地，都可以通过安<br />装下载交易平台进行交易</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home-download">
      <div class="item" v-for="(item, idx) in home5Download" :key="idx">
        <div>
          <img :src="item.img" />
        </div>
        <div class="item-content">
          <div class="fz-10 item-t">Download for</div>
          <div class="fz-16 item-b">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </section>
  <section class="home-6">
    <div class="fz-30">携手Initial Capital 开始交易</div>
    <div class="btn">
      <div class="home3-btn-sty" @click="goOtherUrl('sign-up')">开设账户</div>
    </div>
    <div class="trade">
      <div class="item" v-for="(item, idx) in home6" :key="idx">
        <div>
          <img :src="item.img" />
        </div>
        <div class="item-content">
          <div class="fz-17 item-t">{{ item.title }}</div>
          <div class="item-b">{{ item.subTitle }}</div>
        </div>
      </div>
    </div>
  </section>
  <section class="home-7">
    <div>
      <img src="../assets/img/home-7.png" />
    </div>
    <div class="content">
      <div class="item" v-for="(item, idx) in home7" :key="idx">
        <h3 class="title fz-16 text-overflow">{{ item.title }}</h3>
        <div class="desc fz-12">
          {{ item.subTitle }}
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import img from '@/assets/img/home-1.png'
import { useRouter } from "vue-router";
import { goOtherUrl } from '@/utils';
const home2 = [
  {
    title: '灵活交易',
    subTitle: '可以做多或做空，进行杠杆交易和对冲交易或对单个商品形成长远判断',
    img
  },
  {
    title: '数据透明',
    subTitle: '对接各大交易所数据，经济信息发布和实时图表，为您提供更具竞争力的实时价格优势',
    img
  },
  {
    title: '24h 专家服务',
    subTitle: '市场开放时间获得专业支持，包括技术援助、市场分析以及联系您的个人销售交易员',
    img
  },
  {
    title: '资金安全',
    subTitle: '对接正规银行、金融机构，客户资金受严格监管，网站和交易平台具备强大防攻击能力',
    img
  }
]
const home5Download = [
  {
    title: 'Windows',
    img
  },
  {
    title: 'Mac OS',
    img
  },
  {
    title: 'Android',
    img
  },
  {
    title: 'IPhone',
    img
  }
]
const home6 = [
  {
    title: '1.申请',
    subTitle: '填写真仓交易帐户申请表',
    img
  },
  {
    title: '2.注资',
    subTitle: '透过信用卡、电子钱包或银行转帐存入资金',
    img
  },
  {
    title: '3.交易',
    subTitle: '在全球市场交易股票、外汇、指数和其他金融衍生品',
    img
  }
]
const home7 = [
  {
    title: '要深刻认识恢复和扩大消费是推进中国式现要深刻认识恢复和扩大消费是推进中国式现',
    subTitle: '“恢复和扩大消费”调研协商座谈会20日在京召开，就有关民主党派中央、全国工商联和无党派人士代表开展的相关调研…',
  },
  {
    title: '6月1年期、5年期LPR均下降10个基点',
    subTitle: '100万元房贷30年减少2.1万元 | 业界认为下半年存在降准可能',
  },
  {
    title: 'AI概念再爆发！多股刷新历史高点芯片巨头…',
    subTitle: 'A股三大股指走势分化，深市相对较强。港股一路向下，恒生指数一度跌超2%，恒生科技指数一度跌超3%…',
  },
  {
    title: '阿里集团宣布换帅：张勇9月卸任董事长',
    subTitle: '经阿里巴巴控股集团董事会同意，张勇将于今年9月10日卸任阿里巴巴控股集团董事会主席兼CEO职务…',
  }
]
const { push } = useRouter()
</script>
<style lang="scss" scoped>
$color: #707070;

.home1-btn-sty {
  @include btn-sty()
}

.home3-btn-sty {
  width: 180px;
  @include btn-sty(#FFFFFF, #FFFFFF, #009BFF)
}

.home-1 {
  height: 451px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../assets/img/home-1.png');
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

  .item {
    width: 260px;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1F1F1F;

    img {
      width: 48px;
      height: 48px;
    }

    .item-tip {
      color: $color;
    }
  }
}

.home-3 {
  height: 351px;
  background: #F8F8F8;
  display: flex;
  justify-content: center;
  padding-top: 58px;
  box-sizing: border-box;

  img {
    width: 360px;
    height: 244px;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding-left: 74px;

    .desc {
      color: $color;
    }

    .btn {
      padding-top: 28px;
    }
  }
}

.home-4 {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 130px 0 0;

  img {
    width: 453px;
    height: 304px;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding-top: 76px;
    padding-right: 64px;

    .desc {
      color: $color;
    }
  }
}

.home-5 {
  position: relative;
  padding: 138px 0;

  .home-5-content {
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    img {
      width: 360px;
      height: 244px;
    }

    .content {
      display: flex;
      flex-direction: column;
      padding-left: 112px;
      padding-top: 39px;

      .desc {
        color: $color;
      }
    }
  }

  .home-download {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -26px;
    width: 1008px;
    height: 100px;
    background: #FFFFFF;
    border-radius: 10px;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-around;

      img {
        width: 38px;
        height: 32px;
      }

      .item-content {
        padding-left: 22px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .item-t {
          color: $color;
        }

        .item-b {
          color: #333333;
        }
      }
    }
  }
}

.home-6 {
  background: #F8F8F8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 58px 0;
  box-sizing: border-box;

  .btn {
    padding: 33px 0 60px;
  }

  .trade {
    display: flex;
    justify-content: center;

    .item {
      display: flex;

      img {
        width: 69px;
        height: 66px;
      }

      .item-content {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        box-sizing: border-box;
        width: 200px;

        .item-t {
          color: #333333;
        }

        .item-b {
          color: $color;
        }
      }

      &:not(:last-child) {
        padding-right: 100px;
      }
    }
  }
}

.home-7 {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 60px 0;

  img {
    width: 280px;
    height: 180px;
  }

  .content {
    padding-left: 64px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 1000px;

    .item {
      padding-bottom: 20px;
      padding-right: 80px;

      .title {
        width: 324px;
      }

      .desc {
        padding-top: 8px;
        color: $color;
        width: 324px;
        @include text-overflow-line(2);
        line-height: 22px;
      }
    }
  }
}
</style>
