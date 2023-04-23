interface IUserInfo{
  name?:string
}
interface IAppStoreState{
  isLogin:boolean
  token:string
  userInfo:IUserInfo
}
