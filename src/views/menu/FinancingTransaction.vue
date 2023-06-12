<template>
  <div>
    <div>{{ $t('Text47') }}</div>
    <div>{{ $t('Text48') }}</div>
    <div>{{ $t('StartTrading') }}</div>
    <div>{{ $t('OpenAnAccount') }}</div>
    <hr/>
    <div>{{ $t('Text38') }}</div>
    <div>{{ $t('Text49') }}</div>
    <div>{{ $t('Text40') }}</div>
    <div>{{ $t('Text50') }}</div>
    <div>{{ $t('Text42') }}</div>
    <div>{{ $t('Text43') }}</div>
    <div>{{ $t('Text44') }}</div>
    <div>{{ $t('Text45') }}</div>
    <hr/>
    <Instruments />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Instruments from '@/views/components/Instruments.vue';

@Options({
  components: {
    Instruments,
  },
})
export default class Navbar extends Vue {
}
</script>

