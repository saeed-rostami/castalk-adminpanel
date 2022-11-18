<script>
  import { Line } from "vue-chartjs";
  import {Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js';


  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

  export default {
    extends: Line,
    name: "LineChart",
    props: ["chartData", "chartOptions"],
  };
</script>

<style scoped>

</style>
