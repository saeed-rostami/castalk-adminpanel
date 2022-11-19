<template>
  <v-container>
    <p v-if="$fetchState.pending">
      <PreLoading/>
    </p>

    <MonetizationsList v-bind:monetizations="monetizations"/>

  </v-container>
</template>

<script>
    import PreLoading from "../../components/UI/Preloading";
    import MonetizationsList from "../../components/Monetization/MonetizationsList";
    export default {
        name: "index",
      components: {MonetizationsList, PreLoading},
      data() {
        return {
          monetizations: []
        };
      },

      async fetch() {
        const data = await this.$axios.$get(process.env.baseUrl + `UserMonetizationAdminPage/list`, {
          headers: {
            "authorization": process.env.token
          }
        });
        this.monetizations = data.data.data;
      }
    };
</script>

<style scoped>

</style>
