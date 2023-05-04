import { request } from '@/utils';

export function getUserInfo (){
  return request({
    url: '/api/user/userInfo',
    method: 'get'
  })
}
