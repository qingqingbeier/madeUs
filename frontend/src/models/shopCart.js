export default {

  namespace: 'shopCart',

  state: {
    cartData:[],
    showCart:false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({
        type:'setInitData',
        cartData:window.localStorage.cartData?JSON.parse(window.localStorage.cartData):[]
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      // yield put({ type: 'save' });
    },

  },

  reducers: {
    addToCart(state, action) {
      const cartData = state.cartData.concat(action.payload.goodsData)
      return { ...state, cartData:cartData };
    },
  },

};
