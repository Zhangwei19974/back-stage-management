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
    setIsLogin(data:boolean){
      this.isLogin = data
    }
  },
  persist: true,

})
export default useAppStore
