import { defineStore } from 'pinia';

const useAppStore = defineStore({
  id: 'appStore',
  state: ():IAppStoreState => ({
    token:'',
    isLogin:false,
    userInfo:{}
  }),
  getters: {

  },
  actions: {

  },

})
export default useAppStore
