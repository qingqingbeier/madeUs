/**
 * Created by 黄晶晶 on 2018-04-11.
 */

import React from 'react';
import styles from './Footer.less';

const Footer = ({}) => {
  return (
    <div className={styles.wrap}>
      <footer>
        <p>Copyright © 2018 madeus.com</p>
        <ul className={styles.center}>
          <li><a href="index.html">首页</a><span>|</span></li>
          <li><a href="index.html">必买清单</a><span>|</span></li>
          <li><a href="index.html">搭配购</a><span>|</span></li>
          <li><a href="index.html">成套买</a><span>|</span></li>
          <li><a href="index.html">美妆商城</a><span>|</span></li>
          <li><a href="index.html">女装精选</a></li>
        </ul>
        <p>@ Made Us</p>
      </footer>
    </div>
  );
};

Footer.propTypes = {
};

export default Footer;
