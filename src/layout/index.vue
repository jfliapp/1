<template>
  <div class="home">
    <Navbar />
    <router-view :key="key"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from './components/Navbar.vue';

@Options({
  components: {
    Navbar,
  },
})
export default class layout extends Vue {
  get key() {
    return this.$route.path
  }
}
</script>
