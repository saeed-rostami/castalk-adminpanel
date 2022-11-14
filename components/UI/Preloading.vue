<template>
</template>

<script>
  import Notiflix from "notiflix";

  export default {
    name: "PreLoading",
    created() {
      Notiflix.Loading.dots()
    },
    beforeDestroy() {
      Notiflix.Loading.remove();
    }
  }
</script>

<style scoped>

</style>
