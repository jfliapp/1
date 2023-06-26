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
          <el-button>开始交易</el-button>
          <el-button>开设账户</el-button>
        </div>
      </div>
    </div>
  </section>
  <section class="home-2">

    <div class="content">
      <h2 class="title">合作伙伴</h2>
      <div class="about">
        <div class="item" v-for="(item, idx) in 17" :key="idx">
          <img src="https://demo.hlives.vip/static/img/h1.6d50377.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import img from '@/assets/img/home-1.png'
const abouts = [
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
  height: 451px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
  background: url('../assets/img/home-1.png');

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
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    padding: 20px;
  }

  .content {
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .about {
      display: grid;
      grid-template-columns: repeat(auto-fill, 225px);
      grid-template-rows: 125px;
      grid-gap: 10px 20px;

      .item {
        width: 225px;
        height: 125px;
        border: 1px solid #ccc;
        overflow: hidden;
      }
    }
  }
}
</style>
