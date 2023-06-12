<template>
  <div>
    <div>{{ $t('Text80') }}</div>
    <div>{{ $t('Text81') }}</div>
    <div>{{ $t('StartTrading') }}</div>
    <div>{{ $t('OpenAnAccount') }}</div>
    <hr/>
    <div>{{ $t('Announcement') }}</div>
    <div>{{ $t('IndustryNews') }}</div>
    <hr/>
    <div>{{ $t(type == 1 ? 'Announcement' : 'IndustryNews') }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Navbar extends Vue {
  type: Number = 1

  created() {
    const { params } = this.$route
    const { type } = params
    this.type = Number(type)
  }
}
</script>

