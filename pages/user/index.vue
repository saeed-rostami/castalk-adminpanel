<template>
<v-container>

  <PreLoading v-if="$fetchState.pending"/>

  <UserUsersList v-bind:users="users"/>

</v-container>
</template>

<script>
import PreLoading from "@/components/UI/Preloading";
export default {
  name: "index",
  components: {PreLoading},
  data() {
    return {
      users: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(process.env.auth_baseUrl + `users`);
    this.users = data.data.data;
    console.log(this.users);
  }
};
</script>

<style scoped>

</style>
