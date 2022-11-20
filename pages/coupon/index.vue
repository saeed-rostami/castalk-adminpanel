<template>
<v-container>
  <PreLoading v-if="$fetchState.pending"/>

  <CouponsList v-bind:coupons="coupons"/>

</v-container>
</template>

<script>
import PreLoading from "@/components/UI/Preloading";
import CouponsList from "@/components/Coupon/CouponsList";
export default {
  name: "index",
  components: {CouponsList, PreLoading},
  data() {
    return {
      coupons: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl+`PromotionAdminPage/list`);
    this.coupons = data.data.data;
  }
};
</script>

<style scoped>

</style>
