import { login } from '../services/user'
import { parse } from 'qs'

export default {

  namespace: 'user',

  state: {
    isLogin:window.localStorage.userName?true:false,
    user:window.localStorage.userName||""
  },

  subscriptions: {
    setup({ dispatch, history }) { // eslint-disable-line
    },
  },

  effects: { 
    * login({ payload}, { call, put }) { // eslint-disable-line
      const data = yield call(login, parse(payload))
      if (data) {
        if(data.success){
          window.localStorage.userName = payload.userName
          yield put({
            type: 'changeState',
            payload: {
              isLogin:true,
              user:payload.userName
            },
          })
          let shopCart = []
          if(window.localStorage.noLoginCartCart){
            const noLoginCartCart = JSON.parse(window.localStorage.noLoginCartCart)
            shopCart = shopCart.concat(noLoginCartCart)
            window.localStorage.noLoginCartCart = ""
          }
          if(window.localStorage[payload.userName+"Cart"]){
            const selfCart = JSON.parse(window.localStorage[payload.userName+"Cart"])
            shopCart = shopCart.concat(selfCart)
          }
          if(shopCart.length>0){
            yield put({
              type: 'shopCart/upShopCart',
              payload: {
                cartData:shopCart
              },
            })
          }
          window.localStorage[window.localStorage.userName+"Cart"] = JSON.stringify(shopCart)
        }
        return data
      }
    },
    * logout({ payload }, { call, put }) { 
      yield put({
        type: 'shopCart/upShopCart',
        payload: {
          cartData:[]
        },
      })
      yield put({type: 'logoutRe'})
    }
  },

  reducers: {
    changeState(state, action) {
      return {...state, ...action.payload };
    },
    logoutRe(state, action){
      window.localStorage.userName=""
      return {...state, 
        user:"",
        isLogin:false
      };
    }
  },

};
