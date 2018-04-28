import request from '../utils/request';

export async function login(params) {
	return request({
    url:'api/user/login',
    method: 'post', 
    headers: {
      'Content-Type': 'application/json'
    },//这里也要设置下头部，后台才能获取到参数
    body: JSON.stringify(params)
  })
}
