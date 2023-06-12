<template>
  <div>
    <InitialCapital />
    <hr/>
    <div>{{ $t('MainFeatures') }}</div>
    <div>{{ $t('Mobility') }}</div>
    <div>{{ $t('MobilityText') }}</div>
    <div>{{ $t('KeepUpToDate') }}</div>
    <div>{{ $t('KeepUpToDateText') }}</div>
    <div>{{ $t('Intuitive') }}</div>
    <div>{{ $t('IntuitiveText') }}</div>
    <hr/>
    <div>{{ $t('PlatformFS') }}</div>
    <div>{{ $t('StandBy') }}</div>
    <div>{{ $t('StandByText') }}</div>
    <div>{{ $t('CrossAsset') }}</div>
    <div>{{ $t('CrossAssetText') }}</div>
    <div>{{ $t('OneAccount') }}</div>
    <div>{{ $t('OneAccountText') }}</div>
    <div>{{ $t('Reliability') }}</div>
    <div>{{ $t('ReliabilityText') }}</div>
    <div>{{ $t('Information') }}</div>
    <div>{{ $t('InformationText') }}</div>
    <hr/>
    <div>{{ $t('Availability') }}</div>
    <div>{{ $t('AvailabilityText1') }}</div>
    <div>{{ $t('AvailabilityText2') }}</div>
    <div>{{ $t('AvailabilityText3') }}</div>
    <div>{{ $t('AvailabilityText4') }}</div>
    <div>{{ $t('ReadMore') }}</div>
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
