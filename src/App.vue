<template>
  <div class="container">
    <AppContainer />
  </div>
</template>

<script setup lang="ts">
import AppContainer from '@/components/AppContainer/index.vue'
</script>
<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
