<template>
  <v-container>

    <PreLoading v-if="$fetchState.pending"/>

    <PlansList v-bind:plans="plans" />

  </v-container>
</template>

<script>
import PreLoading from "@/components/UI/Preloading";
export default {
  name: "index",
  components: {PreLoading},
  data() {
    return {
      plans: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl + `PlanAdminPage/list`);
    this.plans = data.data.data;
  }
};
</script>

<style scoped>

</style>
