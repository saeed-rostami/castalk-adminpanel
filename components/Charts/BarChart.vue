<template>
  <div>
    <Bar v-bind:chart-data="chartData"/>
  </div>
</template>

<script>
import {Bar} from 'vue-chartjs';
import {
  Chart,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js';

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, LineElement);


export default {
  components: {Bar},
  name: "LineChart",
  props: {
    chartData: {
      required: true
    }
  },
  // data() {
  //   return {
  //
  //   };
  // },
};
</script>

<style scoped>

</style>
