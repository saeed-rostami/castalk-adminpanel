<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>


    <v-navigation-drawer
      v-if="$auth.loggedIn"
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>


        <v-list-item link to="/auth" v-if="$auth.loggedIn">
          <v-list-item-content>
            <v-list-item-title class="text-h6">
             {{$auth.user.name}}
            </v-list-item-title>
            <v-list-item-subtitle>  {{$auth.user.email}}</v-list-item-subtitle>
          </v-list-item-content>

        </v-list-item>




        <v-list-item
          exact
        >

          <v-btn v-on:click="logout">
            Logout
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} Castalk App</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Notiflix from "notiflix";

  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-home',
            title: 'Dashboard',
            to: '/'
          },
          {
            icon: 'mdi-airport',
            title: 'Country',
            to: '/country'
          },
          {
            icon: 'mdi-apps',
            title: 'Category',
            to: '/category'
          },

          {
            icon: 'mdi-play',
            title: 'Podcast',
            to: '/podcast'
          },

          {
            icon: 'mdi-microphone',
            title: 'Episode',
            to: '/episode'
          },

          {
            icon: 'mdi-cash-100',
            title: 'Monetization',
            to: '/monetization'
          },

          {
            icon: 'mdi-check-circle',
            title: 'Request Badges',
            to: '/badge'
          },

          {
            icon: 'mdi-youtube-subscription',
            title: 'Subscription Plan',
            to: '/subscription'
          },

          {
            icon: 'mdi-account',
            title: 'User',
            to: '/user'
          },

          {
            icon: 'mdi-comment',
            title: 'Comment',
            to: '/comment'
          },

          {
            icon: 'mdi-sale',
            title: 'Coupon',
            to: '/coupon'
          },

          {
            icon: 'mdi-cart',
            title: 'Order',
            to: '/order'
          },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Castalk',


      };
    },

    methods: {
      async logout() {
        Notiflix.Loading.circle();
         this.$auth.logout()
           .then(() => {
             Notiflix.Loading.remove();
           })
      }
    }
  };
</script>

<style>
  .castalk_color {
    color: yellow;
  }
</style>
