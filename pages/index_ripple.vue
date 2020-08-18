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
          :links="[{ text: 'About', url: '/about'},{ text: 'Connect with us', url: '#'}]"
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
        :links="[{text: 'About', url: '/about'},{ text: 'Connect with us', url: '#'}]"
      />
    </rpl-row>

    <div class="container">

      <PageIndex v-bind="{latestRecipes, latestPromoted}" />

    </div>

  </rpl-container>
</template>

<script>
import PageIndex from '~/components/PageIndex';
import {
  findAllLatestRecipes,
  findHomePromotedArticlesAndRecipes,
} from '~/lib/api';
// Node modules
import RplAlert from '@dpc-sdp/ripple-alert'
import RplSiteHeader from '@dpc-sdp/ripple-site-header'
import RplHeroBanner from '@dpc-sdp/ripple-hero-banner'
import { RplContainer, RplRow, RplCol } from '@dpc-sdp/ripple-grid'

export default {
  components: {
    PageIndex,
    RplContainer,
    RplRow,
    RplCol,
    RplAlert,
    RplHeroBanner,
    RplSiteHeader
  },
  async asyncData({ params }) {
    return Promise.all([
      findAllLatestRecipes(4),
      findHomePromotedArticlesAndRecipes(3),
    ]).then(values => {
      return {
        latestRecipes: values[0],
        latestPromoted: values[1],
      };
    });
  },
}
</script>

<style lang="scss" scoped>
  @import '~@dpc-sdp/ripple-global/style';
</style>
