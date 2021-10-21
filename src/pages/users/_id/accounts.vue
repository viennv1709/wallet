<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-data-table
        :headers="headers"
        :items="accounts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useUserStore } from '@/store/user'

export default defineComponent({
  layout: 'main',
  setup() {
    const { accounts } = useUserStore()
    const headers = [
      { text: 'ID', align: 'start', value: 'id', sortable: true },
      { text: 'Name', align: 'start', value: 'name', sortable: false },
      { text: 'Balance', align: 'start', value: 'balance', sortable: true },
    ]
    return {
      headers,
      accounts,
    }
  },
  async asyncData({ $pinia, error, params: { id } }) {
    const userStore = useUserStore($pinia)
    const accounts = await userStore.fetchAccountsByUserId(id)
    if (!accounts) {
      return error({ statusCode: 404, message: 'No users found!' })
    }
  },
  head: {
    title: 'Accounts',
  },
})
</script>
