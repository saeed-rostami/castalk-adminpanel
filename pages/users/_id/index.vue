<template>
  <v-card
    class="mx-auto"
    max-width="1000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ user.username }}
        </v-list-item-title>
        <v-list-item-subtitle> {{ user.email }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-list-item>

      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Volume Detail
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-col
      cols="6"
      sm="6"
      md="6"

    >
      <Preloading v-if="$fetchState.pending"/>

      <PieChart v-else :chartData="user.volume_information"/>
    </v-col>
  </v-card>
</template>

<script>

import PieChart from "@/components/Charts/PieChart.vue";
import Preloading from "@/components/UI/Preloading.vue";

export default {
  name: "index",
  components: {PieChart, Preloading},
  data() {
    return {
      user: {},
    };
  },


  async fetch() {
    const res = await this.$axios.$get(process.env.baseUrl + `UsersAdminPage/single?user_id=${this.$route.params.id}`);
    this.user = res.data;

    console.log(res.data);
  }
};
</script>

<style scoped>

</style>
