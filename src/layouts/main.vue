<template>
  <v-app light>
    <v-app-bar
      clipped-left
      fixed
      app
      flat
      tile
      short
      color="#fff"
      class="v-bar--underline"
    >
      <div class="v-bar--logo"><nuxt-img src="/images/logo.png" /></div>
      <v-toolbar-title class="pl-4">Account Management</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer clipped fixed app>
      <v-list dense nav>
        <v-list-item-group color="primary">
          <v-list-item to="/accounts/search" router exact link>
            <v-list-item-icon>
              <v-icon>mdi-account-search</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Accounts Search</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
