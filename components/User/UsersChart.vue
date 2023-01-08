<template>
  <BarChart v-bind:chartData="dataChart"/>
</template>

<script>
import BarChart from "@/components/Charts/BarChart.vue";

export default {
  components: {BarChart},
  props: {
    dataChart: {
      required: true,
    }
  },
  name: "UsersChart"
};
</script>

<style scoped>

</style>
