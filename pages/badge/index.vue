<template>
  <v-container>
    <p v-if="$fetchState.pending">
      <PreLoading/>
    </p>

    <BadgesList v-bind:badges="badges"/>


  </v-container>
</template>


<script>
import PreLoading from "@/components/UI/Preloading";
import BadgesList from "@/components/Badge/BadgesList";

export default {
  name: "index",
  components: {BadgesList, PreLoading},
  data() {
    return {
      badges: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.baseUrl + `UserVerifyAdminPage/list`, {
      headers: {
        "authorization": process.env.token
      }
    });
    this.badges = data.data.data;
    console.log(this.badges.data)
  }
};
</script>

<style scoped>

</style>
