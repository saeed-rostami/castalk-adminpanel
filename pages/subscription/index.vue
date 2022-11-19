<template>
<v-container>
  <PreLoading v-if="$fetchState.pending"/>

  <SubscriptionPlansList v-bind:subscriptions="subscriptions"/>

</v-container>


</template>

<script>
import PreLoading from "@/components/UI/Preloading";
import SubscriptionPlansList from "@/components/SubscriptionPLans/SubscriptionPlansList";

export default {
  name: "index",
  components: {SubscriptionPlansList, PreLoading},

  data() {
    return {
      subscriptions: []
    };
  },
  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl + `SubscriptionPlanAdminPage/list`, {
      headers: {
        "authorization": process.env.token
      }
    });
    this.subscriptions = data.data.data;
  }
};
</script>

<style scoped>

</style>
