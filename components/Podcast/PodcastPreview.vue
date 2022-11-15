<template>
      <nuxt-link to="to">
        <h2>{{title}}</h2>
      </nuxt-link>

</template>

<script>
export default {
  name: "PodcastPreview",
  props: {
    id: {
      required: true,
    },

    title: {
      required: true,
    },

    cover: {
      required: false,
    },
  },
};
</script>

<style scoped>

</style>
