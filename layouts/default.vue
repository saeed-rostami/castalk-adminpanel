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
      <v-toolbar-title class="castalk--text" v-text="title"/>
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
<!--            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>-->
          </v-list-item-avatar>
        </v-list-item>


        <v-list-item link to="/profile" v-if="$auth.loggedIn">
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

          <v-btn v-on:click="logout" class="castalk--text">
            Logout
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
<!--      <v-img src="/icon.png" max-height="30" max-width="30"></v-img>-->
      <span class="castalk--text">Castalk App {{ new Date().getFullYear() }} </span>
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
            icon: 'mdi-account',
            title: 'Users',
            to: '/users'
          },
          {
            icon: 'mdi-apps',
            title: 'Plans',
            to: '/plans'
          },

          {
            icon: 'mdi-shopping',
            title: 'Orders',
            to: '/orders'
          },



        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Restorage',


      };
    },

    methods: {
      async logout() {
        Notiflix.Loading.circle({
          svgColor: '#FFB800',
        });
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
