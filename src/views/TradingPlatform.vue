<template>
  <section class="home-1">
    <div class="left">
      <div class="content fz-20">
        <div class="fz-36 fw-600">Demo company</div>
        <div class="pt-34">
          Demo company 是我们屡获殊荣的交易平台，无论您是长期投资者还是全球市场上的活跃交易者，该平台都能让您主宰自己的交易。
        </div>
        <div class="pt-20">
          借助 Demo company，您可以访问所有可交易的金融工具和多种风险管理工具，并能获取相应功能以在任意 PC、平板电脑或智能手机上迅速直观地执行交易。
        </div>
      </div>
      <div class="pt-40 flex">
        <div class="home1-btn1-sty flex-c-c mr-20" @click="goOtherUrl('sign-in')">开始交易</div>
        <div class="home1-btn2-sty flex-c-c" @click="goOtherUrl('sign-up')">开设账户</div>
      </div>
    </div>
    <img src="../assets/img/tradingPlatform-top.png" />
  </section>
  <section class="home-3">
    <div class="content">
      <img src="../assets/img/tradePlatform-1.png" />
      <div class="l">
        <div class="fz-26 fw-500"> 移动性 </div>
        <div class="desc">
          在不同设备之间无缝移动，随时随地管控您的投资。 在智能手机上开始，然后在平板电脑上继续，最后在台式机上完成。 设置和偏好将随您转移，您始终可以接着进行设定。
        </div>
      </div>
    </div>
  </section>
  <section class="home-4">
    <div class="content">
      <div class="l">
        <div class="fz-26 fw-500"> 掌握最新信息 </div>
        <div class="desc">
          获取新闻推送、市场数据、经济信息发布和实时图表。 标注图表、使用技术分析工具以及监管您需要获取的信息，从而确保高效交易。
        </div>
      </div>
      <img src="../assets/img/tradePlatform-2.png" />
    </div>
  </section>
  <section class="home-5">
    <div class="content">
      <img src="../assets/img/tradePlatform-3.png" />
      <div class="l">
        <div class="fz-26 fw-500"> 直观交易 </div>
        <div class="desc">
          界面快捷、可靠且直观。 不会陷入交易运作方式的泥沼中。 从图表或专属交易模块进行交易。 作出交易决策之后，可迅速执行交易而无需思考执行方式。
        </div>
      </div>
    </div>
  </section>

  <section class="home-6">
    <div class="fz-30 pd-54">平台特色和规格</div>
    <div class="content">
      <div class="item" v-for="(item, idx) in tradingPlatformIcon" :key="idx">
        <img src="../assets/img/tradingPlatform-icon-1.png" />
        <div class="right">
          <div class="fz-18 fw-500">{{ item.title }}</div>
          <div class="sub-title fz-12">{{ item.subTitle }}</div>
        </div>
      </div>
    </div>

  </section>
</template>
<script setup lang="ts">
import img from '@/assets/img/tradingPlatform-icon-1.png'
import { goOtherUrl } from '@/utils';
const tradingPlatformIcon = [
  {
    title: '支持',
    subTitle: 'Demo company提供5*24小时的在线或电话支持服务。 可随时从平台上访问支持服务台。',
    img
  },
  {
    title: '跨资产类别交易',
    subTitle: '交易Demo company的所有资产，包括大宗商品、外汇、指数、数字货币。',
    img
  },
  {
    title: '一个账户',
    subTitle: '通过 Demo company 访问您的账户，你可在PC和移动端无缝连接。',
    img
  },
  {
    title: '可靠性',
    subTitle: 'Demo company 稳定可靠，能让您随时随地进行交易。',
    img
  },
  {
    title: '信息',
    subTitle: '从推送通知到新闻频道，只需一个平台，您就可以进入全球金融市场。',
    img
  },
  {
    title: '可用性',
    subTitle: '多设备使用，兼容各种IOS，安卓设备，PC浏览器，快速稳定。',
    img
  },
]

</script>
<style lang="scss" scoped>
$color: #707070;

.home1-btn1-sty {
  @include btn-sty(#FFFFFF, #FFFFFF, #009BFF, 1)
}

.home1-btn2-sty {
  @include btn-sty(#FFFFFF, #FFFFFF, #57D55D, 1)
}

.home-1 {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../assets/img/tradingPlatform.png');
  background-size: 100%;
  background-repeat: no-repeat;

  .left {
    display: flex;
    flex-direction: column;

    .content {
      width: 675px;
    }

    .btn {
      margin-top: 30px;
    }
  }

  img {
    width: 507px;
    height: 321px;
    margin-left: 100px;
  }
}

.home-3 {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 122px;

  img {
    width: 316px;
    height: 364px;
  }

  .content {
    display: flex;
    align-items: center;

    .l {
      padding-left: 234px;

      .desc {
        margin-top: 34px;
        color: $color;
        width: 540px;
      }
    }
  }
}

.home-4 {
  display: flex;
  background: #F8F8F8;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 122px;

  img {
    width: 316px;
    height: 364px;
    margin-left: 155px;
  }

  .content {
    display: flex;
    align-items: center;

    .l {

      .desc {
        margin-top: 34px;
        color: $color;
        width: 540px;
      }
    }
  }
}

.home-5 {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 122px;

  img {
    width: 316px;
    height: 364px;
  }

  .content {
    display: flex;
    align-items: center;

    .l {
      padding-left: 234px;

      .desc {
        margin-top: 34px;
        color: $color;
        width: 540px;
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
  box-sizing: border-box;
  padding-bottom: 60px;

  .content {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;

    .item {
      display: flex;

      &:not(:nth-child(2n)) {
        margin: 0 200px 48px 0;
      }

      img {
        width: 88px;
        height: 88px;
      }

      .right {
        display: flex;
        flex-direction: column;
        width: 290px;
        padding: 6px 0 0 28px;

        .sub-title {
          color: $color;
          padding-top: 10px;
        }
      }
    }
  }

}
</style>
