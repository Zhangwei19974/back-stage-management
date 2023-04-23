import { createPinia, PiniaVuePlugin } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import Vue from 'vue';

export default function(){
  const pinia = createPinia()
  pinia.use(createPersistedState())
  Vue.use(PiniaVuePlugin)
  return pinia
}
