<template>
<v-container>
  <h1>{{category.title}}</h1>
  <v-img
    max-height="150"
    max-width="150"
    v-bind:src="category.icon"></v-img>
</v-container>
</template>

<script>
export default {
  name: "SingleCategory",
  data() {
    return {
      category: {},
      id: this.$route.params.id
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl+`CategoryAdminPage/show/?id=${this.id}`, {
      headers: {
        "authorization": process.env.token
      }
    });
    this.category = data.data;
    console.log(this.category);
  }
};
</script>

<style scoped>

</style>
