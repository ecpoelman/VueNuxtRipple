<template>
  <div>
  <rpl-alert
    id="alert_emergency"
    title='Restrictions are in place to help slow the spread of coronavirus (COVID-19) and save lives.'
    type='Emergency'
    :link="{ text: 'For more information visit the DHHS website', url: 'https://www.dhhs.vic.gov.au/coronavirus' }"
  />
  <PageIndex v-bind="{latestRecipes, latestPromoted}" />
  </div>
</template>

<script>
import PageIndex from '~/components/PageIndex'
import RplAlert from '@dpc-sdp/ripple-alert'
import RplSiteHeader from '@dpc-sdp/ripple-site-header'
import { RplContainer, RplRow, RplCol } from '@dpc-sdp/ripple-grid'
import {
  findAllLatestRecipes,
  findHomePromotedArticlesAndRecipes,
} from '~/lib/api';

export default {
  transition: 'page',
  components: {
    PageIndex,
    RplContainer,
    RplRow,
    RplCol,
    RplAlert,
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
};
</script>
