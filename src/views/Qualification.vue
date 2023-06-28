<template>
  <section class="home-1">
    <div class="content">
      <div class="title fz-36 fw-600"> 专业资质 </div>
      <div class="sub-title fz-24"> Demo website Company受SFC证券及期货事务监察委员会监管 </div>
    </div>
  </section>
  <section class="home-2">
    <div class="content">
      <div class="text-center fz-20 fw-500"> 持牌编号: DEMOID </div>
      <div class="sub-title fz-16">
        查询链接：
        <a href="https://apps.sfc.hk/publicregWeb/searchByName?locale=zh">
          https://apps.sfc.hk/publicregWeb/searchByName?locale=zh
        </a>
      </div>
    </div>
    <div>
      <img src="../assets/img/about-aptitude-1.png" />
    </div>
  </section>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
$color: #707070;

.home-1 {
  height: 320px;
  color: #fff;
  display: flex;
  align-items: center;
  background: url('../assets/img/about-aptitude.png');
  background-size: 100%;
  background-repeat: no-repeat;

  .content {
    display: flex;
    flex-direction: column;
    padding-left: 400px;

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
  padding: 40px 0 60px;

  img {
    width: 1079px;
    height: 678px;
    padding: 30px 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
}
</style>
