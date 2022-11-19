<template>
  <v-container>
      <PreLoading v-if="$fetchState.pending"/>

    <CommentsList v-bind:comments="comments"/>

  </v-container>
</template>

<script>
import PreLoading from "@/components/UI/Preloading";
import CommentsList from "@/components/Comment/CommentsList";
export default {
  name: "index",
  components: {CommentsList, PreLoading},
  data() {
    return {
      comments: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl+`CommentAdminPage/list?query=sa`);
    this.comments = data.data.data;
  }
};
</script>

<style scoped>

</style>
