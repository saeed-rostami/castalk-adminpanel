<template>

  <v-container>
    <p v-if="$fetchState.pending">
      <Preloading/>
    </p>

    <CategoriesList v-bind:categories="categories"/>

  </v-container>

</template>

<script>

import Preloading from "../../components/UI/Preloading";
import CategoriesList from "~/components/Ctagory/CategoriesList";

export default {
  components: {Preloading, CategoriesList},
  name: "category",
  data() {
    return {
      categories: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl+`CategoryAdminPage/list`, {
      headers: {
        "authorization": process.env.token
      }
    });
    this.categories = data.data.data;
  }
};
</script>

<style scoped>

</style>
