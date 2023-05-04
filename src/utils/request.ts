import axios  from 'axios'
import type { AxiosRequestConfig }from 'axios'
import useAppStore from '@/store';
interface BaseAxiosResponse<T = any> {
  code: number;
  data: T;
  msg?: string;
}

const appStore = useAppStore()
const instance = axios.create({
  timeout: 1000 * 60 * 2,
  withCredentials: true
})
instance.interceptors.request.use(config =>{

  const {headers} = config
  const { token } = appStore
  console.log(token,appStore);
  if(token){
    headers.token = `${token}`
  }
  return config
})

instance.interceptors.response.use(response=> {
  // console.log(response.data);
  // if(response.data.code!==200){
  //   return new Error('asdasd')
  // }
  return response.data;
},error => {
  console.log(error);
})

export function request<T = any>(config:AxiosRequestConfig):Promise<BaseAxiosResponse<T>>{
  return instance.request<T,BaseAxiosResponse<T>>(config)
    .then(res=>res)
}
