<template>
  <v-container>
    <PreLoading v-if="$fetchState.pending"/>

    <AppFeedList v-bind:feeds="feeds"/>
  </v-container>
</template>

<script>
import AppFeedList from "@/components/Feed/AppFeedList";
import PreLoading from "@/components/UI/Preloading";
export default {
  name: "app",
  components: {PreLoading, AppFeedList},
  data() {
    return {
      feeds: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl + `AppFeedAdminPage/list`);
    this.feeds = data.data;
    console.log(this.feeds);
  }
};
</script>

<style scoped>

</style>
