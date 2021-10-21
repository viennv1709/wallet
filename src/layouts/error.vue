<template>
  <v-app light>
    <v-main>
      <div id="misc">
        <nuxt-img height="226" src="/images/bg.png" class="misc-mask" />
        <v-img :src="$img('/images/leaf.png')" class="misc-tree" />
        <div class="px-5 text-center page-title">
          <h2
            class="justify-center text-2xl  font-weight-semibold text--primary d-flex align-center"
          >
            <span class="me-2">Page Not Found</span
            ><span
              aria-hidden="true"
              class="v-icon notranslate theme--light warning--text"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                class="v-icon__svg"
              >
                <path
                  d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"
                ></path></svg
            ></span>
          </h2>
          <p class="text-sm">we couldn't find the page you are looking for</p>
          <div class="justify-center misc-character d-flex">
            <v-img :src="$img('/images/error.b3bd0483.png')" max-width="700" />
          </div>
          <v-btn to="/" elevation="1" color="primary">Back to home </v-btn>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  setup() {},
})
</script>
<style lang="scss" scoped>
#misc {
  overflow: hidden;

  .misc-mask,
  .misc-tree {
    position: absolute;
  }

  .misc-mask {
    bottom: 0;
    width: 100%;
  }

  .misc-tree {
    height: 226px;
    max-width: 300px;
    left: 0;
    bottom: 8%;
  }

  .page-title {
    margin-top: 5.25rem;
  }

  .misc-character {
    margin-bottom: 3.313rem;
    margin-top: 5rem;
  }
}
</style>
