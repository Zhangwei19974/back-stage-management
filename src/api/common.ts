import { request } from '@/utils';

export function login(data:ILoginInfo){
  return request({
    url: '/api/common/login',
    method: 'post',
    data,
  })
}
