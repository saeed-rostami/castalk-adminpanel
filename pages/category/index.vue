<template>
  <!--    <v-flex>-->
  <v-container>
    <p v-if="$fetchState.pending">
      <Preloading/>
    </p>
    <v-row>
      <v-flex xs12 sm8 md6 lg3
              v-for="category in categories"
              v-bind:key="category.id">
        {{category.title}}

<!--        <v-img v-bind:src="category.icon"></v-img>-->
      </v-flex>


    </v-row>
  </v-container>
  <!--    </v-flex>-->
</template>

<script>

  import Preloading from "../../components/UI/Preloading";

  export default {
    components: {Preloading},
    name: "category",
    data() {
      return {
        categories: []
      };
    },

    async fetch() {
      const data = await this.$axios.$get('https://api.services.castalk.dyneemadev.com/api/rest/Castalk/CategoryIndex');
      this.categories = data.data.data;
      console.log(this.categories);
    }
  };
</script>

<style scoped>

</style>
