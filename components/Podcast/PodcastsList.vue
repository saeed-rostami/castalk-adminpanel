<template>
  <v-row>
    <v-flex md6 lg3
            v-for="podcast in podcasts"
            v-bind:key="podcast.id">

      <PodcastPreview
        v-bind:id="podcast.id"
        v-bind:title="podcast.title"
        v-bind:icon="podcast.cover"
      />

    </v-flex>
  </v-row>
</template>

<script>
import PodcastPreview from "~/components/Podcast/PodcastPreview";

export default {
  components: {PodcastPreview},
  name: "PodcastsList",
  props: {
    podcasts: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped>

</style>
