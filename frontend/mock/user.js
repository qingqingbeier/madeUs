const users = [
  {
    userName:"admin",
    password:"admin"
  },{
    userName:"test",
    password:"test"
  }
]

// 这里进行mock接收不到body参数，通过谷歌换了多种方式搜索，终于在github上找到
// 原因,因为roadhog版本使用0.6.0-beta3的才可以

module.exports = {
  //post请求  /users/ 是拦截的地址   方法内部接受 request response对象
  'post /api/user/login' (req, res) {
    const userItem = req.body
    const response = {
      success: false,
      message: '',
    }
    const d = users.filter((item) => {
      return item.userName === userItem.userName
    })
    if (d.length) {
      if (d[0].password === userItem.password) {
        response.message = '登录成功'
        response.success = true
      } else {
        response.message = '密码或用户名错误'
      }
    } else {
      response.message = '用户或密码错误'
    }
    setTimeout(()=>{
      res.json(response)
    },1000)
  }
}