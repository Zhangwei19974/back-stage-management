import axios  from 'axios'
import type { AxiosRequestConfig }from 'axios'
import useAppStore from '@/store';
import { Message } from 'element-ui';

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
  if(response.data.code!==200){
    console.log(response.data);
    Message.error(response.data.msg)
  }

  return response.data;
},error => {
  console.log(error);
})

export function request<T = any>(config:AxiosRequestConfig):Promise<BaseAxiosResponse<T>>{
  return  new Promise((resolve,reject)=>{
    instance.request<T,BaseAxiosResponse<T>>(config)
      .then(res=> {
        // 状态拦截
        /**
         * TODO : 1.404,500,401 等具体状态的拦截
         */
        if(res.code !== 200){
          reject(res)
          return
        }
        resolve(res)
      })
  })
}
