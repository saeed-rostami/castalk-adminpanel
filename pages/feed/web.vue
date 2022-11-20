<template>
  <v-container>
    <PreLoading v-if="$fetchState.pending"/>


    <WebFeedList v-bind:feeds="feeds"/>
  </v-container>
</template>

<script>
import PreLoading from "@/components/UI/Preloading";
import WebFeedList from "@/components/Feed/WebFeedList";
export default {
  name: "web",
  components: {WebFeedList, PreLoading},
  data() {
    return {
      feeds: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl + `WebFeedAdminPage/list`);
    this.feeds = data.data;
    console.log(this.feeds);
  }
};
</script>

<style scoped>

</style>
