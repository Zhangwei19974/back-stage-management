import { createPinia, Pinia, PiniaVuePlugin } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import Vue from 'vue';

let pinia:Pinia

export default function(){
  if(!pinia){
    pinia = createPinia()
  }
  pinia.use(createPersistedState())
  Vue.use(PiniaVuePlugin)
  return pinia
}
