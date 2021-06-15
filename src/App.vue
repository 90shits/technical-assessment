<template>
  <v-app>
    <v-app-bar app dark color="deep-purple accent-4 px-2 px-md-6">
      <router-link
        to="/"
        class="d-flex text-decoration-none align-center"
      >
        <v-img
          :src="require('./assets/logo.png')"
          transition="scale-transition"
          width="40"
          contain
        />
        <v-toolbar-title class="white--text ml-2 mr-1">
          Made with VueJS
        </v-toolbar-title>
        <v-icon color="red">mdi-heart</v-icon>
      </router-link>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      class="deep-purple accent-4 pt-8"
      absolute temporary dark
    >
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="(item, i) in menu"
            :key="`menu-item-${i}`"
            :to="item.href"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      group: null,
      menu: [
        {
          text: 'Home',
          href: '/',
          icon: 'mdi-home'
        },
        {
          text: 'About',
          href: '/about',
          icon: 'mdi-information-outline'
        }
      ]
    }
  }
}
</script>
