<template>
  <v-app>
    <v-content>
      <Home />
        <v-card
    class="mx-auto"
    height="400"
    width="256"
  >
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      permanent
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
    })
};

export default {
    data () {
      return {
        items: [
          { title: 'Kotlin', icon: 'dashboard' },
          { title: 'Java', icon: 'account_box' },
          { title: 'JavaScript', icon: 'gavel' },
        ],
      }
    },
  }
</script>
