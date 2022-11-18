<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      Castalk
    </v-flex>
    <v-row>
      <v-col>
        chart
        <Line :chartData="chartData"/>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
  import { Line } from "vue-chartjs";
  import {Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js';


  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  import Logo from '~/components/Logo.vue';
  import VuetifyLogo from '~/components/VuetifyLogo.vue';
  import LineChart from "../components/Charts/LineChart";

  export default {
    components: {
      Line,
      LineChart,
      Logo,
      VuetifyLogo
    },

    data() {
      return {
        chartData: {
          labels: [ 'January', 'February', 'March'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 20, 12]
            }
          ]
        },

        chartOptions: {
          maintainAspectRatio: false,
          responsive: true

        }
      };
    },
  };
</script>
