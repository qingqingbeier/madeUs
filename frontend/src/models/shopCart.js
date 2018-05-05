export default {

  namespace: 'shopCart',

  state: {
    cartData:[],
    showCart:false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({type:'setInitData'})
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      // yield put({ type: 'save' });
    },
  },

  reducers: {
    setInitData(state, action) {
      let whoCart = window.localStorage.userName||"noLogin"
      const cartData = window.localStorage[whoCart+"Cart"]||"[]"
      return { ...state, cartData:JSON.parse(cartData) };
    },
    addToCart(state, action) {
      const cartData = state.cartData.concat(action.payload.goodsData)
      let whoCart = window.localStorage.userName||"noLogin"
      window.localStorage[whoCart+"Cart"] = JSON.stringify(cartData)
      return { ...state, cartData:cartData };
    },
    delProduct(state, action) {
      const cartData = state.cartData
      cartData.splice(action.payload.delIndex,1)
      let whoCart = window.localStorage.userName||"noLogin"
      window.localStorage[whoCart+"Cart"] = JSON.stringify(cartData)
      return { ...state, cartData:cartData};
    },
    upShopCart(state, action){
      return { ...state, cartData:action.payload.cartData };
    }
  },

};
