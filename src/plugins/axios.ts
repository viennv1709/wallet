import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { AxiosResponse } from 'axios'
import camelizeKeys from 'camelcase-keys'

export default defineNuxtPlugin(({ $axios }) => {
  $axios.interceptors.response.use((response: AxiosResponse) => {
    if (
      response.data &&
      response.headers['content-type'] === 'application/json; charset=utf-8'
    ) {
      response.data = camelizeKeys(response.data, { deep: true })
    }
    return response
  })
})
