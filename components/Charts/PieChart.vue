<template>
  <Pie :chart-data="dataChart" />
</template>

<script>
// DataPage.vue
import { Bar, Pie } from 'vue-chartjs'
import { Chart, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

export default {
  name: 'BarChart',
  components: { Bar, Pie },
  props: ["chartData"],
  data() {
    return {
      totalVolume : this.chartData.AvailableVolume + this.chartData.UsedVolume,
      dataChart: {
        labels: [  'Used Volume', 'Available Volume'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: [
              'rgb(219,10,10)',
              'rgb(9,195,19)'
            ],
            // data: [this.totalVolume, this.chartData.UsedVolume, this.chartData.AvailableVolume],
            data: [this.chartData.UsedVolume, this.chartData.AvailableVolume],
            hoverOffset: 8
          }
        ]
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
}
</script>
