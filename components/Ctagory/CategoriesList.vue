<template>
  <v-row>
    <v-flex md6 lg3
            v-for="category in categories"
            v-bind:key="category.id">

      <CategoriesPreview
        v-bind:id="category.id"
        v-bind:title="category.title"
        v-bind:icon="category.icon"
      />

    </v-flex>
  </v-row>
</template>

<script>
import CategoriesPreview from "~/components/Ctagory/CategoriesPreview";

export default {
  components: {CategoriesPreview},

  name: "CategoriesList",
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
};
</script>

<style scoped>

</style>
