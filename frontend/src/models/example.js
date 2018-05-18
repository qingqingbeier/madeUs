export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      const localRegisterUsers = JSON.parse(window.localStorage.registeredUsers||'[]')
      window.localStorage.registeredUsers = JSON.stringify(localRegisterUsers.concat([{
        userName:'admin',
        password:'admin'
      },{
        userName:'test',
        password:'test'
      }]))
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line

      yield put({ type: 'save' });
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
