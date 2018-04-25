/**
 * Created by 黄晶晶 on 2018-04-25.
 */

import React, { Component }from "react";
import styles from "./SideRight.less";
import {Link} from "dva/router";
import {headPort} from "../assets/index";
import {Badge, Icon, Tooltip} from "antd";

const text =
  <div className={styles.account}>
    <div className={styles.headPort}><img src={headPort}/></div>
    <span>用户名：</span>
    <span>黄晶晶</span>
  </div>;
const text2 = <span>我的钱包</span>;
const text3 = <span>我的收藏</span>;
const text4 = <span>我的足迹</span>;

class SideRight extends Component {

  render() {
    return (
      <div className={styles.wrap}>
        <div/>
        <ul>
          <li><Tooltip placement="left" title={text}><a><Icon type="user"/></a></Tooltip></li>
          <li><Badge count={5} offset={[75, -11]}><a><Icon type="shopping-cart"
                                                           style={{fontSize: 18, color: '#EF2751'}}/>购物车</a></Badge>
          </li>
          <li><Tooltip placement="left" title={text2}><a><Icon type="pay-circle-o"/></a></Tooltip></li>
          <li><Tooltip placement="left" title={text3}><a><Icon type="heart-o"/></a></Tooltip></li>
          <li><Tooltip placement="left" title={text4}><a><Icon type="clock-circle-o"/></a></Tooltip></li>
        </ul>
        <div><a className={styles.goTop} onClick={() => this.scrollToAnchor("top")}>▲<br/>Top</a></div>
      </div>
    );
  }
}
;

SideRight.propTypes = {};

export default SideRight;
