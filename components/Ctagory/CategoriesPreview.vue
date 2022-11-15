<template>

  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">

           <nuxt-link :to="link">
             <v-img
               v-bind="attrs"
               v-on="on"
               max-height="100"
                    max-width="100" v-bind:src="icon"></v-img>
           </nuxt-link>

    </template>

    <span>{{ title }}</span>
  </v-tooltip>

</template>

<script>
export default {
  name: "CategoriesPreview",
  props: {
    id: {
      required: true,
    },

    title: {
      required: true,
    },


    icon: {
      required: true,
    },
  },
  computed: {
    link() {
      return "category/" + this.id;
    }
  }
};
</script>

<style scoped>

</style>
