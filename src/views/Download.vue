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
  <section class="home-2">
    <div class="fz-30 pd-54">为何选择我们的交易平台 ？</div>
    <div class="content">
      <div class="item" v-for="(item, idx) in downLoads" :key="idx">
        <img src="../assets/img/tradingPlatform-icon-1.png" />
        <div class="title fz-18 fw-500">{{ item.title }}</div>
      </div>
    </div>
  </section>

  <section class="home-3">
    <div class="content">
      <div class="top">
        <div class="fz-30">为何选择我们的交易平台 ？</div>
        <div class="fz-18 sub-title">覆盖iOS、Android、Windows、Mac多个平台，支持全业务功能</div>
      </div>
      <div class="content-l">
        <div class="download-platform">
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
        <div class="qrcode">
          <div class="item">
            <img src="../assets/img/qrcode-ios.png" />
            <div>IOS</div>
          </div>
          <div class="item ml-66">
            <img src="../assets/img/qrcode-ios.png" />
            <div>IOS</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-r">
      <img src="../assets/img/download-3.png" />
    </div>
  </section>

  <section class="home-4">
    <div class="top">
      <div class="fz-30">上万市场，尽在指尖</div>
      <div class="fz-20">我们的移动交易应用程序可让您交易丰富的金融市场</div>
    </div>
    <div class="content">
      <div class="item" v-for="(item, idx) in downloadFooter" :key="idx">
        <div class="title fz-24 fw-500">{{ item.title }}</div>
        <div class="sub-title fz-14">{{ item.subTitle }}</div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import img from '@/assets/img/tradingPlatform-icon-1.png'
import { goOtherUrl } from '@/utils';
const downLoads = [
  {
    title: '专为所有主流手机和平板电脑设计',
  },
  {
    title: '定期更新，尽可能为您提供最佳交易体验',
  },
  {
    title: '完全免费下载',
  },
  {
    title: '采用安全的256位，SSL加密，让您放心 交易',
  },
  {
    title: '获取有关外汇、股票和指数等市场的独家数据和分析',
  },
  {
    title: '无需登录即可查看实时价格的独家数据和分析',
  },
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

const downloadFooter = [
  {
    title: '01. 商品',
    subTitle: '参与全球最大的大宗商品交易市场，品种涵盖黄金、白银、原油等。'
  },
  {
    title: '02. 外汇',
    subTitle: '低点差交易多种外汇货币对，包括欧元/美元、英镑/美元、欧元/英镑等主流货币对'
  },
  {
    title: '03. 指数',
    subTitle: '交易丰富环球股指，更可24小时交易恒生指数、纳斯达克指数、标普500指数等'
  },
  {
    title: '04. 数字币',
    subTitle: '锁定风险的交易方式，有效对冲相关标的其他交易方式的风险'
  }
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

.home-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 60px;

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 1238px;

    .item {
      display: flex;
      align-items: center;
      width: 390px;
      height: 70px;
      box-sizing: border-box;
      background: #FFFFFF;
      box-shadow: 0px -5px 14px 0px rgba(158, 157, 157, 0.24);
      border-radius: 10px;

      &:not(:nth-child(3n)) {
        margin: 0 34px 29px 0;
      }

      img {
        width: 26px;
        height: 23px;
        box-sizing: border-box;
        margin: 0 20px;
      }

      .title {
        padding: 10px 24px 10px 0;
        color: #707070;
      }
    }
  }
}

.home-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
  box-sizing: border-box;
  padding-bottom: 70px;

  .content {
    display: flex;
    flex-direction: column;

    .top {
      padding: 52px 0;

      .sub-title {
        color: #707070;
      }
    }

    .content-l {
      display: flex;
      flex-direction: column;

      .download-platform {
        width: 340px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;

        .item {
          display: flex;
          align-items: center;

          &:not(:nth-child(2n)) {
            padding: 0 60px 33px 0;
          }

          img {
            width: 38px;
            height: 32px;
          }

          .item-content {
            padding-left: 11px;
            display: flex;
            flex-direction: column;

            .item-t {
              color: $color;
            }

            .item-b {
              color: #333333;
            }
          }
        }
      }

      .qrcode {
        display: flex;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 140px;
            height: 140px;
          }
        }
      }
    }
  }

  .content-r {
    margin-top: 170px;
    margin-left: 90px;

    img {
      width: 560px;
      height: 349px;
    }
  }

}

.home-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 1000px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
      background: #FFFFFF;
      width: 440px;

      &:not(:nth-child(2n)) {
        margin: 0 120px 50px 0;
      }

      .sub-title {
        color: #707070;
      }
    }
  }
}
</style>
