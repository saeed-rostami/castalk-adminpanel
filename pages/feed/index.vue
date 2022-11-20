<template>
<v-container>
  <v-row>
    <v-col sm12 md6 lg6>
      <nuxt-link to="feed/web">
      <v-card>
       <v-card-title>
         <v-icon x-large>mdi-monitor</v-icon>
       </v-card-title>


     </v-card>
      </nuxt-link>
    </v-col>


    <v-col sm12 md6 lg6>
      <nuxt-link to="feed/app">
      <v-card>
        <v-card-title>
          <v-icon x-large>mdi-cellphone</v-icon>
        </v-card-title>
      </v-card>
      </nuxt-link>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "index"
};
</script>

<style scoped>

</style>
