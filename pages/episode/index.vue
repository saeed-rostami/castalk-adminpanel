<template>
  <v-container>
    <p v-if="$fetchState.pending">
      <PreLoading/>
    </p>

    <EpisodesList v-bind:episodes="episodes"/>

  </v-container>
</template>

<script>
  import EpisodesList from "../../components/Episode/EpisodesList";
  import PreLoading from "../../components/UI/Preloading";

  export default {
    name: "index",
    components: {PreLoading, EpisodesList},
    data() {
      return {
        episodes: []
      };
    },

    async fetch() {
      const data = await this.$axios.$get(process.env.baseUrl + `EpisodeAdminPage/list`, {
        headers: {
          "authorization": process.env.token
        }
      });
      this.episodes = data.data.data;
      console.log(this.episodes);
    }
  };
</script>

<style scoped>

</style>
