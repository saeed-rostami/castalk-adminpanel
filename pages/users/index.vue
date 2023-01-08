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
    const data = await this.$axios.$get(process.env.baseUrl + `UsersAdminPage/list`);
    this.users = data.data.data;
  }
};
</script>

<style scoped>

</style>
