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
      <div class="title fz-20">合作伙伴</div>
      <div class="about">
        <div class="item" v-for="(item, idx) in about" :key="idx">
          <img :src="item.img" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import img from '@/assets/img/partner-1.png'
const about = [
  {
    img
  },
  {
    img
  },
  {
    img
  },
  {
    img
  },
  {
    img
  },
  {
    img
  },
  {
    img
  },
  {
    img
  },
  {
    img
  },
  {
    img
  },
  {
    img
  },
  {
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    padding: 20px 0;
  }

  .content {
    width: 1215px; //手动算出长度
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .about {
      // display: grid;
      // grid-template-columns: repeat(auto-fill, 225px);
      // grid-template-rows: 125px;
      // grid-gap: 10px 20px;
      display: flex;
      flex-wrap: wrap;


      .item {
        width: 227px;
        height: 127px;
        overflow: hidden;
        padding-bottom: 20px;

        &:not(:nth-child(5n)) {
          padding-right: 20px;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
