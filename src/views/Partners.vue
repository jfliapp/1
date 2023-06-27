<template>
  <section class="home-1">
    <div class="title">
      <div class="fz-36 fw-600">为何选择Demo company？</div>
      <div class="sub-title fz-24">
        通过一家安全的以客户为中心的供应商进行外汇交易
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

    .sub-title {
      color: #E1E1E1;
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
