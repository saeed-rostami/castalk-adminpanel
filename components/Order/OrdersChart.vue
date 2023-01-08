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
  name: "OrdersChart"
};
</script>

<style scoped>

</style>
