<template>
</template>

<script>
  import Notiflix from "notiflix";

  export default {
    name: "PreLoading",
    created() {
      // Notiflix.Loading.dots();
        Notiflix.Loading.dots({
            svgColor: '#b1a600',
        });
    },
    beforeDestroy() {
      Notiflix.Loading.remove();
    }
  }
</script>

<style scoped>

</style>
