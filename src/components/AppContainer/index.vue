<template>
  <div>
    <Header />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
</script>
<style scoped>
.content {
  margin-top: 56px;
}
</style>
