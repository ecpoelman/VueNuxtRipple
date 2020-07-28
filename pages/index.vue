<template>
  <rpl-container :style="{ 'background-image': 'url(~/assets/img/header-pattern-shape.png)' }">
    <rpl-alert
      id="alert_emergency"
      title='Restrictions are in place to help slow the spread of coronavirus (COVID-19) and save lives.'
      type='Emergency'
      :link="{ text: 'For more information visit the DHHS website', url: 'https://www.dhhs.vic.gov.au/coronavirus' }"
    />
    <rpl-row>
      <rpl-col>
        <rpl-site-header
          :breakpoint="992"
          :logo="{alt: 'vic.gov.au', url: '#', image: '~@/assets/img/header-pattern-shape.png'}"
          :show-search="true"
          :links="[{ text: 'About', url: '#'},{ text: 'Connect with us', url: '#'}]"
        />
      </rpl-col>
    </rpl-row>
    <rpl-row>
      <rpl-hero-banner
        class="rpl-site-constrain--on-all"
        title="This is display copy that wraps 2 lines"
        intro-text="This is supplementary intro text that can also wrap over a couple of lines."
        :show-links="true"
        link-heading="Want to know more about..."
        :links="[{text: 'About', url: '#'},{ text: 'Connect with us', url: '#'}]"
      />
    </rpl-row>
  </rpl-container>
</template>

<script>
import RplAlert from '@dpc-sdp/ripple-alert'
import RplSiteHeader from '@dpc-sdp/ripple-site-header'
import RplHeroBanner from '@dpc-sdp/ripple-hero-banner'
import { RplContainer, RplRow, RplCol } from '@dpc-sdp/ripple-grid'
export default {
  components: {
    RplContainer,
    RplRow,
    RplCol,
    RplAlert,
    RplHeroBanner,
    RplSiteHeader
  }
}
</script>

<style lang="scss" scoped>
  @import '~@dpc-sdp/ripple-global/style';
</style>
