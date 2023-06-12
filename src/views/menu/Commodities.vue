<template>
  <div>
    <div>{{ $t('Text36') }}</div>
    <div>{{ $t('Text37') }}</div>
    <div>{{ $t('StartTrading') }}</div>
    <div>{{ $t('OpenAnAccount') }}</div>
    <hr/>
    <div>{{ $t('Text38') }}</div>
    <div>{{ $t('Text39') }}</div>
    <div>{{ $t('Text40') }}</div>
    <div>{{ $t('Text41') }}</div>
    <div>{{ $t('Text42') }}</div>
    <div>{{ $t('Text43') }}</div>
    <div>{{ $t('Text44') }}</div>
    <div>{{ $t('Text45') }}</div>
    <hr/>
    <div>{{ $t('Text46') }}</div>
    <hr/>
    <div>{{ $t('InstrumentName') }}</div>
    <div>{{ $t('ContractSize') }}</div>
    <div>{{ $t('Spread') }}</div>
    <div>{{ $t('Initialmargin') }}</div>
    <div>{{ $t('LimitLotPerTrade') }}</div>
    <div>{{ $t('PositionLimit') }}</div>
    <hr/>
    <div>{{ $t('ounces') }}</div>
    <div>{{ $t('barrels') }}</div>
    <div>{{ $t('pounds') }}</div>
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
