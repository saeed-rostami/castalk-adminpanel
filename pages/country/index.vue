<template>

  <v-container>
    <p v-if="$fetchState.pending">
      <Preloading/>
    </p>

    <Country v-bind:countries="countries" />

  </v-container>

</template>

<script>

  import Preloading from "../../components/UI/Preloading";
  import Country from "~/components/Country/country";


  export default {
    components: {Country, Preloading},
    name: "index",
    data() {
      return {
        countries: []
      };
    },

    async fetch() {
      const data = await this.$axios.$get(process.env.baseUrl+`CountryAdminPage/list`, {
        headers: {
          "authorization": process.env.token
        }
      });
      this.countries = data.data;
    }
  };
</script>

<style scoped>

</style>
