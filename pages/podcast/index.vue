<template>
  <v-container>
    <p v-if="$fetchState.pending">
      <Preloading/>
    </p>

    <PodcastsList v-bind:podcasts="podcasts"/>

  </v-container>
</template>

<script>

import Preloading from "~/components/UI/Preloading";
import PodcastsList from "~/components/Podcast/PodcastsList";

export default {
  components : {Preloading, PodcastsList},
  name: "index",
  data() {
    return {
      podcasts: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl+`PodcastAdminPage/list`, {
      headers: {
        "authorization": process.env.token
      }
    });
    this.podcasts = data.data.data;
    console.log(this.podcasts);
  }
};
</script>

<style scoped>

</style>
