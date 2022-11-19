<template>
  <v-row v-if="$auth.loggedIn">
    <v-col>
      <h3>
        {{$auth.user.name}}
      </h3>

      <h3>
        {{$auth.user.email}}
      </h3>
    </v-col>
  </v-row>
</template>

<script>
    export default {
        name: "index"
    };
</script>

<style scoped>

</style>
