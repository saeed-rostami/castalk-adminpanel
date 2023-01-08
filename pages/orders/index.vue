<template>
<v-container>
  <PreLoading v-if="$fetchState.pending"/>

  <OrderOrdersList v-bind:orders="orders"/>
</v-container>
</template>

<script>
import PreLoading from "@/components/UI/Preloading";
export default {
  name: "index",
  components: {PreLoading},
  data() {
    return {
      orders: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl+`InvoiceAdminPage/list`);
    this.orders = data.data.data;
  }
};
</script>

<style scoped>

</style>
