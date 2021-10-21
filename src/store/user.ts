import { reactive } from '@nuxtjs/composition-api'
import { defineStore } from 'pinia'
import { AxiosResponse } from 'axios'

import { ApiResponse, User, Account } from '@/types'

interface State {
  accounts: Account[]
}

export const useUserStore = defineStore('user', {
  state: () => {
    return reactive<State>({
      accounts: [],
    })
  },
  actions: {
    async fetchUserById(userId: string) {
      try {
        const response = await this.$nuxt.$axios.get<
          any,
          AxiosResponse<ApiResponse<User>>
        >(`/users/${userId}`)
        return response.data.attributes
      } catch {
        return undefined
      }
    },

    async fetchAccountsByUserId(userId: string) {
      try {
        const response = await this.$nuxt.$axios.get<
          any,
          AxiosResponse<Array<ApiResponse<Account>>>
        >(`/users/${userId}/accounts`)
        this.accounts = response.data.map((a) => a.attributes)
        return this.accounts
      } catch {
        return undefined
      }
    },
  },
})
