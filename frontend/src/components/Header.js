/**
 * Created by 黄晶晶 on 2018-04-09.
 */
import React from 'react';
import styles from './Header.less'
import  {Link} from "dva/router"

const Header = () => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        <li className={styles.active}><Link to="/">首页</Link></li>
        <li>必买清单</li>
        <li><Link to="/collocation">搭配购</Link></li>
        <li><Link to="/makeUpKit">成套买</Link></li>
        <li><Link to="/cosmetics">美妆商城</Link></li>
        <li><Link to="/clothingmall">女装精选</Link></li>
      </ul>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
