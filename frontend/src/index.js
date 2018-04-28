import dva from 'dva';
import './index.css';

import indexModel from './models/example';
import shopCart from './models/shopCart';
import user from './models/user';
// import createHistory from 'history/createBrowserHistory';

const cached = {}
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

// 1. Initialize
const app = dva({
  // history:createHistory
});

// 2. Plugins
// app.use({});

// 3. Model
registerModel(app, indexModel)
registerModel(app, shopCart)
registerModel(app, user)


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
