<template>
  <v-row>
    <v-flex xs12 sm8 md6 lg3
            v-for="country in countries"
            v-bind:key="country.id">
      {{ country.nic_name }}
    </v-flex>


  </v-row>
</template>

<script>
export default {
  name: "Country",
  props: ["countries"]
};
</script>

<style scoped>

</style>
