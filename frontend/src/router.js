import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MakeUpKit from './routes/MakeUpKit';
import Collocation from './routes/Collocation';
import Cosmetics from './routes/Cosmetics';
import ClothingMall from './routes/ClothingMall';
import Detail from './routes/Detail/Detail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/makeupkit" exact component={MakeUpKit} />
        <Route path="/collocation" exact component={Collocation} />
        <Route path="/cosmetics" exact component={Cosmetics} />
        <Route path="/clothingmall" exact component={ClothingMall} />
        <Route path="/detail" exact component={Detail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
