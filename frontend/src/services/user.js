import request from '../utils/request';

export async function login(params) {
	const rigisterUser = JSON.parse(window.localStorage.registeredUsers);
  if(rigisterUser.find((elem)=>params.userName===elem.userName&&elem.password===params.password)){
    return {
      success: true,
      message: '登陆成功',
    }
  }else{
    return {
      success: false,
      message: '用户名或者密码错误',
    }
  }
	// return request({
 //    url:'api/user/login',
 //    method: 'post',
 //    headers: {
 //      'Content-Type': 'application/json'
 //    },//这里也要设置下头部，后台才能获取到参数
 //    body: JSON.stringify(params)
 //  })
}
