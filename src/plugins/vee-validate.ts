import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
  setInteractionMode,
} from 'vee-validate'
import en from 'vee-validate/dist/locale/en.json'
import * as rules from 'vee-validate/dist/rules'

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  })
}
localize('en', en)
setInteractionMode('passive')

// Install VeeValidate components globally
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
