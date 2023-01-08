<template>

  <v-row>

    <v-col
      xs6
      sm6
      md6
      lg6
    >
      Total Orders : <v-chip color="blue">{{orders.all_orders_count}}</v-chip>
      <Preloading v-if="$fetchState.pending"/>
      <OrdersChart v-bind:dataChart="OrderDataChart"/>

    </v-col>


    <v-col
      xs6
      sm6
      md6
    >
     Total Users : <v-chip color="blue">{{users.all_users_count}}</v-chip>
      <Preloading v-if="$fetchState.pending"/>
      <UsersChart v-bind:dataChart="UserDataChart"/>

    </v-col>
  </v-row>


</template>

<script>
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';
import Preloading from "@/components/UI/Preloading.vue";
import UsersChart from "@/components/User/UsersChart.vue";
import OrdersChart from "@/components/Order/OrdersChart.vue";

export default {
  components: {
    OrdersChart,
    UsersChart,
    Logo,
    VuetifyLogo,
    Preloading
  },
  data() {
    return {
      users: {},
      orders: {},
      UserDataChart: {

        labels: [],
        datasets: [{
          label: "Users",
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)',
            'rgb(202,130,13)',
            'rgb(133,149,160)',
            'rgb(136,13,23)',
            'rgb(235,175,54)',
            'rgb(145,235,54)',
          ],
          borderWidth: 1,

        }]
      },
      OrderDataChart: {

        labels: [],
        datasets: [{
          label: "Orders",
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)',
            'rgb(202,130,13)',
            'rgb(133,149,160)',
            'rgb(136,13,23)',
            'rgb(235,175,54)',
            'rgb(145,235,54)',
          ],
          borderWidth: 1,

        }]
      },
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl + `PanelStatisticsAdminPage/home`)
      .then(response => {
        this.users = response.data.users;
        this.orders = response.data.orders;

        this.UserDataChart.labels = Object.keys(response.data.users.months);

        this.UserDataChart.datasets[0].data = Object.values(response.data.users.months);


        this.OrderDataChart.labels = Object.keys(response.data.orders.months);

        this.OrderDataChart.datasets[0].data = Object.values(response.data.orders.months);


      }).catch(({response}) => {
        console.log("err", response);
      });
  },
};
</script>
