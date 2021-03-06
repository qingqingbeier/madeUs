import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MakeUpKit from './routes/MakeUpKit';
import Collocation from './routes/Collocation';
import Cosmetics from './routes/Cosmetics';
import ClothingMall from './routes/ClothingMall';
import Detail from './routes/Detail/Detail';
import TallyOrder from './routes/TallyOrder/TallyOrder';
import GoodsList from './routes/GoodsList/GoodsList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/makeupKit" exact component={MakeUpKit} />
        <Route path="/collocation" exact component={Collocation} />
        <Route path="/cosmetics" exact component={Cosmetics} />
        <Route path="/clothingMall" exact component={ClothingMall} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/tallyOrder" exact component={TallyOrder} />
        <Route path="/goodsList" exact component={GoodsList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
