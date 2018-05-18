export default {

  namespace: 'shopCart',

  state: {
    cartData:[],
    collectData:[],
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
      let whoCart = window.localStorage.userName||"noLogin";
      const cartData = window.localStorage[whoCart+"Cart"]||"[]";
      const collectData = window.localStorage[whoCart+"Collect"]||"[]";
      return { ...state,
        cartData:JSON.parse(cartData),
        collectData:JSON.parse(collectData)
      };
    },

    addToCart(state, action) {
      const cartData = state.cartData.concat(action.payload.goodsData);
      let who = window.localStorage.userName||"noLogin";
      window.localStorage[who+"Cart"] = JSON.stringify(cartData);
      return { ...state, cartData:cartData };
    },

    delProduct(state, action) {
      const cartData = state.cartData;
      cartData.splice(action.payload.delIndex,1); //splice 从数组指定位置删除一个元素
      let who = window.localStorage.userName||"noLogin";
      window.localStorage[who+"Cart"] = JSON.stringify(cartData);
      return { ...state, cartData:cartData};
    },

    addToCollect(state, action) {
      const collectData = state.collectData.concat(action.payload.goodsData);
      let who = window.localStorage.userName||"noLogin";
      window.localStorage[who+"Collect"] = JSON.stringify(collectData);
      return { ...state, collectData:collectData };
    },

    delCollect(state, action) {
      const collectData = state.collectData.filter(function(elem,index) {
        return elem.name!==action.payload.goodsData.name;
      });
      let who = window.localStorage.userName||"noLogin";
      window.localStorage[who+"Collect"] = JSON.stringify(collectData);
      return { ...state, collectData:collectData};
    },

    upShopCart(state, action){
      return { ...state, cartData:action.payload.cartData };
    }
  },

};
