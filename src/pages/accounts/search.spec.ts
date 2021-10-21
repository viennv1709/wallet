import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import { PiniaVuePlugin } from 'pinia'
import { createTestingPinia } from '@pinia/testing'

import Search from './search.vue'

describe('Search.vue', () => {
  let wrapper: Wrapper<any, Element>
  const localVue = createLocalVue()
  localVue.use(PiniaVuePlugin)
  const pinia = createTestingPinia()

  beforeEach(() => {
    wrapper = shallowMount(Search, {
      localVue,
      pinia,
      stubs: ['nuxt-link'],
    })
  })

  it('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
