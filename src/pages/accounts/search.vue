<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <form novalidate @submit.prevent="handleSubmit(onSubmit)">
          <v-container>
            <v-row v-if="showEmptyMessage">
              <v-col cols="12" md="8" xs="12">
                <v-alert dense outlined type="info"> No users found! </v-alert>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="8" xs="12">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="User ID"
                  rules="required|integer|min_value:1"
                >
                  <v-text-field
                    v-model="form.userId"
                    :error-messages="errors"
                    label="User ID"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" md="4" xs="12">
                <v-btn color="primary" type="submit">Search</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </ValidationObserver>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  useRouter,
} from '@nuxtjs/composition-api'
import { useUserStore } from '@/store/user'

export default defineComponent({
  layout: 'main',
  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const form = reactive({ userId: '' })
    const showEmptyMessage = ref(false)

    const onSubmit = async () => {
      const user = await userStore.fetchUserById(form.userId)
      if (user) {
        router.push(`/users/${user.id}/accounts`)
      } else {
        showEmptyMessage.value = true
      }
    }

    return { form, showEmptyMessage, onSubmit }
  },
  head: {
    title: 'Accounts Search',
  },
})
</script>
