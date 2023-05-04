import { defineStore } from 'pinia';
import { IAppStoreState } from '@/types/store';
import { RawLocation } from 'vue-router/types/router';

const useAppStore = defineStore({
  id: 'appStore',
  state: ():IAppStoreState => ({
    token: '',
    isLogin: false,
    userInfo: {},
    backRouter: '/',
    keepAliveList: []
  }),
  getters: {

  },
  actions: {
    setIsLogin(data:boolean){
      this.isLogin = data
    },
    setToken(token:string){
      this.token = token
    },
    setUserInfo(userInfo:any){
      this.userInfo = userInfo
    },
    setBackRouter(router:RawLocation){
      this.backRouter = router
    },
    setKeepAliveList(keepAliveList:string[]){
      this.keepAliveList = keepAliveList
    },
    addKeepAliveList(keepAliveItem:string){
      this.keepAliveList.push(keepAliveItem)
    },
    clearKeepAliveList(){
      this.keepAliveList = []
    },
    removeKeepAlive(keepAliveItem:string){
      const index = this.keepAliveList.indexOf(keepAliveItem)
      if(index >= 0){
        this.keepAliveList.splice(index,1)
      }
    }
  },
  persist: true,

})
export default useAppStore
