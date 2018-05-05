/**
 * Created by 黄晶晶 on 2018-04-09.
 */
import React from 'react';
import styles from './Header.less'
import  {Link} from "dva/router"

const Header = (props) => {
  const { nowActiveKey } = props;
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        <li className={nowActiveKey==='key1'?styles.active:''}><Link to="/">首页</Link></li>
        <li className={nowActiveKey==='key2'?styles.active:''}><Link to="#">必买清单</Link></li>
        <li className={nowActiveKey==='key3'?styles.active:''}><Link to="/collocation">搭配购</Link></li>
        <li className={nowActiveKey==='key4'?styles.active:''}><Link to="/makeUpKit">成套买</Link></li>
        <li className={nowActiveKey==='key5'?styles.active:''}><Link to="/cosmetics">美妆商城</Link></li>
        <li className={nowActiveKey==='key6'?styles.active:''}><Link to="/clothingmall">女装精选</Link></li>
      </ul>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
