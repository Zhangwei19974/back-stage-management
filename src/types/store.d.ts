import { RawLocation } from 'vue-router/types/router';

interface IUserInfo{
  name?:string
}
interface IAppStoreState{
  isLogin:boolean
  token:string
  userInfo:IUserInfo
  isBackRouter:boolean
  keepAliveList:string[]
}
