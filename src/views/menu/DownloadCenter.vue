<template>
  <div>
    <InitialCapital />
    <hr/>
    <div>{{ $t('Text69') }}</div>
    <div>{{ $t('Text70') }}</div>
    <div>{{ $t('Text71') }}</div>
    <div>{{ $t('Text72') }}</div>
    <div>{{ $t('Text73') }}</div>
    <div>{{ $t('Text74') }}</div>
    <div>{{ $t('Text75') }}</div>
    <hr/>
    <div>{{ $t('Text76') }}</div>
    <div>{{ $t('Text77') }}</div>
    <hr/>
    <div>{{ $t('Text78') }}</div>
    <div>{{ $t('Text79') }}</div>
    <hr/>
    <div>{{ $t('Commodities') }}</div>
    <div>{{ $t('CommoditiesText') }}</div>
    <div>{{ $t('Forex') }}</div>
    <div>{{ $t('ForexText') }}</div>
    <div>{{ $t('Index') }}</div>
    <div>{{ $t('IndexText') }}</div>
    <div>{{ $t('Cpytro') }}</div>
    <div>{{ $t('CpytroText') }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import InitialCapital from '@/views/components/InitialCapital.vue';

@Options({
  components: {
    InitialCapital,
  },
})
export default class Navbar extends Vue {
}
</script>

