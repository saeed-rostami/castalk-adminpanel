<template>
  <!--    <v-flex>-->
  <v-container>
    <p v-if="$fetchState.pending">
      <Preloading/>
    </p>
    <v-row>
      <v-flex xs12 sm8 md6 lg3
              v-for="country in countries"
              v-bind:key="country.id">
        {{country.nic_name}}
      </v-flex>


    </v-row>
  </v-container>
  <!--    </v-flex>-->
</template>

<script>

  import Preloading from "../../components/UI/Preloading";

  export default {
    components: {Preloading},
    name: "index",
    data() {
      return {
        countries: []
      };
    },

    async fetch() {
      const data = await this.$axios.$get('https://api.services.castalk.dyneemadev.com/api/rest/Castalk/CountryIndex');
      this.countries = data.data;
    }
  };
</script>

<style scoped>

</style>
